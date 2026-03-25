"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipTextProps {
  children: string;
  className?: string;
}

export function FlipText({ children, className }: FlipTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn("inline-block cursor-pointer -ml-1", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            rotateX: isHovered ? 360 : 0,
            y: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.03 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
