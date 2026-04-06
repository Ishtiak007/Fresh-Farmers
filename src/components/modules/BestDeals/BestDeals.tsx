"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const deals = [
  {
    id: 1,
    name: "Fresh Chicken Wings",
    price: 520,
    originalPrice: 605,
    unit: "1kg",
    discount: "10% Off",
    bgColor: "bg-[#FFF9EC]",
    image: "/assets/BestDeals/BestDeals1.png",
  },
  {
    id: 2,
    name: "Fresh Chicken Drumsticks",
    price: 240,
    originalPrice: null,
    unit: "2kg",
    discount: null,
    bgColor: "bg-[#FFF0F3]",
    image: "/assets/BestDeals/BestDeals2.png",
  },
  {
    id: 3,
    name: "Chicken Thigh Boneless",
    price: 290,
    originalPrice: 305,
    unit: "1kg",
    discount: "15% Off",
    bgColor: "bg-[#F0FFF4]",
    image: "/assets/BestDeals/BestDeals3.png",
  },
  {
    id: 4,
    name: "Fresh Chicken Wings",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "bg-[#FFF0F3]",
    image: "/assets/BestDeals/BestDeals4.png",
  },
  {
    id: 5,
    name: "Broiler Whole Chicken",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "bg-[#FFF9EC]",
    image: "/assets/BestDeals/BestDeals5.png",
  },
  {
    id: 6,
    name: "Chicken Breast Boneless",
    price: 480,
    originalPrice: 520,
    unit: "1kg",
    discount: "8% Off",
    bgColor: "bg-[#F0FFF4]",
    image: "/assets/BestDeals/BestDeals6.png",
  },
];

export default function BestDeals() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <div className="bg-white w-full">
      <style>{`
        .deals-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        .deals-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #d4d4d4;
          opacity: 1;
          transition: width 0.3s ease, background 0.3s ease;
          cursor: pointer;
        }
        .deals-pagination .swiper-pagination-bullet-active {
          width: 20px;
          background: #22c55e;
        }
      `}</style>

      <section className="max-w-[1440px] mx-auto px-4 py-10">
        {/* Title */}
        <h2 className="text-center text-[28px] sm:text-[48px] font-medium text-[#1a1a1a] mb-8">
          Best Deals
        </h2>

        {/* Slider wrapper */}
        <div className="relative px-8 sm:px-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={setSwiperRef}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".deals-pagination",
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
          >
            {deals.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto">
                <div className="bg-white rounded-[24px] border border-[#f0f0f0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden relative flex flex-col h-[350px]">
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-medium text-[#555] bg-white border border-[#e5e5e5] rounded px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                      {product.discount}
                    </span>
                  )}

                  {/* Image */}
                  <div
                    className={`relative w-full flex items-center justify-center flex-shrink-0 h-[270px] ${product.bgColor}`}
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
                  <div className="w-full px-4 py-3 flex items-center justify-between bg-white flex-1">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-10
              w-[42px] h-[42px] rounded-[12px] bg-white border border-[#e5e5e5]
              shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center
              text-[#555] hover:bg-gray-50 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>

          {/* Next Button */}
          <button
            onClick={() => swiperRef?.slideNext()}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-10
              w-[42px] h-[42px] rounded-[12px] bg-[#28A745] hover:bg-green-600
              border-none shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center
              justify-center text-white transition-all"
            aria-label="Next"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="deals-pagination" />
      </section>
    </div>
  );
}
