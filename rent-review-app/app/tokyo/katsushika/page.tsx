const towns = [
  "お花茶屋",
  "上千葉町",
  "上小松町",
  "上平井町",
  "下千葉町",
  "下小松町",
  "亀有",
  "亀有町",
  "南水元",
  "四つ木",
  "堀切",
  "堀切町",
  "奥戸",
  "奥戸新町",
  "奥戸本町",
  "宝町",
  "小菅",
  "小菅町",
  "小谷野町",
  "平井中町",
  "新宿",
  "新宿町",
  "新小岩",
  "本田中原町",
  "本田原町",
  "本田宝木塚町",
  "本田川端町",
  "本田木根川町",
  "本田淡之須町",
  "本田渋江町",
  "本田町",
  "本田立石町",
  "本田篠原町",
  "本田若宮町",
  "東四つ木",
  "東堀切",
  "東新小岩",
  "東水元",
  "東立石",
  "東金町",
  "柴又",
  "柴又町",
  "水元",
  "水元公園",
  "水元小合上町",
  "水元小合新町",
  "水元小合町",
  "水元猿町",
  "水元飯塚町",
  "白鳥",
  "砂原町",
  "立石",
  "細田",
  "細田町",
  "西亀有",
  "西新小岩",
  "西水元",
  "西淡之須町",
  "西篠原町",
  "金町",
  "金町浄水場",
  "鎌倉",
  "鎌倉町",
  "青戸",
  "青戸町",
  "高砂",
  "高砂町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          葛飾区の口コミ
        </h1>

        <p className="mt-2 text-gray-600">
          町名を選んで、物件口コミを探せます。
        </p>

        <h2 className="mt-8 text-xl font-bold">
          町名から探す
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {towns.map((town) => (
            <a
              key={town}
              href={`/tokyo/katsushika/${encodeURIComponent(town)}`}
              className="rounded-xl bg-white p-4 text-center shadow-sm"
            >
              {town}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
