const towns = [
  "三田",
  "元赤坂",
  "元麻布",
  "六本木",
  "北青山",
  "南青山",
  "南麻布",
  "台場",
  "愛宕",
  "新橋",
  "東新橋",
  "東麻布",
  "浜松町",
  "海岸",
  "港南",
  "白金",
  "白金台",
  "芝",
  "芝公園",
  "芝大門",
  "芝浦",
  "虎ノ門",
  "西新橋",
  "西麻布",
  "赤坂",
  "高輪",
  "麻布十番",
  "麻布台",
  "麻布永坂町",
  "麻布狸穴町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          港区の口コミ
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
              href={`/tokyo/minato/${encodeURIComponent(town)}`}
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
