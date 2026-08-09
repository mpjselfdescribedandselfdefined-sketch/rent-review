const towns = [
  "三内",
  "上ノ台",
  "上代継",
  "下代継",
  "乙津",
  "二宮",
  "二宮東",
  "五日市",
  "伊奈",
  "入野",
  "切欠",
  "原小宮",
  "小中野",
  "小和田",
  "小峰台",
  "小川",
  "小川東",
  "山田",
  "平沢",
  "平沢東",
  "平沢西",
  "引田",
  "戸倉",
  "横沢",
  "油平",
  "深沢",
  "渕上",
  "瀬戸岡",
  "牛沼",
  "留原",
  "秋川",
  "秋留",
  "網代",
  "舘谷",
  "舘谷台",
  "草花",
  "菅生",
  "野辺",
  "雨間",
  "養沢",
  "高尾",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          あきる野市の口コミ
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
              href={`/tokyo/akiruno/${encodeURIComponent(town)}`}
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
