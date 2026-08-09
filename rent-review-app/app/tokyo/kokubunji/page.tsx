const towns = [
  "並木町",
  "光町",
  "内藤",
  "北町",
  "南町",
  "富士本",
  "戸倉",
  "新町",
  "日吉町",
  "本多",
  "本町",
  "東元町",
  "東恋ケ窪",
  "東戸倉",
  "泉町",
  "西元町",
  "西恋ケ窪",
  "西町",
  "高木町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          国分寺市の口コミ
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
              href={`/tokyo/kokubunji/${encodeURIComponent(town)}`}
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
