const towns = [
  "三田",
  "上目黒",
  "下目黒",
  "中央町",
  "中根",
  "中町",
  "中目黒",
  "五本木",
  "八雲",
  "南",
  "原町",
  "大岡山",
  "大橋",
  "平町",
  "東が丘",
  "東山",
  "柿の木坂",
  "洗足",
  "目黒",
  "目黒本町",
  "碑文谷",
  "祐天寺",
  "緑が丘",
  "自由が丘",
  "青葉台",
  "駒場",
  "鷹番",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          目黒区の口コミ
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
              href={`/tokyo/meguro/${encodeURIComponent(town)}`}
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
