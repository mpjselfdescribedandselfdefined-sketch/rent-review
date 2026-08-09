const towns = [
  "上池袋",
  "北大塚",
  "千川",
  "千早",
  "南大塚",
  "南池袋",
  "南長崎",
  "巣鴨",
  "東池袋",
  "池袋",
  "池袋本町",
  "目白",
  "西巣鴨",
  "西池袋",
  "要町",
  "長崎",
  "雑司が谷",
  "駒込",
  "高松",
  "高田",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          豊島区の口コミ
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
              href={`/tokyo/toshima/${encodeURIComponent(town)}`}
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
