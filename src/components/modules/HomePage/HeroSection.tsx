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

      {/* Outer wrapper — gives room for card overflow at bottom */}
      <div className="relative w-full" style={{ marginBottom: "100px" }}>
        {/* ═══════════════════════════════════════════════
            BANNER
        ═══════════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            height: "690px",
            background:
              "linear-gradient(105deg, #091f0c 0%, #0d2e11 20%, #10391a 40%, #165e25 65%, #1d7830 85%, #227d34 100%)",
          }}
        >
          {/* right-side brightness boost */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 78% 40%, rgba(45,160,60,0.30) 0%, transparent 55%)",
            }}
          />

          {/* ─── CONTENT AREA (max 1200px centred) ─── */}
          <div
            className="relative h-full mx-auto"
            style={{ maxWidth: "1440px", padding: "0 56px" }}
          >
            {/* ── HEADLINE ── top-left */}
            <h1
              className="absolute text-white m-0 p-0"
              style={{
                top: "56px",
                left: "56px",
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                fontFamily:
                  "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                maxWidth: "480px",
              }}
            >
              Pure Farm Chicken,
              <br />
              Delivered Fresh
            </h1>

            {/* ── SUBTITLE ── */}
            <p
              className="absolute m-0"
              style={{
                top: "180px",
                left: "56px",
                fontSize: "14px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.50)",
                maxWidth: "340px",
              }}
            >
              Premium quality chicken from trusted farms. No middlemen,
              <br />
              no compromise just fresh and safe meat.
            </p>

            {/* ── LABEL 1: 100% Halal Certified ── */}
            <div
              className="absolute flex items-center"
              style={{ top: "306px", right: "29%", zIndex: 20 }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(251,191,36,0.20)",
                  border: "1.5px solid #FBBF24",
                }}
              >
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#F59E0B",
                  }}
                />
              </div>
              {/* Text */}
              <span
                className="text-white font-medium whitespace-nowrap"
                style={{ fontSize: "13px" }}
              >
                100% Halal Certified
              </span>
              {/* Line */}
              <div
                style={{
                  width: "90px",
                  height: "1px",
                  background: "rgba(255,255,255,0.28)",
                }}
              />
              {/* End dot */}
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.45)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* ── LABEL 2: Antibiotic-Free Feed ── */}
            <div
              className="absolute flex items-center"
              style={{ top: "376px", right: "31%" }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(248,113,113,0.20)",
                  border: "1.5px solid #F87171",
                }}
              >
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "#EF4444",
                  }}
                />
              </div>
              {/* Text */}
              <span
                className="text-white font-medium whitespace-nowrap"
                style={{ fontSize: "13px" }}
              >
                Antibiotic-Free Feed
              </span>
              {/* Line */}
              <div
                style={{
                  width: "90px",
                  height: "1px",
                  background: "rgba(255,255,255,0.28)",
                }}
              />
              {/* End dot */}
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.45)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* ── CHICKEN IMAGE — top-right ── */}
            <div
              className="absolute"
              style={{
                top: "-30px",
                right: "-56px",
                width: "600px",
                height: "680px",
              }}
            >
              <Image
                src="/assets/Banner/rightBanner.png"
                alt="Fresh Farm Chicken"
                fill
                className="object-contain object-top"
                priority
              />

              {/* ── ROTATING BADGE — inside image container, right side ── */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  right: "18%",
                  top: "80%",
                  transform: "translateY(-10%)",
                  background: "rgba(10, 38, 15, 0.82)",
                  border: "1.5px solid rgba(255,255,255,0.20)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {/* Spinning SVG text ring */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 92 92"
                  style={{ animation: "badgeSpin 12s linear infinite" }}
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
                {/* Center icon */}
                <ShoppingBag size={24} color="white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          {/* end content area */}
        </section>

        {/* ═══════════════════════════════════════════════
            PRODUCT CARD + HAPPY CUSTOMERS ROW
            Card starts at top:285px, height 316px → bottom edge at 601px
            Happy customers aligned to card bottom strip
        ═══════════════════════════════════════════════ */}
        <div
          className="absolute z-20 flex items-end"
          style={{ top: "45%", left: "15%", gap: "32px" }}
        >
          {/* ── Product Card ── */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "333px",
              height: "396px",
              borderRadius: "20px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.55)",
            }}
          >
            {/* Dark green gradient bg */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(170deg, #0d2e10 0%, #0a2010 50%, #0f2e12 100%)",
              }}
            />
            {/* Product photo */}
            <Image
              src="/assets/Banner/leftbanner.png"
              alt="Broiler Whole Chicken"
              fill
              className="object-cover"
            />
            {/* White bottom info strip */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-between"
              style={{ padding: "10px 14px 12px 14px" }}
            >
              <div>
                <p
                  className="font-semibold text-[#1a1a1a] m-0"
                  style={{ fontSize: "13px", lineHeight: 1.3 }}
                >
                  Broiler Whole Chicken
                </p>
                <div
                  className="flex items-center"
                  style={{ marginTop: "4px", gap: "8px" }}
                >
                  <span
                    className="font-bold text-[#111]"
                    style={{ fontSize: "14px" }}
                  >
                    ৳ 310
                  </span>
                  <span
                    className="font-semibold text-green-500"
                    style={{ fontSize: "12px" }}
                  >
                    500g
                  </span>
                </div>
              </div>
              <button
                className="flex items-center justify-center text-white flex-shrink-0"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "10px",
                  background: "#22c55e",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ShoppingCart size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* ── Happy Customers — aligned to card bottom strip ── */}
          {/* mb aligns it so bottom of this block = bottom of card */}
          <div
            className="flex items-center flex-shrink-0"
            style={{ gap: "14px", marginBottom: "18px" }}
          >
            {/* Avatar stack */}
            <div className="flex">
              {[
                "/assets/Customer/customer1.png",
                "/assets/Customer/customer2.png",
                "/assets/Customer/customer3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative bg-gray-400 overflow-hidden"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "2.5px solid rgba(255,255,255,0.85)",
                    marginLeft: i === 0 ? 0 : "-12px",
                    flexShrink: 0,
                  }}
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
              <p
                className="text-white font-semibold m-0"
                style={{ fontSize: "14px", lineHeight: 1.3 }}
              >
                Our Happy Customer
              </p>
              <div
                className="flex items-center"
                style={{ marginTop: "4px", gap: "5px" }}
              >
                <Star size={12} fill="#FBBF24" color="#FBBF24" />
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  4.5 (13.5k Review)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end outer wrapper */}
    </>
  );
}
