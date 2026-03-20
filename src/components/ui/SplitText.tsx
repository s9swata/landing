"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

export const SplitText = ({ text, delay = 0.08, startDelay = 0 }: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: startDelay + index * delay,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
};
