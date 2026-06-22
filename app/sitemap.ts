import type { MetadataRoute } from "next";
import { getNewsList } from "@/lib/microcms";

const BASE_URL = "https://www.gofuku-sekizai.com";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 静的ページ
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // お知らせ記事（動的ルート /news/[slug]）
  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const news = await getNewsList({ limit: 100, fields: "id,updatedAt" });
    newsRoutes = news.contents.map((item) => ({
      url: `${BASE_URL}/news/${item.id}`,
      lastModified: item.updatedAt ? new Date(item.updatedAt) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // microCMS が取得できない場合でも静的ページのサイトマップは返す
    newsRoutes = [];
  }

  return [...staticRoutes, ...newsRoutes];
}
