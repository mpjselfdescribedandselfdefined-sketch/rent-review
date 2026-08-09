const towns = [
  "上井草",
  "上荻",
  "上高井戸",
  "下井草",
  "下高井戸",
  "久我山",
  "井草",
  "今川",
  "南荻窪",
  "和泉",
  "和田",
  "善福寺",
  "堀ノ内",
  "大宮",
  "天沼",
  "宮前",
  "成田東",
  "成田西",
  "方南",
  "本天沼",
  "松ノ木",
  "松庵",
  "桃井",
  "梅里",
  "永福",
  "浜田山",
  "清水",
  "荻窪",
  "西荻北",
  "西荻南",
  "阿佐谷北",
  "阿佐谷南",
  "高井戸東",
  "高井戸西",
  "高円寺北",
  "高円寺南",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          杉並区の口コミ
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
              href={`/tokyo/suginami/${encodeURIComponent(town)}`}
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
