const towns = [
  "三原台",
  "上石神井",
  "上石神井南町",
  "下石神井",
  "中村",
  "中村北",
  "中村南",
  "光が丘",
  "北町",
  "南大泉",
  "南田中",
  "向山",
  "土支田",
  "大泉学園町",
  "大泉町",
  "富士見台",
  "小竹町",
  "平和台",
  "早宮",
  "旭丘",
  "旭町",
  "春日町",
  "東大泉",
  "栄町",
  "桜台",
  "氷川台",
  "田柄",
  "石神井台",
  "石神井町",
  "立野町",
  "練馬",
  "羽沢",
  "西大泉",
  "西大泉町",
  "谷原",
  "豊玉上",
  "豊玉中",
  "豊玉北",
  "豊玉南",
  "貫井",
  "錦",
  "関町北",
  "関町南",
  "関町東",
  "高松",
  "高野台",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          練馬区の口コミ
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
              href={`/tokyo/nerima/${encodeURIComponent(town)}`}
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
