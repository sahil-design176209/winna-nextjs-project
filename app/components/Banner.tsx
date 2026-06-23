"use client";

import React, { useState } from "react";

const Banner = () => {
  // Track which slide index is currently expanded (default to index 1)
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      tag: "FIFA World Cup 2026",
      title: "The Winna World Cup Hub",
      desc: "Join our $1,000,000 World Cup Promotions",
      bgImg: "https://winna.com/promotions/winna-trillion.webp",
      foregroundImg: "https://winna.com/promotions/drops-and-wins.webp",
      actionText: "Read More",
      actionLink: "/worldcup",
    },
    {
      tag: "Exclusive Slot",
      title: "Winna Trillion",
      desc: "Earn a raffle ticket for every $1,000 wagered to win $10,000",
      bgImg: "https://winna.com/promotions/winna-trillion.webp",
      foregroundImg: "https://winna.com/promotions/winna-trillion.webp",
      actionText: "Play Now",
      actionLink: "/play",
      secondaryActionText: "Read More",
      secondaryActionLink: "/read-more",
    },
    {
      tag: "Pragmatic Play",
      title: "Drops & Wins",
      desc: "Win $100,000 in Weekly Prizes on Pragmatic Slots",
      bgImg: "https://winna.com/promotions/drops-and-wins.webp",
      foregroundImg: "https://winna.com/promotions/world-cup-hub.webp",
      actionText: "Play Now",
      actionLink: "/casino/provider/pragmatic",
      secondaryActionText: "Read More",
      secondaryActionLink: "/promotions/drops-and-wins",
    },
    {
      tag: "Races",
      title: "$500k Monthly Races",
      desc: "Race for $10,000 daily and $50,000 weekly",
      bgImg: "/promotions/500k-races-bg.webp",
      foregroundImg: "https://winna.com/promotions/winna-trillion.webp",
      actionText: "Compete Now",
      actionLink: "/races/daily",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 ">
      {/* Slider Layout */}
      <div
        className="@container flex snap-x snap-mandatory gap-[var(--pb-gap)] overflow-x-auto scroll-smooth lg:max-w-full lg:snap-none lg:overflow-x-hidden react-use-css-o"
        style={
          {
            "--pb-b-closed-width-lg": "196.67px",
            "--pb-gap": "1rem",
            "--pb-padding-x-lg": "1.25rem",
          } as React.CSSProperties
        }
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative min-w-full cursor-pointer snap-start overflow-hidden rounded-lg bg-[#03121A] px-3 pb-4 pt-2 lg:min-w-[var(--pb-b-closed-width-lg)] lg:rounded-xl lg:px-[var(--pb-padding-x-lg)] lg:py-[30px] lg:transition-all lg:duration-500 ${
                isActive
                  ? "lg:grow lg:w-auto"
                  : "lg:w-[var(--pb-b-closed-width-lg)] lg:bg-body-level-1/70"
              }`}
            >
              <img
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center lg:transition-opacity lg:duration-500 ${
                  isActive ? "opacity-[0.08]" : "opacity-[0.08] lg:opacity-0"
                }`}
                fetchPriority={isActive ? "high" : "low"}
                height="196.67"
                loading={isActive ? "eager" : "lazy"}
                src={slide.bgImg}
                width="580"
              />

              <img
                alt=""
                className={`pointer-events-none absolute -right-[55px] top-0 h-full min-w-min select-none object-contain object-right transition-all duration-500 xs:-right-[12px] sm:right-0 ${
                  isActive
                    ? "lg:translate-x-0 lg:opacity-100"
                    : "lg:translate-x-[87.33px] lg:opacity-30"
                }`}
                fetchPriority={isActive ? "high" : "low"}
                height="196.67"
                loading={isActive ? "eager" : "lazy"}
                src={slide.foregroundImg}
                width="196.67"
              />

              <h5
                className={`absolute top-[62px] w-[130px] text-18 font-semibold uppercase !leading-none text-white transition-all duration-[400ms] ${
                  isActive
                    ? "-translate-x-[30%] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <span className="line-clamp-2 lg:max-w-[334px]">
                  {/* {slide.title} */}
                </span>
              </h5>

              <div className="relative">
                <div
                  className={`box-content h-[16px] whitespace-nowrap text-12 !leading-[16px] text-typography-secondary transition-all duration-500 lg:pt-[8px] ${
                    isActive
                      ? "lg:translate-y-0 lg:text-14"
                      : "lg:translate-y-[-15px]"
                  }`}
                ></div>

                <div
                  className={`flex h-[101px] w-[70%] origin-top flex-col justify-center space-y-3 transition-all lg:h-[136px] lg:w-[26cqw] lg:max-w-[390px] lg:space-y-4 ${
                    isActive
                      ? "delay-[100ms] duration-[400ms] lg:translate-x-0 lg:opacity-100"
                      : "duration-200 lg:translate-x-[30%] lg:opacity-0"
                  }`}
                >
                  <h5 className="line-clamp-1 text-24 font-semibold uppercase !leading-none text-white transition-all duration-500 lg:text-32 lg:line-clamp-2">
                    <span className="line-clamp-2 lg:max-w-[334px]">
                      {slide.title}
                    </span>
                  </h5>
                  <p className="text-typography-light line-clamp-2 origin-left text-13 lg:text-14">
                    <span className="line-clamp-2 lg:max-w-[334px]">
                      {slide.desc}
                    </span>
                  </p>
                </div>

                <div
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    isActive
                      ? "lg:translate-y-0 lg:opacity-100"
                      : "lg:translate-y-[15px] lg:opacity-0 pointer-events-none"
                  }`}
                >
                  <a
                    className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 text-white transition-colors gap-1 font-medium px-4 bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-pressed disabled:opacity-50 truncate"
                    href={slide.actionLink}
                  >
                    {slide.actionText}
                  </a>
                  {slide.secondaryActionText && (
                    <a
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 text-white transition-colors gap-1 font-medium px-4 bg-transparent border-accent-blue border hover:border-accent-blue-hover active:text-accent-blue disabled:text-white disabled:border-accent-blue disabled:opacity-50 disabled:hover:bg-transparent truncate"
                      href={slide.secondaryActionLink}
                    >
                      {slide.secondaryActionText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Movement Navigation Indicators */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {slides.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-accent-blue"
                  : "w-4 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
