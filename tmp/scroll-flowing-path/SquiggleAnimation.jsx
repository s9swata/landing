import React, { useEffect, useRef } from 'react';

const SquiggleAnimation = ({ className = 'squiggle' }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;

      const percentage = distance / totalDistance;

      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    // Initial call
    scroll();

    // Add scroll event listener
    window.addEventListener('scroll', scroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1000"
      height="2000"
      viewBox="0 0 1000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '200vw',
        zIndex: 1,
      }}
    >
      <g clipPath="url(#clip0_5_2)">
        <path
          ref={pathRef}
          d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
          stroke="#CD3C2F"
          strokeWidth="30"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            strokeWidth: '0.5rem',
          }}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2">
          <rect width="1000" height="2000" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquiggleAnimation;
