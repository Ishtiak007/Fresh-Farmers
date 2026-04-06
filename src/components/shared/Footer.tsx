"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowBigUpDash,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import paymentMethods from "/public/assets/Footer/footerImg.png";

const navLinks = ["Home", "Shop", "About", "Contact"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative w-full bg-white">
      {/* newsletter */}
      <div className="relative z-10 flex justify-center px-6">
        <div
          className="relative w-full max-w-[818px] max-h-[328px] rounded-2xl overflow-hidden flex flex-col items-center text-center px-8 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
          style={{
            background:
              "linear-gradient(160deg, #c8f0cc 0%, #dff5e1 30%, #edfaee 60%, #f4fef5 100%)",
          }}
        >
          {/* Heading */}
          <h2
            className="text-[#0f1a0e] font-bold leading-snug mb-2"
            style={{ fontSize: "40px" }}
          >
            Get Exclusive Offers &amp;
            <br />
            Weekly Deals
          </h2>

          {/* Subtext */}
          <p className="text-[#707671] text-[16px] leading-relaxed mb-6 max-w-[349px]">
            Subscribe to get fresh deals, seasonal offers, and cooking tips.
          </p>

          {/* Email Row */}
          <div className="relative flex items-center w-full max-w-[300px] bg-white rounded-xl shadow-sm px-4 py-[14px] gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[13px] text-[#333] placeholder:text-[#bbb] "
            />
            <button className="absolute -right-[50px] bg-[#28A745] hover:bg-green-600 transition-colors rounded-lg size-[44px] flex items-center justify-center flex-shrink-0">
              <ArrowUpRight size={13} color="white" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#101A12] -mt-16 pt-28 h-[350px] mx-auto">
        {/* logo*/}
        <div className="flex flex-col items-center gap-1">
          <span
            className="text-white font-bold tracking-wide"
            style={{ fontSize: "18px" }}
          >
            Fresh Farmers
          </span>
        </div>

        {/* navlinks */}
        <nav className="flex items-center justify-center gap-7 mt-5">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-[13px] font-sans transition-colors ${
                i === 0
                  ? "text-white font-semibold"
                  : "text-[#8aaa88] hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="w-full border-t border-[#2e3d2c] mt-7" />

        {/* Contact Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-4 text-[12px] text-white">
          <span className="flex items-center gap-1.5">
            <Phone size={13} strokeWidth={1.8} />
            +880 1820-421012
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={13} strokeWidth={1.8} />
            info@freshfarmers.farm
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} strokeWidth={1.8} />
            Barkona More, Saghata,Gaibandha, Bangladesh
          </span>
        </div>

        <div className="w-full border-t border-[#2e3d2c]" />

        {/*bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 gap-2 text-[11px] text-white">
          <span>©2025 Fresh Farmers All Rights Reserved</span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="flex items-center gap-0.5 hover:text-white transition-colors"
            >
              Privacy Policy <ChevronRight size={11} />
            </a>
            <a
              href="#"
              className="flex items-center gap-0.5 hover:text-white transition-colors"
            >
              Terms &amp; Conditions <ChevronRight size={11} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-[#2e3d2c]" />
        <div className="w-full px-4 py-3 flex justify-center items-center my-10">
          <Image
            src={paymentMethods}
            alt="Accepted payment methods"
            className="w-full max-w-full h-auto object-contain opacity-90"
          />
        </div>
      </footer>
    </div>
  );
}
