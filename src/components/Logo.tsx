"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  /** "dark" draws the paper-on-ink tile; "light" inverts it for dark backgrounds */
  tone?: "dark" | "light";
}

// Two nested C's (Creative, Content) closed by a red full stop:
// "Quality Research. Perfect Results."
export const Logo: React.FC<LogoProps> = ({ className = "", size = 44, tone = "dark" }) => {
  const tile = tone === "dark" ? "#1C1B18" : "#F4F1EA";
  const stroke = tone === "dark" ? "#F4F1EA" : "#1C1B18";

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      title="Creative Content - Academic Research & Writing Desk"
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill={tile} />
        <path
          d="M41.2 19.2 A17 17 0 1 0 41.2 44.8"
          stroke={stroke}
          strokeWidth="5.5"
        />
        <path
          d="M36.4 26.3 A8.6 8.6 0 1 0 36.4 37.7"
          stroke={stroke}
          strokeWidth="5.5"
        />
        <circle cx="47.2" cy="44.6" r="3.6" fill="#B9381F" />
      </svg>
    </div>
  );
};
