export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const townName = decodeURIComponent(town);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-xl">
        <a href="/tokyo/shinagawa" className="text-sm text-gray-600">
          ← 品川区に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          {townName}の口コミ
        </h1>

        <p className="mt-2 text-gray-600">
          {townName}の物件口コミを探せます。
        </p>
      </div>
    </main>
  );
}
