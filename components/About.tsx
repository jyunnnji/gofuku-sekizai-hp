const img2 =
  "https://www.figma.com/api/mcp/asset/b90ac9d2-bfac-4d84-9b5f-e4d5fa156923";
const imgScene =
  "https://www.figma.com/api/mcp/asset/ca3974d8-1af1-46ae-9f3b-c21c7b58e12e";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#fcfaf2] overflow-hidden"
      style={{ minHeight: "749px" }}
    >
      <div className="max-w-[1440px] mx-auto relative" style={{ height: "749px" }}>
        {/* Image 1 – right side */}
        <div className="absolute right-[0px] top-[35px] w-[327px] h-[426px]">
          <div
            className="absolute inset-[32px_0_0_32px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img2}
            alt="五福石材の施工風景"
            className="absolute left-[32px] top-0 w-[295px] h-[394px] object-cover"
          />
          <div
            className="absolute inset-[0_32px_32px_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))",
            }}
          />
        </div>

        {/* Image 2 – bottom left */}
        <div className="absolute left-0 bottom-[0px] w-[268px] h-[348px]">
          <div
            className="absolute inset-[0_0_20px_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(70,147,97,0.3), rgba(70,147,97,0.4))",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgScene}
            alt="作業風景"
            className="absolute left-0 top-[28px] w-[240px] h-[320px] object-cover"
          />
          <div
            className="absolute inset-[28px_28px_0_0]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.4))",
            }}
          />
        </div>

        {/* Text content */}
        <div className="absolute left-[170px] right-[170px] top-[160px]">
          {/* Section label */}
          <p
            className="text-center text-[20px] font-bold text-[#2f7d4e] tracking-[8px] uppercase mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            - 五福石材について -
          </p>

          {/* Main heading */}
          <h2
            className="text-center text-[33px] font-medium text-[#2c2c2c] tracking-[8px] leading-[56px] mt-6"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            ご先祖様の安らかな
            <br />
            お眠りをサポートさせていただきます。
          </h2>

          {/* Body text */}
          <p
            className="text-center text-[18px] text-[#2c2c2c] tracking-[2.24px] leading-[37.5px] mt-10 whitespace-pre-line"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材は、墓石クリーニング・造園を通じて、
            {"\n"}地域の皆さまの暮らしに寄り添ってまいりました。
            {"\n"}ご先祖様を大切にする想い、住まいを美しく保ちたいという願い、人生の節目に寄り添う心。
            {"\n"}私たちはその一つひとつに丁寧に向き合い、信頼と安心をお届けしています。
            {"\n"}「頼んでよかった」――そう言っていただける仕事を、これからも。
          </p>
        </div>
      </div>
    </section>
  );
}
