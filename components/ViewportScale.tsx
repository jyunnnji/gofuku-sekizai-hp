"use client";
import { useEffect } from "react";

const DESIGN_WIDTH = 1440;
const SP_BREAKPOINT = 768;

export default function ViewportScale() {
  useEffect(() => {
    const update = () => {
      // SP（768px未満）ではズームを無効化してレスポンシブCSSに任せる
      if (window.innerWidth < SP_BREAKPOINT) {
        document.body.style.zoom = "";
        return;
      }
      const scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      document.body.style.zoom = scale < 1 ? String(scale) : "";
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return null;
}
