"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />
      <main className="bg-[#fcfaf2] pt-[100px]">
        <div className="max-w-[1440px] mx-auto px-[170px] pt-[125px] pb-[120px]">

          {/* CONTACT label */}
          <p
            className="text-center text-[20px] text-[#2f7d4e] tracking-[3.6px] uppercase leading-[24px] mb-[24px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact
          </p>

          {/* Heading */}
          <div className="flex flex-col items-center mb-[142px]">
            <h1
              className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              お問い合わせ
            </h1>
            <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-3 mb-[62px]" />
            <p
              className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] text-center"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              ご質問・ご相談・お見積もりなど、お気軽にお問い合わせください。<br />
              折り返しご連絡いたします。
            </p>
          </div>

          {/* Phone card */}
          <div className="bg-white rounded-[30px] px-[73px] py-[63px] mb-[98px]">
            <p
              className="text-center text-[18px] text-[#2c2c2c] tracking-[1.4px] leading-[28px] mb-[26px]"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              お電話でのお問い合わせ
            </p>

            {/* Note */}
            <p
              className="text-center text-[15px] text-[#6b6b6b] tracking-[2.4px] leading-[24px] mb-[26px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
            >
              施工で外出していることが多いため、ご連絡は携帯電話までお願いいたします。
            </p>

            {/* Phone numbers */}
            <div className="flex flex-col items-center gap-[10px] mb-[20px]">
              {/* 携帯 */}
              <a
                href="tel:090-9406-2085"
                className="flex items-center gap-[16px] group"
              >
                <span
                  className="text-[20px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  (携帯)
                </span>
                <span
                  className="text-[40px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  090-9406-2085
                </span>
              </a>
              {/* 固定 */}
              <a
                href="tel:093-614-6573"
                className="flex items-center gap-[16px] group"
              >
                <span
                  className="text-[20px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  (固定)
                </span>
                <span
                  className="text-[40px] font-medium text-[#1a1a1a] group-hover:text-[#2f7d4e] tracking-[4px] leading-[80px] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  093-614-6573
                </span>
              </a>
            </div>

            <p
              className="text-center text-[13px] text-[#2c2c2c] tracking-[1.04px] leading-[26px]"
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

            <form className="flex flex-col gap-0">

              {/* お名前 */}
              <div className="mb-[30px]">
                <div className="flex items-center gap-[8px] mb-[10px]">
                  <label
                    className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    お名前
                  </label>
                  <span className="bg-[#f55555] rounded-[5px] px-[5px] h-[28.5px] flex items-center">
                    <span className="text-[11.2px] text-white tracking-[2.24px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>必須</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="例）山田 太郎"
                  className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#757575] focus:outline-none focus:border-[#2f7d4e]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                />
              </div>

              {/* 電話番号 */}
              <div className="mb-[30px]">
                <label
                  className="block text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px] mb-[10px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  placeholder="例）090-0000-0000"
                  className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#757575] focus:outline-none focus:border-[#2f7d4e]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                />
              </div>

              {/* メールアドレス */}
              <div className="mb-[30px]">
                <div className="flex items-center gap-[8px] mb-[10px]">
                  <label
                    className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    メールアドレス
                  </label>
                  <span className="bg-[#f55555] rounded-[5px] px-[5px] h-[28.5px] flex items-center">
                    <span className="text-[11.2px] text-white tracking-[2.24px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>必須</span>
                  </span>
                </div>
                <input
                  type="email"
                  placeholder="例）info@example.com"
                  className="w-full h-[54px] border border-[#d9d9d9] rounded-[10px] px-[16px] text-[18px] text-[#2c2c2c] placeholder-[#757575] focus:outline-none focus:border-[#2f7d4e]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                />
              </div>

              {/* お問い合わせ種別 */}
              <div className="mb-[30px]">
                <label
                  className="block text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px] mb-[10px]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  お問い合わせ種別
                </label>
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
                  <label
                    className="text-[16px] font-medium text-[#1a1a1a] tracking-[1.12px] leading-[28px]"
                    style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                  >
                    お問い合わせ内容
                  </label>
                  <span className="bg-[#f55555] rounded-[5px] px-[5px] h-[28.5px] flex items-center">
                    <span className="text-[11.2px] text-white tracking-[2.24px]" style={{ fontFamily: "var(--font-noto-sans-jp)" }}>必須</span>
                  </span>
                </div>
                <textarea
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={7}
                  className="w-full border border-[#d9d9d9] rounded-[10px] px-[16px] py-[14px] text-[18px] text-[#2c2c2c] placeholder-[#757575] resize-none focus:outline-none focus:border-[#2f7d4e]"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                />
              </div>

              {/* プライバシーポリシー */}
              <div className="flex items-center justify-center gap-[10px] mb-[40px]">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-[18px] h-[18px] border border-[#767676] rounded-[2.5px] accent-[#2f7d4e] cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-[16px] text-[#2c2c2c] tracking-[0.8px] leading-[28px] cursor-pointer"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  プライバシーポリシーに同意する
                </label>
              </div>

              {/* 送信ボタン */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[400px] h-[59px] bg-[#edc920] border border-black rounded-full text-[18px] font-medium text-black tracking-[2.25px] hover:bg-[#d4b31e] transition-colors"
                  style={{ fontFamily: "var(--font-inter), var(--font-noto-sans-jp)" }}
                >
                  送信する
                </button>
              </div>

            </form>
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
