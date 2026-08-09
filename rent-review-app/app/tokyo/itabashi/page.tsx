const towns = [
  "三園",
  "上板橋",
  "上赤塚町",
  "上赤塚町",
  "下赤塚町",
  "下赤塚町",
  "中丸町",
  "中台",
  "中板橋",
  "仲宿",
  "仲町",
  "前野町",
  "加賀",
  "南常盤台",
  "南町",
  "双葉町",
  "向原",
  "四葉",
  "四葉町",
  "坂下",
  "大原町",
  "大和町",
  "大山東町",
  "大山町",
  "大山西町",
  "大山金井町",
  "大谷口",
  "大谷口上町",
  "大谷口北町",
  "大門",
  "宮本町",
  "富士見町",
  "小茂根",
  "小豆沢",
  "常盤台",
  "幸町",
  "弥生町",
  "徳丸",
  "徳丸本町",
  "徳丸町",
  "志村",
  "志村西台町",
  "成増",
  "新河岸",
  "本町",
  "東坂下",
  "東山町",
  "東新町",
  "板橋",
  "栄町",
  "桜川",
  "氷川町",
  "泉町",
  "清水町",
  "熊野町",
  "相生町",
  "稲荷台",
  "舟渡",
  "若木",
  "蓮根",
  "蓮沼町",
  "西台",
  "赤塚",
  "赤塚新町",
  "赤塚",
  "赤塚新町",
  "高島平",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          板橋区の口コミ
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
              href={`/tokyo/itabashi/${encodeURIComponent(town)}`}
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
