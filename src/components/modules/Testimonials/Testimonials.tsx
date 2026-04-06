"use client";
import React, { useRef } from "react";
import { Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tahmid Hasan",
    date: "February 2, 2026",
    quote:
      '"Very clean packaging and super fresh meat. Delivery was on time. Highly recommended!"',
    video: "/assets/TestimonilasVideos/video.mp4",
    poster: "/assets/TestimonilasVideos/image.png",
    hideTextOnHover: true,
  },
  {
    id: 2,
    name: "Tasnim Jahan",
    date: "February 3, 2026",
    quote:
      '"Taste and quality is far better than local market. Definitely ordering again."',
    video: "/assets/TestimonilasVideos/video2.mp4",
    poster: "/assets/TestimonilasVideos/image2.png",
    hideTextOnHover: true,
  },
  {
    id: 3,
    name: "Farhan Ahmed",
    date: "February 5, 2026",
    quote: '"Loved the marinated options. Saved my cooking time!"',
    video: "/assets/TestimonilasVideos/video3.mp4",
    poster: "/assets/TestimonilasVideos/image3.png",
    hideTextOnHover: true,
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    if (item.hideTextOnHover && textRef.current) {
      textRef.current.style.opacity = "0";
    }
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (item.hideTextOnHover && textRef.current) {
      textRef.current.style.opacity = "1";
    }
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ height: "545px", width: "416px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <div className="w-11 h-11 rounded-full bg-white/75 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Play
            size={18}
            fill="#1a1a1a"
            color="#1a1a1a"
            strokeWidth={0}
            className="ml-0.5"
          />
        </div>
      </div>

      {/* Text overlay — bottom of card */}
      <div
        ref={textRef}
        className="absolute bottom-0 left-0 right-0 px-5 py-5 flex flex-col gap-3 z-10"
        style={{ transition: "opacity 0.3s ease" }}
      >
        <p className="text-[18px] text-white m-0">{item.quote}</p>
        <div>
          <p className="text-[18px] font-semibold text-white m-0 font-sans">
            {item.name}
          </p>
          <p className="text-[14px] font-[400]">{item.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function CustomerTestimonials() {
  return (
    <div className="bg-[#F6F6F6] w-full">
      <section className="max-w-[1440px] mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-center text-[48px] font-bold text-[#171111] mb-8">
          What Our Customers Say
        </h2>

        {/* Cards Grid */}
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Dot indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-6 h-2 rounded-full bg-green-500" />
        </div>
      </section>
    </div>
  );
}
