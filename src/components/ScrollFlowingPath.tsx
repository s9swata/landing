"use client";

import { useEffect, useRef } from "react";

export default function ScrollFlowingPath() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const updatePath = () => {
      const pathLength = path.getTotalLength();
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollY / docHeight));

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
    };

    updatePath();
    window.addEventListener("scroll", updatePath, { passive: true });
    return () => window.removeEventListener("scroll", updatePath);
  }, []);

  return (
    <svg
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{ height: "200vh", zIndex: 0 }}
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
        stroke="#CAC4B8"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ opacity: 0.1 }}
      />
    </svg>
  );
}
