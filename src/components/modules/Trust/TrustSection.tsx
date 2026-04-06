"use client";

import React from "react";

export default function TrustHeroBanner() {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div
        className="relative w-[1440px] mx-auto rounded-2xl overflow-hidden h-[544px]"
        style={{
          backgroundImage: "url('/assets/TrustImages/trustImageBG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20, 80, 30, 0.50) 0%, rgba(20, 80, 30, 0.20) 50%, transparent 100%)",
          }}
        />

        {/* Content — left side, vertically centered */}
        <div className="relative z-10 flex items-center h-full px-10 md:px-32">
          <div className="flex flex-col gap-2 select-none">
            {/* Line 1 */}
            <span
              className="block text-white font-bold uppercase"
              style={{
                fontSize: "62.75px",
                letterSpacing: "0.14em",
                textShadow: "0 2px 10px rgba(0,0,0,0.20)",
              }}
            >
              FRESHNESS
            </span>

            {/* Line 2 — highlighted block */}
            <span
              className="block font-extrabold uppercase px-4 py-1.5 w-fit"
              style={{
                fontSize: "82.87px",
                letterSpacing: "0.10em",
                color: "#FEE800",
                backgroundColor: "#0A3621",
                lineHeight: 1.25,
              }}
            >
              YOU CAN
            </span>

            {/* Line 3 */}
            <span
              className="block text-white font-bold uppercase"
              style={{
                fontSize: "62.75px",
                letterSpacing: "0.14em",
                textShadow: "0 2px 10px rgba(0,0,0,0.20)",
              }}
            >
              TRUST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
