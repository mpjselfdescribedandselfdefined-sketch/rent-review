import { readFile } from "fs/promises";
import path from "path";

type PropertyData = {
  towns?: Record<string, string[]>;
};

export async function getTownProperties(
  areaSlug: string,
  townName: string
): Promise<string[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "properties",
      `${areaSlug}.json`
    );

    const text = await readFile(filePath, "utf-8");
    const data = JSON.parse(text) as PropertyData;

    return data.towns?.[townName] ?? [];
  } catch {
    return [];
  }
}
