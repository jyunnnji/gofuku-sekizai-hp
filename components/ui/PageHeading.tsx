"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  titleFont?: string;
  dividerClassName?: string;
  containerClassName?: string;
  children?: ReactNode;
};

export default function PageHeading({
  label,
  title,
  titleFont = "var(--font-inter), var(--font-noto-sans-jp)",
  dividerClassName = "w-[40px] h-[2px] bg-[#2f7d4e] mt-3",
  containerClassName = "mb-[65px]",
  children,
}: Props) {
  return (
    <>
      <motion.p
        className="text-center text-[20px] text-[#2f7d4e] tracking-[3.6px] uppercase leading-[24px] mb-[24px]"
        style={{ fontFamily: "var(--font-inter)" }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.p>
      <div className={`flex flex-col items-center ${containerClassName}`}>
        <motion.h1
          className="text-[40px] font-medium text-[#1a1a1a] tracking-[4.8px] leading-[64px]"
          style={{ fontFamily: titleFont }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className={dividerClassName}
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </>
  );
}
