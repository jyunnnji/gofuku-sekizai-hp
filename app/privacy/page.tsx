import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    title: "1. 個人情報の収集について",
    body: "当社は、お問い合わせフォームやお電話によるご相談の際に、お名前・電話番号・メールアドレス等の個人情報をご提供いただく場合があります。これらの情報は、お客様からの同意を得た上で収集いたします。",
  },
  {
    title: "2. 個人情報の利用目的",
    body: "収集した個人情報は、以下の目的に限り利用いたします。\n・お問い合わせへの回答およびご連絡\n・お見積もり・施工に関するご案内\n・サービス向上のための統計的分析（個人を特定しない形式）",
  },
  {
    title: "3. 個人情報の第三者提供",
    body: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示いたしません。\n・お客様本人の同意がある場合\n・法令に基づき開示が必要な場合\n・人の生命・身体・財産の保護のために必要な場合",
  },
  {
    title: "4. 個人情報の管理",
    body: "当社は、個人情報の漏洩・紛失・改ざんを防止するため、適切なセキュリティ対策を講じます。また、個人情報へのアクセスを必要な担当者に限定し、適切に管理いたします。",
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    body: "お客様は、当社が保有する自己の個人情報について、開示・訂正・削除を請求することができます。ご請求の際は、下記お問い合わせ先までご連絡ください。ご本人確認の上、合理的な期間内に対応いたします。",
  },
  {
    title: "6. クッキー（Cookie）について",
    body: "当サイトでは、サービス向上のためにクッキーを使用する場合があります。クッキーによって個人を特定する情報を収集することはありません。ブラウザの設定によりクッキーを無効にすることも可能です。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    body: "当社は、法令の改正やサービス内容の変更に伴い、本プライバシーポリシーを予告なく変更する場合があります。変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。",
  },
  {
    title: "8. お問い合わせ",
    body: "個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n\n五福石材\nTEL（携帯）：090-9406-2085\nTEL（固定）：093-614-6573\n受付時間：9:00〜17:00（不定休）",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[170px] pt-[125px] pb-[120px]">

          {/* Label */}
          <p
            className="text-center text-[20px] text-[#2f7d4e] tracking-[3.6px] uppercase leading-[24px] mb-[24px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Privacy Policy
          </p>

          {/* Heading */}
          <div className="flex flex-col items-center mb-[65px]">
            <h1
              className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              プライバシーポリシー
            </h1>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3 mb-[40px]" />
            <p
              className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] text-center"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              五福石材（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、<br />
              以下のとおりプライバシーポリシーを定めます。
            </p>
          </div>

          {/* Content card */}
          <div className="bg-white rounded-[30px] px-[80px] py-[64px]">
            <div className="flex flex-col gap-[48px]">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2
                    className="text-[18px] font-bold text-[#1a1a1a] tracking-[1.12px] leading-[28px] mb-[16px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-[16px] text-[#2c2c2c] tracking-[0.8px] leading-[32px] whitespace-pre-line"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-[14px] text-[#444444] tracking-[0.8px] leading-[26px] text-right mt-[64px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              制定日：2026年1月1日
            </p>
          </div>

          {/* Back to contact */}
          <div className="flex justify-center mt-[48px]">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              お問い合わせページに戻る
            </Link>
          </div>

        </div>
      </main>
      <Footer />

      {/* Back to top */}
      <Link
        href="#top"
        className="fixed bottom-[49px] right-[50px] z-50 w-[48px] h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] transition-colors"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </>
  );
}
