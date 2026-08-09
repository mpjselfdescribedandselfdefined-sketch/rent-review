const towns = [
  "明石町",
  "入船",
  "勝どき",
  "京橋",
  "銀座",
  "新川",
  "新富",
  "月島",
  "築地",
  "佃",
  "豊海町",
  "日本橋",
  "日本橋大伝馬町",
  "日本橋蛎殻町",
  "日本橋兜町",
  "日本橋茅場町",
  "日本橋小網町",
  "日本橋小伝馬町",
  "日本橋小舟町",
  "日本橋富沢町",
  "日本橋中洲",
  "日本橋人形町",
  "日本橋箱崎町",
  "日本橋浜町",
  "日本橋馬喰町",
  "日本橋久松町",
  "日本橋堀留町",
  "日本橋本石町",
  "日本橋本町",
  "日本橋室町",
  "日本橋横山町",
  "八丁堀",
  "浜離宮庭園",
  "晴海",
  "東日本橋",
  "湊",
  "八重洲",
];

export default function ChuoPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          中央区の口コミ
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
              href={`/tokyo/chuo/${encodeURIComponent(town)}`}
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
