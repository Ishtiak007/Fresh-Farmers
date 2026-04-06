"use client";

import React from "react";

export default function TrustHeroBanner() {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div
        className="relative w-[1440px] mx-auto rounded-2xl overflow-hidden h-[544px]
          bg-[url('/assets/TrustImages/trustImageBG.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Left gradient overlay for text */}
        <div
          className="absolute inset-0
            bg-[linear-gradient(to_right,rgba(20,80,30,0.50)_0%,rgba(20,80,30,0.20)_50%,transparent_100%)]"
        />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-10 md:px-32">
          <div className="flex flex-col gap-2 select-none">
            {/* Line 1 */}
            <span
              className="block text-white font-bold uppercase
                text-[62.75px] tracking-[0.14em]
                [text-shadow:0_2px_10px_rgba(0,0,0,0.20)]"
            >
              FRESHNESS
            </span>

            {/* Line 2 */}
            <span
              className="block font-extrabold uppercase px-4 py-1.5 w-fit
                text-[82.87px] tracking-[0.10em] leading-[1.25]
                text-[#FEE800] bg-[#0A3621]"
            >
              YOU CAN
            </span>

            {/* Line 3 */}
            <span
              className="block text-white font-bold uppercase
                text-[62.75px] tracking-[0.14em]
                [text-shadow:0_2px_10px_rgba(0,0,0,0.20)]"
            >
              TRUST
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
