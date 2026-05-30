export const dynamic = "force-dynamic";

import { getWorksList, getWorksDetailsList } from "@/lib/microcms";
import WorksPageClient from "@/components/WorksPageClient";

export default async function WorksListPage() {
  try {
    const [worksRes, detailsRes] = await Promise.all([
      getWorksList({ limit: 100 }),
      getWorksDetailsList({ limit: 100 }),
    ]);

    const items = worksRes.contents.map((work, i) => {
      const detail = detailsRes.contents[i];
      return {
        id: work.id,
        title: work.title,
        category: work.category[0] ?? "",
        location: work.location,
        description: work.description,
        thumbnailUrl: work.thumbnail.url,
        beforeImageUrl: detail?.beforeImage?.url ?? work.thumbnail.url,
        afterImageUrl: detail?.afterImage?.url ?? work.thumbnail.url,
      };
    });

    return <WorksPageClient items={items} />;
  } catch (error) {
    console.error("[/works] データ取得エラー:", error);
    // API 失敗時は空リストで表示（404 にしない）
    return <WorksPageClient items={[]} />;
  }
}
