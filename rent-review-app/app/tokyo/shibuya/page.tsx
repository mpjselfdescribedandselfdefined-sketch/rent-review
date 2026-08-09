const towns = [
  "上原",
  "代々木",
  "代々木神園町",
  "代官山町",
  "元代々木町",
  "円山町",
  "初台",
  "千駄ケ谷",
  "千駄ヶ谷",
  "南平台町",
  "大山町",
  "宇田川町",
  "富ケ谷",
  "富ヶ谷",
  "幡ケ谷",
  "幡ヶ谷",
  "広尾",
  "恵比寿",
  "恵比寿南",
  "恵比寿西",
  "本町",
  "東",
  "松濤",
  "桜丘町",
  "渋谷",
  "猿楽町",
  "神南",
  "神宮前",
  "神山町",
  "神泉町",
  "笹塚",
  "笹塚",
  "西原",
  "道玄坂",
  "鉢山町",
  "鶯谷町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          渋谷区の口コミ
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
              href={`/tokyo/shibuya/${encodeURIComponent(town)}`}
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
