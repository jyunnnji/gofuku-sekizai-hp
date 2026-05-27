import { createClient } from "microcms-js-sdk";
import type { MicroCMSListContent, MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";

// ─── Client ──────────────────────────────────────────────────────────────────

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// Next.js 14のfetchキャッシュを無効化（ISRを使う場合はnext.revalidateで制御）
const noStore: RequestInit = { cache: "no-store" };

// ─── Types ───────────────────────────────────────────────────────────────────

/** お知らせ（microCMS実フィールドに準拠） */
export type News = MicroCMSListContent & {
  title: string;
  category: string[];
  date: string;
  excerpt: string;
  isImportant: boolean;
};

/** 施工事例（microCMS実フィールドに準拠） */
export type Work = MicroCMSListContent & {
  title: string;
  category: string[];
  location: string;
  thumbnail: MicroCMSImage;
  description: string;
};

/** 施工事例詳細（microCMS実フィールドに準拠） */
export type WorkDetail = MicroCMSListContent & {
  beforeImage: MicroCMSImage;
  afterImage: MicroCMSImage;
  detail: string;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** ISO日付文字列を YYYY.MM.DD (JST) に変換 */
export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g, ".");
}

// ─── News ─────────────────────────────────────────────────────────────────────

/** お知らせ一覧を取得 */
export async function getNewsList(queries?: MicroCMSQueries) {
  return client.getList<News>({
    endpoint: "news",
    queries,
    customRequestInit: noStore,
  });
}

/** お知らせ1件を取得 */
export async function getNewsDetail(contentId: string, queries?: MicroCMSQueries) {
  return client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    customRequestInit: noStore,
  });
}

// ─── Works ────────────────────────────────────────────────────────────────────

/** 施工事例一覧を取得 */
export async function getWorksList(queries?: MicroCMSQueries) {
  return client.getList<Work>({
    endpoint: "works",
    queries,
    customRequestInit: noStore,
  });
}

/** 施工事例1件を取得 */
export async function getWorksDetail(contentId: string, queries?: MicroCMSQueries) {
  return client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
    customRequestInit: noStore,
  });
}

// ─── Works Details ────────────────────────────────────────────────────────────

/** 施工事例詳細一覧を取得 */
export async function getWorksDetailsList(queries?: MicroCMSQueries) {
  return client.getList<WorkDetail>({
    endpoint: "works-details",
    queries,
    customRequestInit: noStore,
  });
}

/** 施工事例詳細1件を取得 */
export async function getWorksDetailsDetail(contentId: string, queries?: MicroCMSQueries) {
  return client.getListDetail<WorkDetail>({
    endpoint: "works-details",
    contentId,
    queries,
    customRequestInit: noStore,
  });
}
