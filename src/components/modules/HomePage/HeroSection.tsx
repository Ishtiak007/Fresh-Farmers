"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Star, ShoppingBag } from "lucide-react";

export default function HeroBanner() {
  return (
    <>
      <style>{`
        @keyframes badgeSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative w-full mb-16 sm:mb-20 md:mb-[100px]">
        {/* Banner */}
        <section className="relative w-full overflow-hidden h-[480px] sm:h-[560px] md:h-[620px] lg:h-[690px] bg-[linear-gradient(105deg,#091f0c_0%,#0d2e11_20%,#10391a_40%,#165e25_65%,#1d7830_85%,#227d34_100%)]">
          {/* Right-side radial glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_78%_40%,rgba(45,160,60,0.30)_0%,transparent_55%)]" />

          {/* Content area */}
          <div className="relative h-full mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-[56px]">
            {/* Top left heading */}
            <h1
              className="absolute text-white m-0 p-0
                top-8 left-5
                sm:top-10 sm:left-8
                md:top-12 md:left-10
                lg:top-[56px] lg:left-[56px]
                text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px]
                font-medium leading-[1.08] tracking-[-1px] lg:tracking-[-1.5px]
                max-w-[260px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px]"
              style={{
                fontFamily:
                  "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
              }}
            >
              Pure Farm Chicken,
              <br />
              Delivered Fresh
            </h1>

            {/* Subtitle */}
            <p
              className="absolute m-0
              top-[130px] left-5
              sm:top-[155px] sm:left-8
              md:top-[165px] md:left-10
              lg:top-[180px] lg:left-[56px]
              text-[12px] sm:text-[13px] lg:text-[14px]
              leading-[1.65] text-white/50
              max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]"
            >
              Premium quality chicken from trusted farms. No middlemen,
              <br />
              no compromise just fresh and safe meat.
            </p>

            {/* Label 1: 100% Halal Certified — hidden on mobile */}
            <div
              className="hidden sm:absolute sm:flex items-center
              sm:top-[260px] sm:right-[28%]
              md:top-[280px] md:right-[29%]
              lg:top-[306px] lg:right-[29%]
              z-20 gap-2"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full bg-[rgba(251,191,36,0.20)] border-[1.5px] border-[#FBBF24]">
                <div className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-full bg-[#F59E0B]" />
              </div>
              <span className="text-white font-medium whitespace-nowrap text-[11px] sm:text-[13px]">
                100% Halal Certified
              </span>
              <div className="w-[60px] sm:w-[90px] h-px bg-white/[0.28]" />
              <div className="w-[7px] h-[7px] rounded-full bg-white/45 flex-shrink-0" />
            </div>

            {/* Label 2: Antibiotic-Free Feed — hidden on mobile */}
            <div
              className="hidden sm:absolute sm:flex items-center
              sm:top-[310px] sm:right-[30%]
              md:top-[340px] md:right-[31%]
              lg:top-[376px] lg:right-[31%]
              gap-2"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] rounded-full bg-[rgba(248,113,113,0.20)] border-[1.5px] border-[#F87171]">
                <div className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-full bg-[#EF4444]" />
              </div>
              <span className="text-white font-medium whitespace-nowrap text-[11px] sm:text-[13px]">
                Antibiotic-Free Feed
              </span>
              <div className="w-[60px] sm:w-[90px] h-px bg-white/[0.28]" />
              <div className="w-[7px] h-[7px] rounded-full bg-white/45 flex-shrink-0" />
            </div>

            {/* Top right chicken image */}
            <div
              className="absolute
              top-[-10px] right-[-16px]
              w-[220px] h-[340px]
              sm:top-[-20px] sm:right-[-24px] sm:w-[340px] sm:h-[480px]
              md:top-[-24px] md:right-[-36px] md:w-[460px] md:h-[580px]
              lg:top-[-30px] lg:right-[-56px] lg:w-[600px] lg:h-[680px]"
            >
              <Image
                src="/assets/Banner/rightBanner.png"
                alt="Fresh Farm Chicken Image"
                fill
                className="object-contain object-top"
                priority
              />

              {/* Rotating badge — hidden on mobile */}
              <div
                className="hidden sm:absolute sm:flex items-center justify-center
                w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px]
                rounded-full right-[14%] top-[78%] -translate-y-[10%]
                bg-[rgba(10,38,15,0.82)] border-[1.5px] border-white/20 backdrop-blur-[8px]"
              >
                <svg
                  className="absolute inset-0 w-full h-full [animation:badgeSpin_12s_linear_infinite]"
                  viewBox="0 0 92 92"
                >
                  <defs>
                    <path
                      id="bp"
                      d="M 46,46 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    style={{ fontSize: "7px", letterSpacing: "2.8px" }}
                  >
                    <textPath href="#bp">
                      Farm Fresh Poultry | Delivered Daily |{" "}
                    </textPath>
                  </text>
                </svg>
                <ShoppingBag size={20} color="white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        {/* Product card + happy customers */}
        {/* Mobile: stacked below banner; md+: absolute overlap */}
        <div
          className="
          flex flex-col items-center gap-6 px-5 pt-6
          sm:flex-row sm:items-end sm:px-8 sm:pt-8
          md:absolute md:z-20 md:flex-row md:items-end
          md:top-[42%] md:left-[8%] md:gap-6 md:px-0 md:pt-0
          lg:top-[45%] lg:left-[15%] lg:gap-[32px]"
        >
          {/* Product Card */}
          <div
            className="relative overflow-hidden flex-shrink-0
            w-full max-w-[333px] h-[320px]
            sm:w-[280px] sm:h-[350px]
            md:w-[300px] md:h-[370px]
            lg:w-[333px] lg:h-[396px]
            rounded-[20px] shadow-[0_16px_48px_rgba(0,0,0,0.55)]"
          >
            {/* Dark green gradient bg */}
            <div className="absolute inset-0 bg-[linear-gradient(170deg,#0d2e10_0%,#0a2010_50%,#0f2e12_100%)]" />
            {/* Product photo */}
            <Image
              src="/assets/Banner/leftbanner.png"
              alt="Broiler Whole Chicken"
              fill
              className="object-cover"
            />
            {/* White bottom info strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-between px-[14px] pt-[10px] pb-[12px]">
              <div>
                <p className="font-semibold text-[#1a1a1a] m-0 text-[13px] leading-[1.3]">
                  Broiler Whole Chicken
                </p>
                <div className="flex items-center mt-1 gap-2">
                  <span className="font-bold text-[#111] text-[14px]">
                    ৳ 310
                  </span>
                  <span className="font-semibold text-green-500 text-[12px]">
                    500g
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center text-white flex-shrink-0 w-[34px] h-[34px] rounded-[10px] bg-green-500 border-none cursor-pointer">
                <ShoppingCart size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Happy customers */}
          <div className="flex items-center flex-shrink-0 gap-[14px] md:mb-[18px]">
            {/* Avatar stack */}
            <div className="flex">
              {[
                "/assets/Customer/customer1.png",
                "/assets/Customer/customer2.png",
                "/assets/Customer/customer3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className={`relative bg-gray-400 overflow-hidden w-[44px] h-[44px] rounded-full border-[2.5px] border-white/85 flex-shrink-0 ${i !== 0 ? "-ml-3" : ""}`}
                >
                  <Image
                    src={src}
                    alt={`customer ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Text */}
            <div>
              <p className="text-white font-semibold m-0 text-[14px] leading-[1.3] md:text-white">
                Our Happy Customer
              </p>
              <div className="flex items-center mt-1 gap-[5px]">
                <Star size={12} fill="#FBBF24" color="#FBBF24" />
                <span className="text-[12px] text-white/65">
                  4.5 (13.5k Review)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
