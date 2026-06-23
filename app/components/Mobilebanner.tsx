"use client";

import { useState } from "react";

export default function MobileBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "https://static.sptpub.com/promo/images/2475747263155146758/banner/2679017604693241856_2679017604693241865_large.jpeg",
      link: "/sports",
    },
    
    {
      image: "https://static.sptpub.com/promo/images/2475747263155146758/banner/2525105999128436745_2679164210969186311_large.jpeg",
      link: "/promotions",
    },
     {
      image: "https://static.sptpub.com/promo/images/2475747263155146758/banner/2679017604693241856_2679017604693241865_large.jpeg",
      link: "/promotions",
    },{
      image: "https://static.sptpub.com/promo/images/2475747263155146758/banner/2525105999128436745_2679164210969186311_large.jpeg",
      link: "/promotions",
    },
    
  ];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-[#061723]">
        <a href={slides[activeIndex].link}>
          <img
            src={slides[activeIndex].image}
            alt="Banner"
            className="w-full h-[120px] md:h-[180px] lg:h-[270px] object-cover"
          />
        </a>

        {/* Dots */}
        <div className="absolute bottom-3 left-4 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}