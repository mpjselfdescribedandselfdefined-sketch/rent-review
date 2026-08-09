const towns = [
  "ひばりが丘団地",
  "上の原",
  "下里",
  "中央町",
  "八幡町",
  "前沢",
  "南沢",
  "南町",
  "大門町",
  "学園町",
  "小山",
  "幸町",
  "弥生",
  "新川町",
  "本町",
  "東本町",
  "柳窪",
  "氷川台",
  "浅間町",
  "滝山",
  "神宝町",
  "野火止",
  "金山町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          東久留米市の口コミ
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
              href={`/tokyo/higashikurume/${encodeURIComponent(town)}`}
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
