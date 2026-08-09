const towns = [
  "ふるさとの浜辺公園",
  "上池台",
  "下丸子",
  "中央",
  "中馬込",
  "久が原",
  "京浜島",
  "令和島",
  "仲六郷",
  "仲池上",
  "北千束",
  "北嶺町",
  "北糀谷",
  "北馬込",
  "千鳥",
  "南久が原",
  "南六郷",
  "南千束",
  "南蒲田",
  "南雪谷",
  "南馬込",
  "城南島",
  "多摩川",
  "大森中",
  "大森北",
  "大森南",
  "大森本町",
  "大森東",
  "大森西",
  "山王",
  "平和の森公園",
  "平和島",
  "新蒲田",
  "昭和島",
  "本羽田",
  "東六郷",
  "東嶺町",
  "東海",
  "東矢口",
  "東糀谷",
  "東蒲田",
  "東雪谷",
  "東馬込",
  "池上",
  "田園調布",
  "田園調布南",
  "田園調布本町",
  "矢口",
  "石川町",
  "羽田",
  "羽田旭町",
  "羽田空港",
  "萩中",
  "蒲田",
  "蒲田本町",
  "西六郷",
  "西嶺町",
  "西糀谷",
  "西蒲田",
  "西馬込",
  "雪谷大塚町",
  "鵜の木",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          大田区の口コミ
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
              href={`/tokyo/ota/${encodeURIComponent(town)}`}
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
