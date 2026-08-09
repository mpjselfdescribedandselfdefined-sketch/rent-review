const towns = [
  "三好",
  "亀戸",
  "住吉",
  "佐賀",
  "冬木",
  "北砂",
  "千田",
  "千石",
  "南砂",
  "古石場",
  "塩浜",
  "夢の島",
  "大島",
  "富岡",
  "常盤",
  "平野",
  "扇橋",
  "新大橋",
  "新木場",
  "新砂",
  "有明",
  "木場",
  "東砂",
  "東陽",
  "東雲",
  "枝川",
  "森下",
  "毛利",
  "永代",
  "海の森",
  "海辺",
  "深川",
  "清澄",
  "潮見",
  "牡丹",
  "猿江",
  "白河",
  "石島",
  "福住",
  "若洲",
  "豊洲",
  "越中島",
  "辰巳",
  "門前仲町",
  "青海",
  "青海二丁目地先",
  "高橋",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          江東区の口コミ
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
              href={`/tokyo/koto/${encodeURIComponent(town)}`}
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
