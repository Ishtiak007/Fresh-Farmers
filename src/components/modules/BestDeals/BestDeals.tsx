"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const deals = [
  {
    id: 1,
    name: "Fresh Chicken Wings",
    price: 520,
    originalPrice: 605,
    unit: "1kg",
    discount: "10% Off",
    bgColor: "#FFF9EC",
    image: "/assets/BestDeals/BestDeals1.png",
  },
  {
    id: 2,
    name: "Fresh Chicken Drumsticks",
    price: 240,
    originalPrice: null,
    unit: "2kg",
    discount: null,
    bgColor: "#FFF0F3",
    image: "/assets/BestDeals/BestDeals2.png",
  },
  {
    id: 3,
    name: "Chicken Thigh Boneless",
    price: 290,
    originalPrice: 305,
    unit: "1kg",
    discount: "15% Off",
    bgColor: "#F0FFF4",
    image: "/assets/BestDeals/BestDeals3.png",
  },
  {
    id: 4,
    name: "Fresh Chicken Wings",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "#FFF0F3",
    image: "/assets/BestDeals/BestDeals4.png",
  },
  {
    id: 5,
    name: "Broiler Whole Chicken",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "#FFF9EC",
    image: "/assets/BestDeals/BestDeals5.png",
  },
  {
    id: 6,
    name: "Chicken Breast Boneless",
    price: 480,
    originalPrice: 520,
    unit: "1kg",
    discount: "8% Off",
    bgColor: "#F0FFF4",
    image: "/assets/BestDeals/BestDeals6.png",
  },
];

const VISIBLE = 4;

export default function BestDeals() {
  const [current, setCurrent] = useState(0);
  const maxIndex = deals.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  // dot count = maxIndex + 1
  const totalDots = maxIndex + 1;

  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-4 py-10">
        {/* Title */}
        <h2 className="text-center text-[48px] font-medium text-[#1a1a1a] mb-8 ">
          Best Deals
        </h2>

        {/* Slider wrapper */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-5 z-10 size-[58px] rounded-[16px] bg-white border border-[#e5e5e5] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#555] hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>

          {/* Cards viewport */}
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 4px)))`,
              }}
            >
              {deals.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 bg-white  rounded-[24px] w-[308px] h-[350px] border border-[#f0f0f0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden relative flex flex-col"
                  style={{ width: `calc(100% / ${VISIBLE} - 12px)` }}
                >
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-medium text-[#555] bg-white border border-[#e5e5e5] rounded px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                      {product.discount}
                    </span>
                  )}

                  {/* Image */}
                  <div
                    className="relative w-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: product.bgColor,
                      height: "270px",
                    }}
                  >
                    <div className="relative w-[220px] h-[168px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full px-4 py-3 flex items-center justify-between bg-white">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[16px] font-medium text-[#101A12] leading-snug m-0">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-1.5">
                        {product.originalPrice && (
                          <span className="text-[11px] text-[#aaa] line-through">
                            ৳{product.originalPrice}
                          </span>
                        )}
                        <span className="text-[13px] font-bold text-[#111]">
                          ৳ {product.price}
                        </span>
                        <span className="text-[10px] text-[#aaa]">
                          {product.unit}
                        </span>
                      </div>
                    </div>

                    <button className="bg-[#28A745] hover:bg-green-600 transition-colors rounded-lg w-[48px] h-[48px] flex items-center justify-center text-white flex-shrink-0">
                      <ShoppingCart size={15} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            className="absolute -right-5 z-10 size-[58px] rounded-[16px] bg-[#28A745] hover:bg-green-600 border-none shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-green-500"
                  : "w-2 h-2 bg-[#d4d4d4] hover:bg-[#aaa]"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
