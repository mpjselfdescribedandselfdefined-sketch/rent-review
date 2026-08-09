"use client";

import { useState } from "react";

type Props = {
  properties: string[];
  basePath: string;
};

export default function PropertySearch({ properties, basePath }: Props) {
  const [query, setQuery] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="mt-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="マンション名・アパート名を検索"
        className="w-full rounded-xl border bg-white p-4"
      />

      <p className="mt-6 text-sm text-gray-500">
        {filteredProperties.length}件の物件
      </p>

      <div className="mt-3 space-y-3">
        {filteredProperties.map((property) => (
          <a
            key={property}
            href={`${basePath}/${encodeURIComponent(property)}`}
            className="block rounded-xl bg-white p-4 font-medium shadow-sm"
          >
            {property}
          </a>
        ))}

        {filteredProperties.length === 0 && (
          <div className="rounded-xl bg-white p-5 text-gray-500">
            該当する物件が見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
}
