export default async function PropertyPage({
  params,
}: {
  params: Promise<{ town: string; property: string }>;
}) {
  const { town, property } = await params;

  const townName = decodeURIComponent(town);
  const propertyName = decodeURIComponent(property);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-xl">
        <a
          href={`/tokyo/shinjuku/${encodeURIComponent(townName)}`}
          className="text-sm text-gray-600"
        >
          ← {townName}に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          {propertyName}
        </h1>

        <p className="mt-2 text-gray-600">
          {townName}にある物件の口コミ
        </p>

        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-lg font-bold">
            ⭐ まだ口コミはありません
          </p>

          <p className="mt-2 text-gray-600">
            この物件に住んだことがある方の口コミを募集しています。
          </p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-black p-4 font-bold text-white">
          口コミを投稿する
        </button>
      </div>
    </main>
  );
}
