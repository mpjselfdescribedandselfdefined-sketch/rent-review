const towns = [
  "つつじが丘",
  "もくせいの杜",
  "上川原町",
  "中神町",
  "大神町",
  "宮沢町",
  "拝島町",
  "昭和町",
  "朝日町",
  "東町",
  "松原町",
  "武蔵野",
  "玉川町",
  "田中町",
  "福島町",
  "築地町",
  "緑町",
  "美堀町",
  "郷地町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          昭島市の口コミ
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
              href={`/tokyo/akishima/${encodeURIComponent(town)}`}
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
