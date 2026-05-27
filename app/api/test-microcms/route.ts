import { NextResponse } from "next/server";
import { getNewsList, getWorksList, getWorksDetailsList } from "@/lib/microcms";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    console.log("\n========== microCMS 接続テスト開始 ==========");
    console.log("  SERVICE_DOMAIN:", process.env.MICROCMS_SERVICE_DOMAIN);
    console.log("  API_KEY exists:", !!process.env.MICROCMS_API_KEY);

    // ── news ──
    console.log("\n[1/3] news 取得中...");
    const newsResponse = await getNewsList({ limit: 5 });
    console.log(`  → 総件数: ${newsResponse.totalCount}`);
    newsResponse.contents.forEach((item, i) => {
      console.log(`  [${i + 1}] id=${item.id} | title=${item.title} | date=${item.date}`);
    });

    // ── works ──
    console.log("\n[2/3] works 取得中...");
    const worksResponse = await getWorksList({ limit: 5 });
    console.log(`  → 総件数: ${worksResponse.totalCount}`);
    worksResponse.contents.forEach((item, i) => {
      console.log(`  [${i + 1}] id=${item.id} | title=${item.title} | thumbnail=${item.thumbnail?.url}`);
    });

    // ── works-details ──
    console.log("\n[3/3] works-details 取得中...");
    const worksDetailsResponse = await getWorksDetailsList({ limit: 5 });
    console.log(`  → 総件数: ${worksDetailsResponse.totalCount}`);
    worksDetailsResponse.contents.forEach((item, i) => {
      console.log(`  [${i + 1}] id=${item.id} | beforeImage=${item.beforeImage?.url}`);
    });

    console.log("\n========== テスト完了 ==========\n");

    return NextResponse.json({
      ok: true,
      news: { totalCount: newsResponse.totalCount, contents: newsResponse.contents },
      works: { totalCount: worksResponse.totalCount, contents: worksResponse.contents },
      worksDetails: { totalCount: worksDetailsResponse.totalCount, contents: worksDetailsResponse.contents },
    });
  } catch (error) {
    console.error("\n[ERROR] microCMS 接続失敗:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
