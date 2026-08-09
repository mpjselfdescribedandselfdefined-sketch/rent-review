export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-bold">住まいの口コミ</h1>

        <p className="mt-2 text-gray-600">
          住む前に後悔しないための情報プラットフォーム
        </p>

        <input
          type="text"
          placeholder="マンション名・駅名・住所で検索"
          className="mt-8 w-full rounded-xl border bg-white p-4"
        />

        <button className="mt-3 w-full rounded-xl bg-black p-4 font-bold text-white">
          物件を検索
        </button>

        <div className="mt-10">
          <h2 className="text-xl font-bold">都道府県から探す</h2>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="/tokyo" className="rounded-xl bg-white p-4 text-center shadow-sm">
              東京都
            </a>

            <button className="rounded-xl bg-white p-4 shadow-sm">神奈川県</button>
            <button className="rounded-xl bg-white p-4 shadow-sm">埼玉県</button>
            <button className="rounded-xl bg-white p-4 shadow-sm">千葉県</button>
            <button className="rounded-xl bg-white p-4 shadow-sm">茨城県</button>
            <button className="rounded-xl bg-white p-4 shadow-sm">栃木県</button>
            <button className="rounded-xl bg-white p-4 shadow-sm">群馬県</button>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">口コミを投稿する</h2>
          <p className="mt-2 text-gray-600">
            実際に住んだ物件のリアルな情報を共有できます。
          </p>
        </div>
      </div>
    </main>
  );
}
