"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageHeading from "@/components/ui/PageHeading";

type Step = "form" | "confirm" | "done";

const categoryLabels: Record<string, string> = {
  cleaning: "墓石クリーニング",
  garden: "造園",
  estimate: "お見積もり",
  other: "その他",
};

const RequiredBadge = () => (
  <span className="bg-[#f55555] rounded-[5px] px-[5px] h-[28.5px] flex items-center">
    <span className="text-[11.2px] text-white tracking-[2.24px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>必須</span>
  </span>
);

export default function ContactPage() {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleToConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setStep("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageHeader = (
    <PageHeading
      label="Contact"
      title="お問い合わせ"
      dividerClassName="w-[40px] h-[2px] bg-[#2f7d4e] mt-3 mb-[62px]"
    >
      <p
        className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] text-center"
        style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
      >
        ご質問・ご相談・お見積もりなど、お気軽にお問い合わせください。<br />
        折り返しご連絡いたします。
      </p>
    </PageHeading>
  );

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[170px] pt-[125px] pb-[120px]">

          {/* ── STEP: FORM ── */}
          {step === "form" && (
            <>
              {pageHeader}

              {/* Phone card */}
              <div className="bg-white rounded-[30px] px-[73px] py-[63px] mb-[98px]">
                <p
                  className="text-center text-[24px] font-medium text-[#2c2c2c] tracking-[1.8px] leading-[36px] mb-[26px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  お電話でのお問い合わせ
                </p>
                <p
                  className="text-center text-[15px] text-[#444444] tracking-[2.4px] leading-[24px] mb-[26px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  施工で外出していることが多いため、ご連絡は携帯電話までお願いいたします。
                </p>
                <div className="flex flex-col items-center gap-[10px] mb-[20px]">
                  <a href="tel:090-9406-2085" className="flex items-center gap-[16px] group">
                    <span className="text-[20px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>(携帯)</span>
                    <span className="text-[40px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>090-9406-2085</span>
                  </a>
                  <a href="tel:093-614-6573" className="flex items-center gap-[16px] group">
                    <span className="text-[20px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors" style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}>(固定)</span>
                    <span className="text-[40px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors" style={{ fontFamily: "var(--font-inter)" }}>093-614-6573</span>
                  </a>
                </div>
                <p
                  className="text-center text-[16px] text-[#2c2c2c] tracking-[1.04px] leading-[26px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  受付時間：9:00〜17:00（不定休）
                </p>
              </div>

              {/* Form card */}
              <div className="bg-white rounded-[30px] px-[224px] py-[55px]">
                <h2
                  className="text-center text-[24px] font-medium text-[#2c2c2c] tracking-[1.8px] leading-[36px] mb-[40px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  メールでのお問い合わせ
                </h2>

                <form onSubmit={handleToConfirm} className="flex flex-col">

                  {/* お名前 */}
                  <div className="mb-[30px]">
                    <div className="flex items-center gap-[8px] mb-[10px]">
                      <label className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>お名前</label>
                      <RequiredBadge />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="例）山田 太郎"
                      required
                      className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#444444] focus:outline-none focus:border-[#2f7d4e]"
                      style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                    />
                  </div>

                  {/* 電話番号 */}
                  <div className="mb-[30px]">
                    <label className="block text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px] mb-[10px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>電話番号</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="例）090-0000-0000"
                      className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#444444] focus:outline-none focus:border-[#2f7d4e]"
                      style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                    />
                  </div>

                  {/* メールアドレス */}
                  <div className="mb-[30px]">
                    <div className="flex items-center gap-[8px] mb-[10px]">
                      <label className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>メールアドレス</label>
                      <RequiredBadge />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="例）info@example.com"
                      required
                      className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#444444] focus:outline-none focus:border-[#2f7d4e]"
                      style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                    />
                  </div>

                  {/* お問い合わせ種別 */}
                  <div className="mb-[30px]">
                    <label className="block text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px] mb-[10px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>お問い合わせ種別</label>
                    <div className="relative">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#1a1a1a] appearance-none bg-white focus:outline-none focus:border-[#2f7d4e]"
                        style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                      >
                        <option value="" disabled>選択してください</option>
                        <option value="cleaning">墓石クリーニング</option>
                        <option value="garden">造園</option>
                        <option value="estimate">お見積もり</option>
                        <option value="other">その他</option>
                      </select>
                      <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1L6 7L11 1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* お問い合わせ内容 */}
                  <div className="mb-[40px]">
                    <div className="flex items-center gap-[8px] mb-[10px]">
                      <label className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>お問い合わせ内容</label>
                      <RequiredBadge />
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={7}
                      required
                      className="w-full border border-[#d9d9d9] rounded-[10px] px-[16px] py-[14px] text-[18px] text-[#2c2c2c] placeholder-[#444444] resize-none focus:outline-none focus:border-[#2f7d4e]"
                      style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                    />
                  </div>

                  {/* プライバシーポリシー */}
                  <div className="flex flex-col items-center gap-[10px] mb-[40px]">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required
                        className="w-[18px] h-[18px] border border-[#767676] rounded-[2.5px] accent-[#2f7d4e] cursor-pointer"
                      />
                      <label htmlFor="privacy" className="text-[16px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] cursor-pointer" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                        プライバシーポリシーに同意する
                      </label>
                    </div>
                    <Link href="/privacy" className="text-[14px] text-[#2f7d4e] underline hover:text-[#235e3a] transition-colors tracking-[0.8px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>
                      プライバシーポリシーについてはこちら
                    </Link>
                  </div>

                  {/* 確認画面へボタン */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-[320px] h-[59px] bg-[#edc920] border border-black rounded-full text-[18px] font-medium text-black tracking-[2.25px] hover:bg-[#d4b31e] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 relative flex items-center justify-center"
                      style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                    >
                      確認画面へ
                      <svg className="absolute right-[20px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                </form>
              </div>

              {/* Back to top */}
              <div className="flex justify-center mt-[48px]">
                <Link
                  href="/"
                  className="inline-flex items-center gap-[10px] text-[16px] text-[#2f7d4e] hover:text-[#235e3a] tracking-[0.8px] transition-colors"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  トップページへ戻る
                </Link>
              </div>
            </>
          )}

          {/* ── STEP: CONFIRM ── */}
          {step === "confirm" && (
            <>
              {pageHeader}
              <div className="bg-white rounded-[30px] px-[224px] py-[55px]">
                <h2
                  className="text-center text-[24px] font-medium text-[#2c2c2c] tracking-[1.8px] leading-[36px] mb-[12px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  入力内容のご確認
                </h2>
                <p
                  className="text-center text-[15px] text-[#444444] tracking-[0.8px] leading-[26px] mb-[48px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  以下の内容でよろしければ「送信する」を押してください。
                </p>

                {/* Confirm rows */}
                <div className="flex flex-col divide-y divide-[#e8e8e8] mb-[48px]">
                  {[
                    { label: "お名前", value: name },
                    { label: "電話番号", value: phone || "－" },
                    { label: "メールアドレス", value: email },
                    { label: "お問い合わせ種別", value: categoryLabels[category] || "未選択" },
                    { label: "お問い合わせ内容", value: message },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-[32px] py-[24px]">
                      <div className="w-[200px] shrink-0 flex items-start pt-[2px]">
                        <span
                          className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]"
                          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                        >
                          {row.label}
                        </span>
                      </div>
                      <p
                        className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[32px] flex-1 whitespace-pre-wrap"
                        style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                      >
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-[24px]">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-[220px] h-[59px] bg-white border border-[#d9d9d9] rounded-full text-[18px] font-medium text-[#444444] tracking-[1.5px] hover:border-[#2f7d4e] hover:text-[#2f7d4e] transition-colors relative flex items-center justify-center"
                    style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                  >
                    <svg className="absolute left-[20px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M15 9H3M3 9L8 4M3 9L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    修正する
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-[220px] h-[59px] bg-[#edc920] border border-black rounded-full text-[18px] font-medium text-black tracking-[2.25px] hover:bg-[#d4b31e] hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 relative flex items-center justify-center"
                    style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                  >
                    送信する
                    <svg className="absolute right-[20px]" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ── STEP: DONE ── */}
          {step === "done" && (
            <>
              {pageHeader}
              <div className="bg-white rounded-[30px] px-[224px] py-[80px] flex flex-col items-center">
                {/* Check icon */}
                <div className="w-[72px] h-[72px] rounded-full bg-[#2f7d4e] flex items-center justify-center mb-[32px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7 16L13 22L25 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2
                  className="text-[28px] font-medium text-[#1a1a1a] tracking-[2px] leading-[42px] mb-[16px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  送信が完了しました
                </h2>
                <p
                  className="text-[16px] text-[#444444] tracking-[0.8px] leading-[32px] text-center mb-[48px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  お問い合わせいただきありがとうございます。<br />
                  内容を確認の上、担当者より折り返しご連絡いたします。<br />
                  しばらくお待ちください。
                </p>
                <Link
                  href="/"
                  className="w-[280px] h-[59px] bg-[#2f7d4e] border border-black rounded-full text-[18px] font-medium text-white tracking-[2px] hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex items-center justify-center"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  トップページへ戻る
                </Link>
              </div>
            </>
          )}

        </div>
      </main>
      <Footer />

      {/* Back to top */}
      <Link
        href="#top"
        className="fixed bottom-[49px] right-[50px] z-50 w-[48px] h-[48px] rounded-full bg-[#2f7d4e] flex items-center justify-center hover:bg-[#235e3a] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        aria-label="ページ上部へ戻る"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </>
  );
}
