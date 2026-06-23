"use client";

import { useState } from "react";

export default function MobileBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "https://winna.com/promotions/drops-and-wins.webp",
      link: "/sports",
    },
    
    {
      image: "https://winna.com/promotions/winna-trillion.webp",
      link: "/promotions",
    },
     {
      image: "https://winna.com/promotions/drops-and-wins.webp",
      link: "/promotions",
    },{
      image: "https://winna.com/promotions/winna-trillion.webp",
      link: "/casino",
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