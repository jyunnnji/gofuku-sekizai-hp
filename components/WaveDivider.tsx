// Figma CDN URL（7日間有効。本番前にpublic/へ移行すること）
const imgWave = "https://www.figma.com/api/mcp/asset/55fe0cc6-fb36-45eb-a545-4d0dd6aeeee0";

export default function WaveDivider() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#fcfaf2]"
      style={{ height: "54px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgWave}
        alt=""
        className="absolute max-w-none"
        style={{
          top: "7.14%",
          left: "-74.67%",
          right: "-60%",
          bottom: "-128.57%",
        }}
      />
    </div>
  );
}
