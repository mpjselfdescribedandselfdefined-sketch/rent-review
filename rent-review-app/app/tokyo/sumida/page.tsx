const towns = [
  "両国",
  "亀沢",
  "京島",
  "八広",
  "千歳",
  "向島",
  "吾妻橋",
  "堤通",
  "墨田",
  "太平",
  "押上",
  "文花",
  "本所",
  "東向島",
  "東墨田",
  "東駒形",
  "業平",
  "横川",
  "横網",
  "江東橋",
  "石原",
  "立川",
  "立花",
  "緑",
  "菊川",
  "錦糸",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          墨田区の口コミ
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
              href={`/tokyo/sumida/${encodeURIComponent(town)}`}
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
