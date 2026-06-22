/**
 * ページ内セクションへスムーズスクロールしつつ、URL に「#xxx」を残さない。
 *
 * - scrollIntoView は CSS の scroll-margin-top（各セクションの scroll-mt-*）を
 *   尊重するため、停止位置は従来の「#」アンカー遷移とまったく同じ。
 * - スクロール後に history.replaceState で hash だけ取り除く。replaceState は
 *   スクロール位置を動かさない／履歴を増やさないので、見た目・動きに影響しない。
 *
 * @returns 対象要素が見つかってスクロールできたら true
 */
export function scrollToSection(hash: string): boolean {
  if (typeof window === "undefined") return false;

  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
  return true;
}

/**
 * 別ページから「/#xxx」で遷移してきた／URL を直接開いたときに、対象セクションへ
 * スクロールして hash を消す。要素描画が遅れるケース（force-dynamic・イントロ等）に
 * 備えて、見つかるまで少しの間リトライする。
 *
 * @returns クリーンアップ用の関数（pending な setTimeout を解除）
 */
export function scrollToHashOnLoad(): () => void {
  if (typeof window === "undefined" || !window.location.hash) {
    return () => {};
  }

  const hash = window.location.hash;
  let tries = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const tryScroll = () => {
    if (scrollToSection(hash)) return;
    if (tries++ < 20) {
      timer = setTimeout(tryScroll, 100);
    }
  };

  tryScroll();

  return () => {
    if (timer) clearTimeout(timer);
  };
}
