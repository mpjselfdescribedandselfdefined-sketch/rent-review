const towns = [
  "千石",
  "千駄木",
  "向丘",
  "大塚",
  "小日向",
  "小石川",
  "弥生",
  "後楽",
  "春日",
  "本郷",
  "本駒込",
  "根津",
  "水道",
  "湯島",
  "白山",
  "目白台",
  "西片",
  "関口",
  "音羽",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          文京区の口コミ
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
              href={`/tokyo/bunkyo/${encodeURIComponent(town)}`}
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
