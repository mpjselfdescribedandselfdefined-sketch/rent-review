const towns = [
  "一ノ宮",
  "中沢",
  "乞田",
  "南野",
  "和田",
  "唐木田",
  "大字乞田",
  "大字落合",
  "大字貝取",
  "小野路町",
  "山王下",
  "愛宕",
  "東寺方",
  "桜ケ丘",
  "永山",
  "百草",
  "聖ケ丘",
  "落合",
  "落川",
  "諏訪",
  "豊ケ丘",
  "貝取",
  "連光寺",
  "関戸",
  "馬引沢",
  "鶴牧",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          多摩市の口コミ
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
              href={`/tokyo/tama/${encodeURIComponent(town)}`}
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
