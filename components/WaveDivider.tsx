// Figma node 1278:578 の vectorPaths データから算出
// 元波: 3379.2×119.57px, visible x: 1075.25〜2515.25, y: 3.86〜54
// 180°回転座標変換済み（クリーム上・波下端）
export default function WaveDivider() {
  return (
    <div
      className="relative w-full"
      style={{ height: "54px", marginBottom: "-54px", zIndex: 10 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M 0 0 L 1440 0 L 1440 43.84 C 1234.25 33.78 1035.02 15.43 825.65 15.43 C 544.27 15.43 281.21 48.56 0 50.14 Z"
          fill="#fcfaf2"
        />
      </svg>
    </div>
  );
}
