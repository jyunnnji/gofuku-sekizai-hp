const bgImage =
  "https://www.figma.com/api/mcp/asset/2c5dcdba-937f-4acd-8a63-5bd4de29979b";
const maskImage =
  "https://www.figma.com/api/mcp/asset/d6b47d1b-aefd-436a-9d97-cc38edfe2a71";
const graveCleaning =
  "https://www.figma.com/api/mcp/asset/6555ad0a-e6db-4836-8d37-eeb206587475";
const landscaping =
  "https://www.figma.com/api/mcp/asset/b1c662f4-8f7a-4738-a620-fa153ad063b4";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "1599px" }}
    >
      {/* Full-page background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ marginLeft: "-24.03%", width: "148.06%" }}
        />
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 h-[54px] rotate-180 overflow-hidden">
        <svg viewBox="0 0 1440 54" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,27 C360,54 1080,0 1440,27 L1440,54 L0,54 Z" fill="#fcfaf2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative px-[170px] pt-[126px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase mb-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Service
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mb-4">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            事業内容
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-2" />
        </div>

        {/* Description */}
        <p
          className="text-center text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[33px] mt-8 max-w-[589px] mx-auto"
          style={{ fontFamily: "var(--font-noto-sans-jp)" }}
        >
          暮らしの中で気になるお墓やお庭のお悩みに、丁寧にお応えします。
          <br />
          お墓の汚れや劣化のケアから、お庭の整備まで幅広く対応。
          <br />
          ご先祖様への想いを大切に、一つひとつ心を込めて仕上げます。
          <br />
          どんな小さなことでも、まずはお気軽にご相談ください。
        </p>

        {/* Service 1: 墓石クリーニング */}
        <div className="mt-[295px] flex gap-[82px] items-start">
          {/* Image with mask */}
          <div className="shrink-0 w-[512px] h-[349px] relative overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={graveCleaning}
              alt="墓石クリーニング"
              className="w-full h-full object-cover"
              style={{
                WebkitMaskImage: `url(${maskImage})`,
                maskImage: `url(${maskImage})`,
                WebkitMaskSize: "512px 349px",
                maskSize: "512px 349px",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
          {/* Text */}
          <div className="flex-1 pt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[5px] h-[35px] bg-[#2f7d4e]" />
              <h3
                className="text-[35.5px] font-normal text-[#2c2c2c]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                墓石クリーニング
              </h3>
            </div>
            <div className="w-[154px] h-[2px] mb-4" style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(70,147,97,0.4) 50%)" }} />
            <p
              className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[36px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              年月とともに蓄積した汚れやコケ、水垢を丁寧に除去し、
              <br />
              お墓本来の美しさを取り戻します。
              <br />
              手作業によるやさしい洗浄と細部まで行き届いた仕上げで、
              <br />
              ご先祖様への感謝の気持ちを形にするお手伝いをいたします。
              <br />
              また、ご希望に応じて女性作業員の同行も可能です。
              <br />
              墓石クリーニング以外のお墓に関するお悩みも、
              <br />
              お気軽にご相談ください。
            </p>
          </div>
        </div>

        {/* Service 2: 造園 */}
        <div className="mt-[100px] flex gap-[82px] items-start">
          {/* Text */}
          <div className="flex-1 pt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[5px] h-[35px] bg-[#2f7d4e]" />
              <h3
                className="text-[35.5px] font-normal text-[#2c2c2c]"
                style={{ fontFamily: "var(--font-noto-sans-jp)" }}
              >
                造園
              </h3>
            </div>
            <div className="w-[155px] h-[2px] mb-4" style={{ background: "linear-gradient(to bottom, rgba(70,147,97,0) 50%, rgba(70,147,97,0.4) 50%)" }} />
            <p
              className="text-[18px] text-[#2c2c2c] tracking-[0.8px] leading-[36px]"
              style={{ fontFamily: "var(--font-noto-sans-jp)" }}
            >
              女性作業員が丁寧に対応し、
              <br />
              お庭のお手入れ・草刈り・除草作業を承ります。
              <br />
              どんな小さなお悩みでも、お気軽にご相談ください。
            </p>
          </div>
          {/* Image with mask */}
          <div className="shrink-0 w-[512px] h-[349px] relative overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={landscaping}
              alt="造園"
              className="w-full h-full object-cover"
              style={{
                WebkitMaskImage: `url(${maskImage})`,
                maskImage: `url(${maskImage})`,
                WebkitMaskSize: "512px 349px",
                maskSize: "512px 349px",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[54px] overflow-hidden">
        <svg viewBox="0 0 1440 54" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,27 C360,54 1080,0 1440,27 L1440,54 L0,54 Z" fill="#fcfaf2" />
        </svg>
      </div>
    </section>
  );
}
