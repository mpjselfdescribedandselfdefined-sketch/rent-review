const towns = [
  "愛住町",
  "赤城下町",
  "赤城元町",
  "揚場町",
  "荒木町",
  "市谷加賀町",
  "市谷甲良町",
  "市谷砂土原町",
  "市谷左内町",
  "市谷台町",
  "市谷鷹匠町",
  "市谷田町",
  "市谷長延寺町",
  "市谷仲之町",
  "市谷八幡町",
  "市谷船河原町",
  "市谷本村町",
  "市谷薬王寺町",
  "市谷柳町",
  "市谷山伏町",
  "岩戸町",
  "榎町",
  "大久保",
  "改代町",
  "神楽河岸",
  "神楽坂",
  "霞ヶ丘町",
  "片町",
  "歌舞伎町",
  "上落合",
  "河田町",
  "喜久井町",
  "北新宿",
  "北町",
  "北山伏町",
  "細工町",
  "左門町",
  "信濃町",
  "下落合",
  "下宮比町",
  "白銀町",
  "新小川町",
  "新宿",
  "水道町",
  "須賀町",
  "住吉町",
  "大京町",
  "高田馬場",
  "箪笥町",
  "築地町",
  "津久戸町",
  "筑土八幡町",
  "天神町",
  "戸塚町",
  "富久町",
  "戸山",
  "内藤町",
  "中井",
  "中落合",
  "中里町",
  "中町",
  "納戸町",
  "西落合",
  "西五軒町",
  "西新宿",
  "西早稲田",
  "二十騎町",
  "馬場下町",
  "払方町",
  "原町",
  "東榎町",
  "東五軒町",
  "百人町",
  "袋町",
  "舟町",
  "弁天町",
  "南榎町",
  "南町",
  "南元町",
  "南山伏町",
  "山吹町",
  "矢来町",
  "横寺町",
  "余丁町",
  "四谷",
  "四谷坂町",
  "四谷三栄町",
  "四谷本塩町",
  "若葉",
  "若松町",
  "若宮町",
  "早稲田鶴巻町",
  "早稲田町",
  "早稲田南町",
];

export default function ShinjukuPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <a href="/tokyo" className="text-sm text-gray-600">
          ← 東京都に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          新宿区の口コミ
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
              href={`/tokyo/shinjuku/${encodeURIComponent(town)}`}
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
