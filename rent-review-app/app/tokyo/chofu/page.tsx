const towns = [
  "上布田町",
  "上石原",
  "下布田町",
  "下石原",
  "仙川町",
  "佐須町",
  "入間町",
  "八雲台",
  "国領町",
  "多摩川",
  "大町",
  "富士見町",
  "小島町",
  "布田",
  "東つつじケ丘",
  "染地",
  "柴崎",
  "深大寺元町",
  "深大寺北町",
  "深大寺南町",
  "深大寺東町",
  "深大寺町",
  "緑ケ丘",
  "若葉町",
  "菊野台",
  "西つつじケ丘",
  "西町",
  "調布ケ丘",
  "野水",
  "飛田給",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          調布市の口コミ
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
              href={`/tokyo/chofu/${encodeURIComponent(town)}`}
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
