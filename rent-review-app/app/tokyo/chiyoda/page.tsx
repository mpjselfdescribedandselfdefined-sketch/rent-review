const towns = [
  "一ツ橋",
  "一番町",
  "三崎町",
  "三番町",
  "丸の内",
  "九段北",
  "九段南",
  "二番町",
  "五番町",
  "六番町",
  "内幸町",
  "内神田",
  "北の丸公園",
  "千代田",
  "四番町",
  "外神田",
  "大手町",
  "富士見",
  "岩本町",
  "平河町",
  "日比谷公園",
  "有楽町",
  "東神田",
  "永田町",
  "猿楽町",
  "皇居外苑",
  "神田三崎町",
  "神田佐久間河岸",
  "神田佐久間町",
  "神田北乗物町",
  "神田司町",
  "神田和泉町",
  "神田多町",
  "神田富山町",
  "神田小川町",
  "神田岩本町",
  "神田平河町",
  "神田東松下町",
  "神田東紺屋町",
  "神田松永町",
  "神田淡路町",
  "神田猿楽町",
  "神田相生町",
  "神田神保町",
  "神田紺屋町",
  "神田練塀町",
  "神田美倉町",
  "神田美土代町",
  "神田花岡町",
  "神田西福田町",
  "神田錦町",
  "神田鍛冶町",
  "神田須田町",
  "神田駿河台",
  "紀尾井町",
  "西神田",
  "鍛冶町",
  "隼町",
  "霞が関",
  "飯田橋",
  "麹町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          千代田区の口コミ
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
              href={`/tokyo/chiyoda/${encodeURIComponent(town)}`}
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
