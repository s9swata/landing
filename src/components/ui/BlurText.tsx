"use client";

import { motion, Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText = ({ text, delay = 0, className = "" }: BlurTextProps) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: delay 
      }
    }
  };

  const child: Variants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)",
      y: 50 
    },
    visible: {
      opacity: [0, 0.5, 1],
      filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
      y: [50, -5, 0],
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={child}
          className="mr-[0.25em] last:mr-0 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};
