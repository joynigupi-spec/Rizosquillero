import React from 'react';

export const HibiscusFlower: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 40,
  color = '#CF2844',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 5 Petals of Tropical Hibiscus */}
      <path
        d="M50 48 C42 32, 28 20, 42 8 C52 -2, 64 12, 54 36 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M52 50 C68 40, 86 32, 94 46 C100 58, 84 68, 60 56 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M50 54 C60 70, 72 86, 58 96 C46 102, 36 86, 44 62 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M48 52 C32 64, 14 74, 6 60 C-2 48, 14 38, 38 46 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M46 48 C30 38, 16 24, 26 12 C36 2, 48 20, 48 42 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Inner Petal Veins */}
      <circle cx="50" cy="50" r="14" fill="#B51D37" />
      <circle cx="50" cy="50" r="7" fill="#FBBA42" />
      {/* Golden Pistil / Stamen */}
      <path
        d="M50 50 Q60 35 68 22"
        stroke="#FBBA42"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="68" cy="22" r="3.5" fill="#FBBA42" />
      <circle cx="64" cy="27" r="2" fill="#FBBA42" />
      <circle cx="59" cy="33" r="2" fill="#FBBA42" />
    </svg>
  );
};

export const TropicalLeaf: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 40,
  color = '#0C695F',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15 85 C25 60, 45 30, 85 15 C75 45, 60 75, 15 85 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Central Stem */}
      <path
        d="M15 85 Q50 50 85 15"
        stroke="#074740"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Side Leaf Cuts */}
      <path d="M40 60 Q55 62 70 70" stroke="#074740" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 48 Q68 48 78 54" stroke="#074740" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 36 Q75 33 82 38" stroke="#074740" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const CurlWavePattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto preserve-3d ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,96 480,-16 720,48 C960,112 1200,16 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
};
