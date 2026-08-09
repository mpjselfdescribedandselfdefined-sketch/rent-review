import PropertySearch from "../../../../components/PropertySearch";
import { getTownProperties } from "../../../../lib/getTownProperties";

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const townName = decodeURIComponent(town);

  const properties = await getTownProperties(
    "minato",
    townName
  );

  const basePath =
    `/tokyo/minato/${encodeURIComponent(townName)}`;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-xl">
        <a
          href="/tokyo/minato"
          className="text-sm text-gray-600"
        >
          ← 港区に戻る
        </a>

        <h1 className="mt-6 text-3xl font-bold">
          {townName}の口コミ
        </h1>

        <p className="mt-2 text-gray-600">
          物件名を検索するか、一覧から選んでください。
        </p>

        <PropertySearch
          properties={properties}
          basePath={basePath}
        />
      </div>
    </main>
  );
}
