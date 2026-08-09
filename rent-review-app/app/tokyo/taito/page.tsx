const towns = [
  "三ノ輪",
  "三筋",
  "上野",
  "上野公園",
  "上野桜木",
  "下谷",
  "今戸",
  "元浅草",
  "入谷",
  "北上野",
  "千束",
  "台東",
  "寿",
  "小島",
  "日本堤",
  "東上野",
  "東浅草",
  "松が谷",
  "柳橋",
  "根岸",
  "橋場",
  "池之端",
  "浅草",
  "浅草橋",
  "清川",
  "秋葉原",
  "竜泉",
  "花川戸",
  "蔵前",
  "西浅草",
  "谷中",
  "雷門",
  "駒形",
  "鳥越",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          台東区の口コミ
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
              href={`/tokyo/taito/${encodeURIComponent(town)}`}
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
