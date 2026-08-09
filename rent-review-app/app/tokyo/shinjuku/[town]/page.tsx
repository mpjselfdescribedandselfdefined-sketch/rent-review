import PropertySearch from "../../../../components/PropertySearch";
import propertyData from "../../../../data/properties/shinjuku-nishishinjuku.json";

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const townName = decodeURIComponent(town);

  const properties =
    townName === "西新宿"
      ? propertyData.properties
      : [];

  const basePath = `/tokyo/shinjuku/${encodeURIComponent(townName)}`;

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-xl">
        <a href="/tokyo/shinjuku" className="text-sm text-gray-600">
          ← 新宿区に戻る
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
