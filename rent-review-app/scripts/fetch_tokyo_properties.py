from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError, URLError
import json
import time

ROOT = Path(__file__).resolve().parents[1]
ADDRESS_FILE = ROOT / "data" / "tokyo-addresses.json"
TOKYO_APP = ROOT / "app" / "tokyo"
OUT_DIR = ROOT / "data" / "properties"

OVERPASS = "https://overpass-api.de/api/interpreter"
USER_AGENT = "rent-review-app/1.0"

OUT_DIR.mkdir(parents=True, exist_ok=True)

addresses = json.loads(
    ADDRESS_FILE.read_text(encoding="utf-8")
)

# 日本語の市区名 → 既存フォルダslug を自動発見
slugs = {}

for folder in TOKYO_APP.iterdir():
    page = folder / "page.tsx"

    if not folder.is_dir() or not page.exists():
        continue

    text = page.read_text(encoding="utf-8", errors="ignore")

    for area_name in addresses:
        if f"{area_name}の口コミ" in text:
            slugs[area_name] = folder.name
            break

missing = sorted(set(addresses) - set(slugs))

if missing:
    print("⚠️ slugが見つからない地域:")
    for area in missing:
        print("・", area)
    raise SystemExit(1)

print(f"🌟 {len(slugs)}地域のslug確認OK")


def overpass_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def fetch_area(area_name: str):
    area = overpass_escape(area_name)

    query = f"""
[out:json][timeout:120];

area
  ["name"="東京都"]
  ["boundary"="administrative"]
  ["admin_level"="4"]
  ->.tokyo;

rel(area.tokyo)
  ["name"="{area}"]
  ["boundary"="administrative"]
  ["admin_level"="7"];

map_to_area -> .municipality;

(
  nwr(area.municipality)
    ["building"="apartments"]
    ["name"];

  nwr(area.municipality)
    ["building"="residential"]
    ["name"];

  nwr(area.municipality)
    ["residential"="apartments"]
    ["name"];
);

out tags;
"""

    payload = urlencode({"data": query}).encode("utf-8")

    for attempt in range(1, 5):
        try:
            req = Request(
                OVERPASS,
                data=payload,
                headers={
                    "User-Agent": USER_AGENT,
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },
            )

            with urlopen(req, timeout=150) as response:
                return json.load(response)

        except (HTTPError, URLError, TimeoutError) as e:
            print(
                f"  ⚠️ 通信エラー "
                f"{attempt}/4: {e}"
            )

            if attempt < 4:
                time.sleep(10 * attempt)

    raise RuntimeError(
        f"{area_name} の取得に4回失敗しました"
    )


def find_town(tags, towns):
    # 日本住所で使われる町名系タグを見る
    keys = [
        "addr:quarter",
        "addr:neighbourhood",
        "addr:suburb",
        "addr:place",
        "addr:full",
    ]

    address_text = " ".join(
        str(tags.get(key, ""))
        for key in keys
        if tags.get(key)
    )

    if not address_text:
        return None

    # 「新宿」より「西新宿」を先に判定する
    for town in sorted(
        towns,
        key=len,
        reverse=True,
    ):
        if town in address_text:
            return town

    return None


area_names = list(addresses.keys())
total = len(area_names)

for index, area_name in enumerate(area_names, 1):
    slug = slugs[area_name]
    out = OUT_DIR / f"{slug}.json"

    # 前回成功済みならスキップ
    if out.exists():
        print(
            f"[{index}/{total}] ⏭️ "
            f"{area_name} は保存済み"
        )
        continue

    print(
        f"[{index}/{total}] 🏢 "
        f"{area_name}を取得中..."
    )

    try:
        result = fetch_area(area_name)

        towns = addresses[area_name]

        property_map = {
            town: set()
            for town in towns
        }

        unmatched = []

        for item in result.get("elements", []):
            tags = item.get("tags", {})

            name = (
                tags.get("name:ja")
                or tags.get("name")
                or ""
            ).strip()

            if not name:
                continue

            town = find_town(tags, towns)

            if town:
                property_map[town].add(name)
            else:
                unmatched.append(name)

        clean_map = {
            town: sorted(names)
            for town, names in property_map.items()
            if names
        }

        payload = {
            "area": area_name,
            "source": "OpenStreetMap",
            "towns": clean_map,
            "unmatchedCount": len(set(unmatched)),
        }

        out.write_text(
            json.dumps(
                payload,
                ensure_ascii=False,
                indent=2,
            ),
            encoding="utf-8",
        )

        count = sum(
            len(names)
            for names in clean_map.values()
        )

        print(
            f"  ✅ {count}件を"
            f"{len(clean_map)}町に振り分け"
        )

    except Exception as e:
        print(f"  ❌ {area_name}: {e}")
        print(
            "  → 後で同じスクリプトを"
            "再実行すれば再挑戦できます"
        )

    # 公開Overpassに連打しない
    time.sleep(3)

print("")
print("🌟 一括取得処理が終わったよ！")
print(
    "保存先: "
    "rent-review-app/data/properties/"
)
