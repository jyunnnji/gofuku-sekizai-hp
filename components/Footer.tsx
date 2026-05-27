import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const footerBg = "/images/footer/footer-bg.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#fcfaf2] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 h-[220px] md:h-[497px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={footerBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))",
          }}
        />
      </div>

      {/* Footer card */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-[165px] pt-[100px] md:pt-[330px] pb-[40px] md:pb-[59px]">
        <FadeUp>
        <div className="bg-white rounded-[20px] px-5 md:px-[72px] py-8 md:py-[51px]">
          {/* Logo */}
          <p
            className="text-center text-[35.5px] font-bold text-[#2f7d4e] tracking-[3.3px] leading-[44px] mb-4"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材
          </p>

          {/* Tagline */}
          <p
            className="text-center text-[18px] font-bold text-[#2c2c2c] tracking-[2.4px] mb-8"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            ご先祖様の安らかなお眠りをサポート
          </p>

          {/* Nav links */}
          <nav className="flex items-center justify-center gap-8 flex-wrap mb-8">
            {[
              { label: "事業内容", href: "#services" },
              { label: "選ばれる理由", href: "#why-us" },
              { label: "施工事例", href: "#works" },
              { label: "会社概要", href: "#company" },
              { label: "お知らせ", href: "#news" },
              { label: "お問い合わせ", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[16px] text-[#2c2c2c] tracking-[1.04px] hover:text-[#2f7d4e] transition-colors"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-center text-[13px] text-[#2c2c2c] tracking-[1.1px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            © 2026 五福石材 All Rights Reserved.
          </p>
        </div>
        </FadeUp>
      </div>
    </footer>
  );
}
