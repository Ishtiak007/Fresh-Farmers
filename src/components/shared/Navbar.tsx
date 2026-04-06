"use client";

import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Logo = () => (
  <div className="flex items-center gap-2 cursor-pointer group">
    <div className="leading-none">
      <p className="text-[10px] tracking-[0.22em] text-white font-medium">
        Fresh Farmers
      </p>
    </div>
  </div>
);

const navLinks = ["Home", "Shop", "About", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="w-full font-sans">
      {/* Announcement Bar */}
      <div className="bg-[#101A12] text-white text-[12.5px] text-center py-2 px-4 tracking-wide border-b border-white/5">
        Free Delivery On Orders Over{" "}
        <span className="text-[#4ade80] font-semibold">৳999</span>
        <span className="mx-3 opacity-40">•</span>
        100% Fresh &amp; Hygienic
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#101A12] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex items-center justify-between h-[64px]">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActive(link)}
                  className={`relative px-4 py-1.5 text-[13.5px] font-medium tracking-wide rounded-md transition-all duration-200
                    ${active === link ? "text-white" : "text-white/55 hover:text-white/90"}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative w-9 h-9 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <ShoppingCart size={20} strokeWidth={1.8} />
            </button>

            {/* Sign In — hidden on mobile */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-[7px] rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 text-[13px] font-medium tracking-wide transition-all duration-200">
              <User size={16} strokeWidth={1.8} />
              Sign In
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-5 pb-5 pt-2 gap-1 border-t border-white/5">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    setActive(link);
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-150
                    ${
                      active === link
                        ? "text-[#4ade80] bg-[#4ade80]/8"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link}
                </button>
              </li>
            ))}
            {/* Mobile Sign In */}
            <li className="pt-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 text-[13.5px] font-medium tracking-wide transition-all duration-200">
                <User size={16} strokeWidth={1.8} />
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
