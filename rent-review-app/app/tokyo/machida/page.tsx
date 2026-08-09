const towns = [
  "つくし野",
  "三輪町",
  "三輪緑山",
  "上小山田町",
  "下小山田町",
  "中町",
  "南つくし野",
  "南大谷",
  "南成瀬",
  "南町田",
  "原町田",
  "図師町",
  "大蔵町",
  "小山ヶ丘",
  "小山田桜台",
  "小山町",
  "小川",
  "小野路町",
  "山崎",
  "山崎町",
  "常盤町",
  "広袴",
  "広袴町",
  "忠生",
  "成瀬",
  "成瀬が丘",
  "成瀬台",
  "旭町",
  "木曽東",
  "木曽町",
  "木曽西",
  "本町田",
  "東玉川学園",
  "根岸",
  "根岸町",
  "森野",
  "玉川学園",
  "相原町",
  "真光寺",
  "真光寺町",
  "矢部町",
  "能ケ谷町",
  "能ヶ谷",
  "薬師台",
  "藤の台",
  "西成瀬",
  "野津田町",
  "金井",
  "金井ヶ丘",
  "金井町",
  "金森",
  "金森東",
  "高ケ坂",
  "高ヶ坂",
  "鶴川",
  "鶴間",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          町田市の口コミ
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
              href={`/tokyo/machida/${encodeURIComponent(town)}`}
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
