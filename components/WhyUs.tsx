const ellipse1 =
  "https://www.figma.com/api/mcp/asset/9578e0f3-4556-4fbb-836c-dc1bdf307c60";
const ellipse2 =
  "https://www.figma.com/api/mcp/asset/a7cb8406-df03-4b2c-a9fa-04b3ddf9a9c5";
const imgPrayer =
  "https://www.figma.com/api/mcp/asset/647ac785-4f45-4fd4-9f0f-c0a4e1ae9bff";
const imgWater =
  "https://www.figma.com/api/mcp/asset/52a62e86-49da-4bb3-a106-9aa18bfbcc66";
const imgPolish =
  "https://www.figma.com/api/mcp/asset/70d57781-bc45-4d8a-98cb-227b8e8656c0";
const imgCaulk =
  "https://www.figma.com/api/mcp/asset/886ef209-d260-44fe-b80a-59e847031eb3";
const imgInk =
  "https://www.figma.com/api/mcp/asset/337fec02-c6d7-4de0-9243-95301d8be8b3";
const imgFinish =
  "https://www.figma.com/api/mcp/asset/16191b28-0729-472d-a02c-0dcf550a1d48";

const steps = [
  {
    num: "01",
    title: "合掌・線香",
    desc: "まずは線香を炊き、手を合わせてから作業に入ります。",
    img: imgPrayer,
    imgH: "h-[162px] w-[243px]",
  },
  {
    num: "02",
    title: "水を注ぐ",
    desc: "たっぷりの水かけて、大きな汚れを落としていきます。",
    img: imgWater,
    imgH: "h-[162px] w-[243px]",
  },
  {
    num: "03",
    title: "研磨",
    desc: "器具は使用せず、原則、手で研磨を行います。",
    img: imgPolish,
    imgH: "h-[121px] w-[201px]",
  },
  {
    num: "04",
    title: "目地コーキング",
    desc: "コーキングを隙間に入れ直します。",
    img: imgCaulk,
    imgH: "h-[82px] w-[130px]",
  },
  {
    num: "05",
    title: "墨入れ",
    desc: "墨入れの入れ直しを丁寧に行います。",
    img: imgInk,
    imgH: "h-[134px] w-[223px]",
  },
  {
    num: "06",
    title: "仕上げ",
    desc: "最後に仕上げを行い、手を合わせて終了します。",
    img: imgFinish,
    imgH: "h-[134px] w-[223px]",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#fcfaf2] overflow-hidden py-20"
    >
      {/* Decorative ellipses */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ellipse1}
        alt=""
        className="absolute left-[-113px] top-[20px] w-[323px] h-[323px] pointer-events-none"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ellipse2}
        alt=""
        className="absolute right-[137px] top-[414px] w-[209px] h-[209px] pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-[175px]">
        {/* Section label */}
        <p
          className="text-center text-[20px] font-medium text-[#2f7d4e] tracking-[1.6px] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          WHY CHOOSE US
        </p>

        {/* Section heading */}
        <div className="flex flex-col items-center mt-3 mb-3">
          <h2
            className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            五福石材が選ばれる理由
          </h2>
          <div className="w-[40px] h-[2px] bg-[#2f7d4e] mt-1" />
        </div>

        {/* Body text */}
        <div className="text-center mt-10 mb-16">
          <p
            className="text-[18px] text-[#2c2c2c] tracking-[2.24px] leading-[37.5px] whitespace-pre-line"
            style={{ fontFamily: "var(--font-noto-sans-jp)" }}
          >
            ご先祖様の背中を流すように。{"\n"}
            私たちは、真心を込めて一基一基丁寧にクリーニングしております。{"\n\n"}
            お墓に関わる仕事に<strong>30年以上</strong>携わってきた経験を活かし、墓石の状態に合わせた丁寧な施工を行っております。{"\n\n"}
            高圧洗浄機などに頼りすぎず、原則として<strong>手作業</strong>で墓石を洗浄・研磨。{"\n"}
            細かな汚れや水垢、コケまで時間をかけて磨き上げます。{"\n\n"}
            丁寧に施工することで、<strong>墓石本来の美しさ</strong>を取り戻すだけでなく、<strong>ひび割れ</strong>や<strong>劣化の予防</strong>にもつながります。{"\n\n"}
            「頼んでよかった」と感じていただけるよう、最後まで<strong>心を込めて</strong>対応いたします。
          </p>
        </div>

        {/* Steps grid */}
        <div className="bg-white rounded-[20px] p-[50px_72px] relative">
          {/* Point badge */}
          <div className="absolute top-[22px] right-[56px] bg-white border-4 border-[#ea6d62] rounded-[10px] h-[39px] px-4 flex items-center">
            <span
              className="text-[20px] font-bold text-[#ea6d62] tracking-[2.24px] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              point
            </span>
            {/* Triangle */}
            <div
              className="absolute bottom-[-12px] left-4 w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "12px solid #ea6d62",
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col items-center py-8 px-4 ${
                  i % 3 !== 2 ? "border-r border-dashed border-[#ddd]" : ""
                } ${i >= 3 ? "border-t border-dashed border-[#ddd]" : ""}`}
              >
                {/* Step number */}
                <span
                  className="text-[48px] font-black text-[#edc920] tracking-[-1px] leading-none self-start ml-4"
                  style={{
                    fontFamily: "var(--font-inter)",
                    WebkitTextStroke: "1px #575252",
                    textShadow:
                      "-1px -1px 1px #575252,1px -1px 1px #575252,-1px 1px 1px #575252,1px 1px 1px #575252",
                  }}
                >
                  {step.num}
                </span>

                {/* Green divider */}
                <div className="w-[159px] h-[2px] bg-[#2f7d4e] mb-4 self-start ml-4" />

                {/* Title */}
                <h3
                  className="text-[17.5px] font-bold text-[#2c2c2c] tracking-[0.87px] mb-4"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {step.title}
                </h3>

                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.img}
                  alt={step.title}
                  className={`object-contain mx-auto mb-4 ${step.imgH}`}
                />

                {/* Description */}
                <p
                  className="text-[15px] text-[#2c2c2c] text-center tracking-[2.24px] leading-[37.5px]"
                  style={{ fontFamily: "var(--font-noto-sans-jp)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
