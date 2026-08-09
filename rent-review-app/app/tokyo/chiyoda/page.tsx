const towns = [
  "丸の内",
  "大手町",
  "内幸町",
  "有楽町",
  "霞が関",
  "永田町",
  "隼町",
  "平河町",
  "麹町",
  "紀尾井町",
  "一番町",
  "二番町",
  "三番町",
  "四番町",
  "五番町",
  "六番町",
  "日比谷公園",
  "千代田",
  "皇居外苑",
  "北の丸公園",
  "九段南",
  "九段北",
  "富士見",
  "飯田橋",
  "一ツ橋",
  "神田神保町",
  "神田三崎町",
  "西神田",
  "神田猿楽町",
  "神田駿河台",
  "神田錦町",
  "神田小川町",
  "神田美土代町",
  "内神田",
  "神田司町",
  "神田多町",
  "神田淡路町",
  "神田須田町",
  "外神田",
  "鍛冶町",
  "神田鍛冶町",
  "神田紺屋町",
  "神田北乗物町",
  "神田富山町",
  "神田美倉町",
  "岩本町",
  "神田西福田町",
  "神田東松下町",
  "神田東紺屋町",
  "神田岩本町",
  "東神田",
  "神田和泉町",
  "神田佐久間町",
  "神田平河町",
  "神田松永町",
  "神田花岡町",
  "神田佐久間河岸",
  "神田練塀町",
  "神田相生町",
];

export default function ChiyodaPage() {
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
