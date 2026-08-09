const towns = [
  "上大崎",
  "中延",
  "二葉",
  "八潮",
  "勝島",
  "北品川",
  "南品川",
  "南大井",
  "大井",
  "大崎",
  "小山",
  "小山台",
  "平塚",
  "広町",
  "戸越",
  "旗の台",
  "東中延",
  "東五反田",
  "東八潮",
  "東品川",
  "東大井",
  "荏原",
  "西中延",
  "西五反田",
  "西品川",
  "西大井",
  "豊町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          品川区の口コミ
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
              href={`/tokyo/shinagawa/${encodeURIComponent(town)}`}
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
