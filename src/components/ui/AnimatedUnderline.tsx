"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedUnderlineProps {
  children: ReactNode;
  className?: string;     // Applies to the container (e.g., text sizing)
  underlineClassName?: string; // Applies to the underline line (e.g., color, height)
}

export const AnimatedUnderline = ({
  children,
  className = "",
  underlineClassName = ""
}: AnimatedUnderlineProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* The wrapped text content */}
      <span className="relative z-10">{children}</span>

      {/* The animated underline, positioned exactly 2px below the text's bounding box */}
      <motion.span
        className={`absolute left-0 bottom-[-2px] h-[1.75px] bg-current ${underlineClassName}`}
        variants={{
          initial: { width: "0%" },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.span>
  );
};
