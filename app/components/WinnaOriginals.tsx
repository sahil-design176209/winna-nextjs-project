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
              d="M15.704 19.55a.384.384 0 0 1-.124.321.418.418 0 0 1-.339.109 8.8 8.8 0 0 1-2.35-.63 1.328 1.328 0 0 1-.458-.32c-.127-.138-.22-.3-.277-.476-.36-1.13-.524-2.032-.761-3.358-.203-1.138-.387-2.23-.55-3.276a34.921 34.921 0 0 0-.762 3.44 37.193 37.193 0 0 0-.444 4.26.385.385 0 0 1-.173.306.422.422 0 0 1-.357.057 14.33 14.33 0 0 1-2.403-.941 1.326 1.326 0 0 1-.423-.333 1.268 1.268 0 0 1-.25-.467c-.352-1.232-.67-2.851-.858-4.478a26.676 26.676 0 0 1-.08-5.302.733.733 0 0 1 .29-.53.796.796 0 0 1 .601-.159l1.242.172c.24.034.456.157.602.342a.868.868 0 0 1 .183.65 22.817 22.817 0 0 0 .208 6.956 59.601 59.601 0 0 1 2.161-7.89c.084-.245.22-.471.4-.663.18-.192.399-.346.644-.452l.01-.005a3.112 3.112 0 0 1 1.09-.237.598.598 0 0 1 .423.16.553.553 0 0 1 .172.403 51.82 51.82 0 0 0 .516 7.824c.224-2.546.757-4.48 1.185-5.733.488-1.428.937-2.256 1.227-2.744.369-.618.788-1.207 1.256-1.76a1.809 1.809 0 0 1 1.102-.613A15.036 15.036 0 0 1 20.694 4c.265 0 .403.303.227.494a19.9 19.9 0 0 0-4.222 7.01 19.345 19.345 0 0 0-.995 8.046Z"
            ></path>
          </svg>
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
