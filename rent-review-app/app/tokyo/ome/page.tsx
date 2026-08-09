const towns = [
  "上町",
  "二俣尾",
  "今井",
  "今寺",
  "仲町",
  "住江町",
  "勝沼",
  "千ヶ瀬町",
  "友田町",
  "吹上",
  "和田町",
  "塩船",
  "大柳町",
  "大門",
  "天ヶ瀬町",
  "富岡",
  "小曾木",
  "師岡",
  "師岡町",
  "御岳",
  "御岳山",
  "御岳本町",
  "成木",
  "新町",
  "日向和田",
  "木野下",
  "末広町",
  "本町",
  "東青梅",
  "柚木町",
  "根ヶ布",
  "梅郷",
  "森下町",
  "沢井",
  "河辺町",
  "滝ノ上町",
  "畑中",
  "藤橋",
  "裏宿町",
  "西分",
  "西分町",
  "谷野",
  "野上町",
  "長淵",
  "駒木町",
  "黒沢",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          青梅市の口コミ
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
              href={`/tokyo/ome/${encodeURIComponent(town)}`}
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
