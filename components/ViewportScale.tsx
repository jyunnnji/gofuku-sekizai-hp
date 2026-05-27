"use client";
import { useEffect } from "react";

const DESIGN_WIDTH = 1440;

export default function ViewportScale() {
  useEffect(() => {
    const update = () => {
      const scale = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      document.body.style.zoom = scale < 1 ? String(scale) : "";
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return null;
}
