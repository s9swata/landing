import React, { useEffect, useRef } from 'react';

const SquiggleAnimation = ({
  className = 'squiggle',
  strokeColor = '#CD3C2F',
  strokeWidth = 30,
  pathData = "M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852",
  width = 1000,
  height = 2000,
  viewBox = "0 0 1000 2000",
  style = {}
}) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;

      const percentage = Math.max(0, Math.min(1, distance / totalDistance));

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

  const defaultStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '200vw',
    zIndex: 1,
    ...style
  };

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={defaultStyle}
    >
      <g clipPath="url(#clip0_squiggle)">
        <path
          ref={pathRef}
          d={pathData}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="clip0_squiggle">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquiggleAnimation;
