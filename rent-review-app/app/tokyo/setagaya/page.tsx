const towns = [
  "三宿",
  "三軒茶屋",
  "上北沢",
  "上用賀",
  "上祖師谷",
  "上野毛",
  "上馬",
  "下馬",
  "世田谷",
  "中町",
  "代沢",
  "代田",
  "八幡山",
  "北沢",
  "北烏山",
  "千歳台",
  "南烏山",
  "喜多見",
  "大原",
  "大蔵",
  "太子堂",
  "奥沢",
  "宇奈根",
  "宮坂",
  "尾山台",
  "岡本",
  "弦巻",
  "成城",
  "新町",
  "東玉川",
  "松原",
  "桜",
  "桜上水",
  "桜丘",
  "桜新町",
  "梅丘",
  "池尻",
  "深沢",
  "瀬田",
  "玉堤",
  "玉川",
  "玉川台",
  "玉川田園調布",
  "用賀",
  "砧",
  "砧公園",
  "祖師谷",
  "等々力",
  "粕谷",
  "経堂",
  "給田",
  "羽根木",
  "船橋",
  "若林",
  "豪徳寺",
  "赤堤",
  "野毛",
  "野沢",
  "鎌田",
  "駒沢",
  "駒沢公園",
];

export default function AreaPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          世田谷区の口コミ
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
              href={`/tokyo/setagaya/${encodeURIComponent(town)}`}
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
