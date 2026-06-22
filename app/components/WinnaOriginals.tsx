"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

const WinnaOriginals = () => {
  return (
    <div>
      <header className="flex items-center justify-between gap-2 mt-5 mb-3">
        <h4 className="text-18 font-semibold text-typography-blue">
          Winna Originals
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

export default WinnaOriginals;
