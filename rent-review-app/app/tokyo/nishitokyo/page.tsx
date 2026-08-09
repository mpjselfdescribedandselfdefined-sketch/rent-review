const towns = [
  "ひばりが丘",
  "ひばりが丘北",
  "下保谷",
  "中町",
  "住吉町",
  "保谷町",
  "北原町",
  "北町",
  "南町",
  "向台町",
  "富士町",
  "新町",
  "東伏見",
  "東町",
  "柳沢",
  "栄町",
  "泉町",
  "田無町",
  "緑町",
  "芝久保町",
  "西原町",
  "谷戸町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          西東京市の口コミ
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
              href={`/tokyo/nishitokyo/${encodeURIComponent(town)}`}
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
