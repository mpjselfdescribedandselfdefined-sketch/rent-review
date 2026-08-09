const towns = [
  "一之江",
  "一之江町",
  "上一色",
  "上篠崎",
  "上篠崎町",
  "下篠崎町",
  "下鎌田町",
  "中央",
  "中葛西",
  "二之江町",
  "前野町",
  "北小岩",
  "北篠崎",
  "北篠崎町",
  "北葛西",
  "南小岩",
  "南篠崎町",
  "南葛西",
  "堀江町",
  "大杉",
  "宇喜田町",
  "小島町",
  "小松川",
  "平井",
  "新堀",
  "新田",
  "春江町",
  "本一色",
  "東小岩",
  "東小松川",
  "東松本",
  "東瑞江",
  "東篠崎",
  "東篠崎町",
  "東葛西",
  "松島",
  "松本",
  "松本町",
  "松江",
  "桑川町",
  "江戸川",
  "清新町",
  "瑞江",
  "篠崎町",
  "臨海町",
  "興宮町",
  "船堀",
  "葛西",
  "西一之江",
  "西小岩",
  "西小松川町",
  "西瑞江",
  "西篠崎",
  "西篠崎町",
  "西葛西",
  "谷河内",
  "谷河内町",
  "長島町",
  "鹿骨",
  "鹿骨町",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          江戸川区の口コミ
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
              href={`/tokyo/edogawa/${encodeURIComponent(town)}`}
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
