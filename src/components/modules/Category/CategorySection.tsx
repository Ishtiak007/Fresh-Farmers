"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

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
  { id: 7, title: "Drumsticks", image: "/assets/CategoryImages/category3.png" },
  {
    id: 8,
    title: "Thigh\nFillets",
    image: "/assets/CategoryImages/category4.png",
  },
];

function CategoryCard({ category }: { category: (typeof categories)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer select-none w-full aspect-[3/4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={category.image}
        fill
        alt={category.title.replace("\n", " ")}
        className={`object-cover transition-transform duration-500 ${
          hovered ? "scale-[1.07]" : "scale-100"
        }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.12)_50%,transparent_100%)]" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 flex items-end justify-between">
        <p className="text-white text-[26px] font-medium leading-snug whitespace-pre-line drop-shadow-sm">
          {category.title}
        </p>
        <button
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            hovered ? "bg-[#4ade80] scale-110" : "bg-[#1a3d2b] scale-100"
          }`}
          aria-label={`Go to ${category.title.replace("\n", " ")}`}
        >
          <ArrowUpRight size={17} color="white" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

export default function ShopByCategory() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="w-full py-12 bg-white">
      {/* Pagination dot styles */}
      <style>{`
        .category-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }
        .category-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #d1d5db;
          opacity: 1;
          transition: width 0.3s ease, background 0.3s ease;
          cursor: pointer;
        }
        .category-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #1a6b3a;
        }
      `}</style>

      {/* Heading */}
      <h2 className="text-center text-[28px] md:text-[48px] font-medium text-[#171111] mb-8 tracking-tight">
        Shop By Category
      </h2>

      {/* Slider Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-8 sm:px-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={setSwiperRef}
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
            el: ".category-pagination",
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <CategoryCard category={cat} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev Button */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md
            flex items-center justify-center text-gray-600
            hover:text-[#1a6b3a] hover:border-[#1a6b3a] transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => swiperRef?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md
            flex items-center justify-center text-gray-600
            hover:text-[#1a6b3a] hover:border-[#1a6b3a] transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="category-pagination" />
    </section>
  );
}
