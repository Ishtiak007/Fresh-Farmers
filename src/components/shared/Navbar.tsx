"use client";

import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Logo ─────────────────────────────────────────────────────────────────────

const Logo = () => (
  <div className="flex items-center gap-2 cursor-pointer group">
    {/* Leaf / sprout mark — pure SVG, no external deps */}

    <div className="leading-none">
      <p className="text-[10px] tracking-[0.22em] text-[#FFFFFF] font-medium">
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
    <header className="min-w-[1440px] font-sans">
      {/* ── Announcement Bar ── */}
      <div className="bg-[#101A12] text-white text-[12.5px] text-center py-2 px-4 tracking-wide border-b border-white/5">
        Free Delivery On Orders Over{" "}
        <span className="text-[#4ade80] font-semibold">৳999</span>
        <span className="mx-3 opacity-40">•</span>
        100% Fresh &amp; Hygienic
      </div>

      {/* ── Main Navbar ── */}
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
                    ${
                      active === link
                        ? "text-white"
                        : "text-white/55 hover:text-white/90"
                    }
                  `}
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
              <ShoppingCart />
            </button>

            {/* Sign In */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-[7px] rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 text-[13px] font-medium tracking-wide transition-all duration-200">
              <User />
              Sign In
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ─ Mobile Menu ── */}
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
                    }
                  `}
                >
                  {link}
                </button>
              </li>
            ))}
            {/* Mobile Sign In */}
            <li className="pt-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 text-[13.5px] font-medium tracking-wide transition-all duration-200">
                <UserIcon />
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
