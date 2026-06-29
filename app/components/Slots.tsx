"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React from "react";

const games = [
  {
    name: "Dice",
    href: "/game/originals/dice",
    image:
      "https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Keno",
    href: "/game/originals/keno",
    image:
      "https://winna.imgix.net/game-image/1765979929769/KENO%20v1%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Limbo",
    href: "/game/originals/limbo",
    image:
      "https://winna.imgix.net/game-image/1765979896635/LIMBO%20v5%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Blackjack",
    href: "/game/originals/blackjack",
    image:
      "https://winna.imgix.net/game-image/1770982234729/Blackjack%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Plinko",
    href: "/game/originals/plinko",
    image:
      "https://winna.imgix.net/game-image/1765979860581/PLINKO%20v6%20%283%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Mines",
    href: "/game/originals/mines",
    image:
      "https://winna.imgix.net/game-image/1765979887709/MINES%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "HiLo",
    href: "/game/originals/hilo",
    image:
      "https://winna.imgix.net/game-image/1770982246315/HILO%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Coin Climber",
    href: "/game/originals/coin-climber",
    image:
      "https://winna.imgix.net/game-image/1770655865193/COINCLIMBER%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Roulette",
    href: "/game/originals/roulette",
    image:
      "https://winna.imgix.net/game-image/1774995202272/ROULETTE%20v2%20%281%29.png?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Tower",
    href: "/game/originals/tower",
    image:
      "https://winna.imgix.net/game-image/1765979868620/PEPE.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    name: "Wheel",
    href: "/game/originals/wheel",
    image:
      "https://winna.imgix.net/game-image/1765979813843/WHEEL%20v4.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
];

const Slots = () => {
  return (
    <div>
      <header className="flex items-center justify-between gap-2 mt-5 mb-3">
        <h4 className="text-18 font-semibold text-typography-blue flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-6"
          >
            <path
              fill="currentColor"
              stroke="currentColor"

              d="M11.997 19c-.28 0-.536-.102-.768-.308l-.103-.095-6.968-8.199a.646.646 0 0 1-.103-.689l.041-.085 2.46-4.316.051-.075.082-.085.061-.053.052-.031.03-.011.041-.021.062-.01L7.007 5h9.91a.598.598 0 0 1 .48.244l.052.074 2.46 4.317a.653.653 0 0 1-.02.7l-.062.074-6.98 8.22a1.21 1.21 0 0 1-.85.371ZM9.743 8.012a1.003 1.003 0 0 0-.782-.12 1.01 1.01 0 0 0-.364.18c-.109.084-.2.19-.268.311l-.492.86v.01l-.052.106a1.094 1.094 0 0 0 .175 1.167l1.64 1.888v.01l.081.075v.01c.19.17.434.262.686.258.251-.004.492-.103.677-.28h.01l.072-.084.01-.01c.168-.198.258-.453.254-.715a1.08 1.08 0 0 0-.274-.707L9.989 9.667l.102-.18v-.011l.052-.096c.105-.242.121-.515.046-.77a1.088 1.088 0 0 0-.456-.608l.01.01Z"
            ></path>
          </svg>
          Slots
        </h4>

        <a
          href="/casino/categories/originals"
          className="flex h-8 items-center justify-center rounded-md bg-body-level-3 px-3 text-14 font-medium text-white"
        >
          See All
        </a>
      </header>

      <div className="relative">
        {/* Custom Navigation */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          spaceBetween={6}
          slidesPerView={"auto"}
          breakpoints={{
            1024: {
              spaceBetween: 12,
            },
          }}
          className=""
        >
          {games.map((game) => (
            <SwiperSlide
              key={game.name}
              className="!w-[110px] sm:!w-[140px] lg:!w-[167px]"
            >
              <a href={game.href}>
                <div className="group relative flex aspect-[105/142] w-[110px] overflow-hidden transition-transform duration-300 sm:w-[140px] lg:w-[167px] lg:aspect-[167/222] lg:hover:-translate-y-2">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slots;
