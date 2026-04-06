"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Whole\nChicken",
    image: "/assets/CategoryImages/category1.png",
  },
  {
    id: 2,
    title: "Premium\nCuts",
    image: "/assets/CategoryImages/category2.png",
  },
  {
    id: 3,
    title: "Ready to\nCook",
    image: "/assets/CategoryImages/category3.png",
  },
  {
    id: 4,
    title: "Family\nCombos",
    image: "/assets/CategoryImages/category4.png",
  },
  {
    id: 5,
    title: "Marinated\nSpecials",
    image: "/assets/CategoryImages/category1.png",
  },
  {
    id: 6,
    title: "Boneless\nBreast",
    image: "/assets/CategoryImages/category2.png",
  },
  {
    id: 7,
    title: "Drumsticks",
    image: "/assets/CategoryImages/category3.png",
  },
  {
    id: 8,
    title: "Thigh\nFillets",
    image: "/assets/CategoryImages/category4.png",
  },
];

const CARDS_PER_PAGE = 4;
const totalPages = Math.ceil(categories.length / CARDS_PER_PAGE);

function CategoryCard({ category }: { category: (typeof categories)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer select-none flex-shrink-0"
      style={{ width: "calc((100% - 48px) / 4)", aspectRatio: "3 / 4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={category.image}
        fill
        alt={category.title.replace("\n", " ")}
        className="object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.12) 50%, transparent 100%)",
        }}
      />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between">
        <p className="text-white text-[17px] font-semibold leading-snug whitespace-pre-line drop-shadow-sm">
          {category.title}
        </p>

        <button
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          style={{
            backgroundColor: hovered ? "#4ade80" : "#1a3d2b",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
          aria-label={`Go to ${category.title.replace("\n", " ")}`}
        >
          <ArrowUpRight size={17} color="white" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

export default function ShopByCategory() {
  const [activePage, setActivePage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goToPage = (page: number) => {
    if (page < 0 || page >= totalPages) return;
    setActivePage(page);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${page * 100}%)`;
    }
  };

  return (
    <section className="w-full py-12 bg-white h-[682px]">
      {/* Heading */}
      <h2 className="text-center text-[28px] sm:text-[48px] font-medium text-[#171111] mb-8 tracking-tight">
        Shop By Category
      </h2>

      {/* Slider Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Overflow mask */}
        <div className="overflow-hidden">
          {/* Sliding track — each "page" is 100% wide and shows 4 cards */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ willChange: "transform" }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div key={pageIdx} className="flex gap-4 flex-shrink-0 w-full">
                {categories
                  .slice(
                    pageIdx * CARDS_PER_PAGE,
                    (pageIdx + 1) * CARDS_PER_PAGE,
                  )
                  .map((cat) => (
                    <CategoryCard key={cat.id} category={cat} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            aria-label={`Page ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              height: "8px",
              width: activePage === i ? "24px" : "8px",
              backgroundColor: activePage === i ? "#1a6b3a" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </section>
  );
}
