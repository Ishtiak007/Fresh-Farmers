"use client";

import Image from "next/image";
import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Broiler Whole Chicken",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "#FDF7EC",
    image: "/assets/CustomerFavorites/CustomerFavorites1.png",
  },
  {
    id: 2,
    name: "Chicken Thigh Boneless",
    price: 520,
    originalPrice: 505,
    unit: "1kg",
    discount: "10% Off",
    bgColor: "#FFF2F4",
    image: "/assets/CustomerFavorites/CustomerFavorites2.png",
  },
  {
    id: 3,
    name: "Fresh Chicken Drumsticks",
    price: 240,
    originalPrice: null,
    unit: "12 Pls",
    discount: null,
    bgColor: "#E9FFF3",
    image: "/assets/CustomerFavorites/CustomerFavorites3.png",
  },
  {
    id: 4,
    name: "Fresh Chicken Wings",
    price: 290,
    originalPrice: 305,
    unit: "1.5kg",
    discount: "15% Off",
    bgColor: "#E9FFF3",
    image: "/assets/CustomerFavorites/CustomerFavorites4.png",
  },
  {
    id: 5,
    name: "Chicken Breast Boneless",
    price: 310,
    originalPrice: null,
    unit: "500g",
    discount: null,
    bgColor: "#FDF7EC",
    image: "/assets/CustomerFavorites/CustomerFavorites5.png",
  },
  {
    id: 6,
    name: "Family Combo Pack",
    price: 500,
    originalPrice: null,
    unit: "12 Pls",
    discount: null,
    bgColor: "#FFF2F4",
    image: "/assets/CustomerFavorites/CustomerFavorites6.png",
  },
];

export default function CustomerFavorites() {
  return (
    <div className="bg-white">
      <section className="max-w-[1440px] mx-auto px-4 py-10">
        {/* Section Title */}
        <h2 className="text-center text-[48px] font-medium text-[#171111] mb-6 font-sans">
          Customer Favorites
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-[416px] lg:h-[472px] bg-white rounded-2xl border border-[#f0f0f0] shadow-[0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden relative flex flex-col"
            >
              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-3 left-3 z-10 text-[10px] font-medium text-[#555] bg-white border border-[#e5e5e5] rounded px-1.5 py-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)] font-sans">
                  {product.discount}
                </span>
              )}

              {/* Image Area — centered horizontally & vertically */}
              <div
                className="relative w-full flex-1 flex items-center justify-center"
                style={{ backgroundColor: product.bgColor, minHeight: "300px" }}
              >
                <div className="relative w-[350px] h-[250px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Info Area — compact bar at the bottom */}
              <div className="w-full px-4 py-3 flex items-center justify-between bg-white flex-shrink-0 rounded-xl">
                {/* Left: name + price row */}
                <div className="flex flex-col gap-0.5">
                  <p className="text-[20px] font-medium text-[#101A12] m-0">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {product.originalPrice && (
                      <span className="text-[11px] text-[#aaa] line-through font-sans">
                        ৳{product.originalPrice}
                      </span>
                    )}
                    <span className="text-[13px] font-bold text-[#111] font-sans">
                      ৳ {product.price}
                    </span>
                    <span className="text-[10px] text-[#aaa] font-sans">
                      {product.unit}
                    </span>
                  </div>
                </div>

                {/* Cart Button — lucide-react ShoppingCart icon */}
                <button className="bg-green-500 hover:bg-green-600 border-none rounded-[12px] w-[34px] h-[34px] flex items-center justify-center cursor-pointer text-white flex-shrink-0 transition-colors">
                  <ShoppingCart size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
