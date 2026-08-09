const towns = [
  "住吉町",
  "八幡町",
  "分梅町",
  "北山町",
  "南町",
  "四谷",
  "多磨町",
  "天神町",
  "宮町",
  "宮西町",
  "寿町",
  "小柳町",
  "幸町",
  "府中町",
  "押立町",
  "新町",
  "日吉町",
  "日新町",
  "日鋼町",
  "是政",
  "晴見町",
  "朝日町",
  "本宿町",
  "本町",
  "東芝町",
  "栄町",
  "武蔵台",
  "浅間町",
  "清水が丘",
  "片町",
  "白糸台",
  "矢崎町",
  "紅葉丘",
  "緑町",
  "美好町",
  "若松町",
  "西原町",
  "西府町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          府中市の口コミ
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
              href={`/tokyo/fuchu/${encodeURIComponent(town)}`}
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
