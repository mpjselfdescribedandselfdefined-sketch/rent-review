const towns = [
  "さくら町",
  "万願寺",
  "三沢",
  "南平",
  "多摩平",
  "大坂上",
  "大字万願寺",
  "大字上田",
  "大字下田",
  "大字宮",
  "大字川辺堀之内",
  "大字新井",
  "大字日野",
  "大字石田",
  "大字豊田",
  "富士町",
  "平山",
  "新井",
  "新町",
  "日野台",
  "日野本町",
  "旭が丘",
  "東平山",
  "東豊田",
  "栄町",
  "百草",
  "石田",
  "神明",
  "程久保",
  "落川",
  "西平山",
  "豊田",
  "高幡",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          日野市の口コミ
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
              href={`/tokyo/hino/${encodeURIComponent(town)}`}
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
