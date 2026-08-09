const towns = [
  "たかの台",
  "上水南町",
  "上水新町",
  "上水本町",
  "中島町",
  "仲町",
  "喜平町",
  "回田町",
  "大沼町",
  "天神町",
  "学園東町",
  "学園西町",
  "小川東町",
  "小川町",
  "小川西町",
  "御幸町",
  "栄町",
  "津田町",
  "美園町",
  "花小金井",
  "花小金井南町",
  "鈴木町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          小平市の口コミ
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
              href={`/tokyo/kodaira/${encodeURIComponent(town)}`}
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
