const towns = [
  "上中里",
  "上十条",
  "中十条",
  "中里",
  "十条仲原",
  "十条台",
  "堀船",
  "岩淵町",
  "岸町",
  "志茂",
  "昭和町",
  "東十条",
  "東田端",
  "栄町",
  "桐ケ丘",
  "浮間",
  "滝野川",
  "王子",
  "王子本町",
  "田端",
  "田端新町",
  "神谷",
  "西が丘",
  "西ケ原",
  "豊島",
  "赤羽",
  "赤羽北",
  "赤羽南",
  "赤羽台",
  "赤羽西",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          北区の口コミ
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
              href={`/tokyo/kita/${encodeURIComponent(town)}`}
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
