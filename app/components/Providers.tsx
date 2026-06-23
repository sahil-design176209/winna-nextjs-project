"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const Providers = () => {
  return (
    <div>
      <section className="space-y-4 lg:space-y-5 mt-5">
        <header className="flex items-center justify-between gap-2">
          <h4 className="flex items-center gap-2 text-18 font-semibold capitalize text-typography-blue lg:text-20">
            <a
              className="flex gap-2"
              href="/casino/providers"
              data-discover="true"
            >
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
                  stroke-width="0.4"
                  d="M11.997 19c-.28 0-.536-.102-.768-.308l-.103-.095-6.968-8.199a.646.646 0 0 1-.103-.689l.041-.085 2.46-4.316.051-.075.082-.085.061-.053.052-.031.03-.011.041-.021.062-.01L7.007 5h9.91a.598.598 0 0 1 .48.244l.052.074 2.46 4.317a.653.653 0 0 1-.02.7l-.062.074-6.98 8.22a1.21 1.21 0 0 1-.85.371ZM9.743 8.012a1.003 1.003 0 0 0-.782-.12 1.01 1.01 0 0 0-.364.18c-.109.084-.2.19-.268.311l-.492.86v.01l-.052.106a1.094 1.094 0 0 0 .175 1.167l1.64 1.888v.01l.081.075v.01c.19.17.434.262.686.258.251-.004.492-.103.677-.28h.01l.072-.084.01-.01c.168-.198.258-.453.254-.715a1.08 1.08 0 0 0-.274-.707L9.989 9.667l.102-.18v-.011l.052-.096c.105-.242.121-.515.046-.77a1.088 1.088 0 0 0-.456-.608l.01.01Z"
                ></path>
              </svg>
              Providers
            </a>
          </h4>
          <a
            className="flex h-8 items-center justify-center rounded-md bg-body-level-3 px-3 text-14 font-medium text-white"
            href="/casino/providers"
            data-discover="true"
          >
            See All
          </a>
        </header>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={6}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            className="-mt-2 providers-sliders pt-2"
            breakpoints={{
              640: {
                spaceBetween: 6,
              },
              1024: {
                spaceBetween: 12,
              },
            }}
          >
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] min-w-[110px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[140px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/pragmatic"
              >
                ...
              </a>
            </SwiperSlide>

            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>
            <SwiperSlide className="max-w-[170px]">
              <a
                className="flex h-[61.23px] flex-shrink-0 items-center justify-center rounded-md bg-body-level-2 text-typography-secondary sm:w-[105px] lg:h-[80px] lg:w-[167px]"
                href="/casino/provider/hacksaw"
              >
                ...
              </a>
            </SwiperSlide>

            {/* more slides */}
          </Swiper>
          <button
            className="absolute prev top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-transparent text-typography-secondary transition-colors hover:bg-body-level-3 hover:text-accent-blue active:bg-body-level-0 active:text-typography-secondary disabled:bg-transparent disabled:text-body-level-3 lg:flex -left-1 -translate-x-full"
            data-direction={-1}
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.785 9.34901C20.8537 9.27268 20.9074 9.18288 20.943 9.08476C20.9786 8.98663 20.9955 8.8821 20.9927 8.77712C20.9899 8.67214 20.9674 8.56877 20.9265 8.47292C20.8857 8.37707 20.8272 8.2906 20.7546 8.21847C20.6819 8.14634 20.5964 8.08995 20.503 8.05252C20.4096 8.01509 20.31 7.99735 20.2101 8.00032C20.1101 8.00329 20.0117 8.02691 19.9205 8.06983C19.8292 8.11274 19.7469 8.17412 19.6782 8.25045L13.2081 15.4462C13.0744 15.5947 13 15.7912 13 15.9955C13 16.1998 13.0744 16.3963 13.2081 16.5448L19.6782 23.7414C19.7465 23.8194 19.8287 23.8824 19.9203 23.9267C20.0119 23.971 20.111 23.9957 20.2118 23.9995C20.3126 24.0033 20.413 23.9859 20.5074 23.9486C20.6017 23.9112 20.6881 23.8545 20.7614 23.7818C20.8347 23.7091 20.8936 23.6218 20.9345 23.525C20.9754 23.4282 20.9976 23.3238 20.9998 23.2179C21.002 23.112 20.9842 23.0067 20.9473 22.9081C20.9104 22.8095 20.8552 22.7196 20.785 22.6436L14.8081 15.9955L20.785 9.34901Z"
                fill="currentColor"
              />
              <path
                d="M16.785 9.34901C16.8537 9.27268 16.9074 9.18288 16.943 9.08476C16.9786 8.98663 16.9955 8.8821 16.9927 8.77712C16.9899 8.67214 16.9674 8.56877 16.9265 8.47292C16.8857 8.37707 16.8272 8.2906 16.7546 8.21847C16.6819 8.14634 16.5964 8.08995 16.503 8.05252C16.4096 8.01509 16.31 7.99735 16.2101 8.00032C16.1101 8.00329 16.0117 8.02691 15.9205 8.06983C15.8292 8.11274 15.7469 8.17412 15.6782 8.25045L9.20807 15.4462C9.07445 15.5947 9 15.7912 9 15.9955C9 16.1998 9.07445 16.3963 9.20807 16.5448L15.6782 23.7414C15.7465 23.8194 15.8287 23.8824 15.9203 23.9267C16.0119 23.971 16.111 23.9957 16.2118 23.9995C16.3126 24.0033 16.413 23.9859 16.5074 23.9486C16.6017 23.9112 16.6881 23.8545 16.7614 23.7818C16.8347 23.7091 16.8936 23.6218 16.9345 23.525C16.9754 23.4282 16.9976 23.3238 16.9998 23.2179C17.002 23.112 16.9842 23.0067 16.9473 22.9081C16.9104 22.8095 16.8552 22.7196 16.785 22.6436L10.8081 15.9955L16.785 9.34901Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className="absolute next  top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-transparent text-typography-secondary transition-colors hover:bg-body-level-3 hover:text-accent-blue active:bg-body-level-0 active:text-typography-secondary disabled:bg-transparent disabled:text-body-level-3 lg:flex -right-1 translate-x-full"
            data-direction={1}
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M20.785 9.34901C20.8537 9.27268 20.9074 9.18288 20.943 9.08476C20.9786 8.98663 20.9955 8.8821 20.9927 8.77712C20.9899 8.67214 20.9674 8.56877 20.9265 8.47292C20.8857 8.37707 20.8272 8.2906 20.7546 8.21847C20.6819 8.14634 20.5964 8.08995 20.503 8.05252C20.4096 8.01509 20.31 7.99735 20.2101 8.00032C20.1101 8.00329 20.0117 8.02691 19.9205 8.06983C19.8292 8.11274 19.7469 8.17412 19.6782 8.25045L13.2081 15.4462C13.0744 15.5947 13 15.7912 13 15.9955C13 16.1998 13.0744 16.3963 13.2081 16.5448L19.6782 23.7414C19.7465 23.8194 19.8287 23.8824 19.9203 23.9267C20.0119 23.971 20.111 23.9957 20.2118 23.9995C20.3126 24.0033 20.413 23.9859 20.5074 23.9486C20.6017 23.9112 20.6881 23.8545 20.7614 23.7818C20.8347 23.7091 20.8936 23.6218 20.9345 23.525C20.9754 23.4282 20.9976 23.3238 20.9998 23.2179C21.002 23.112 20.9842 23.0067 20.9473 22.9081C20.9104 22.8095 20.8552 22.7196 20.785 22.6436L14.8081 15.9955L20.785 9.34901Z"
                fill="currentColor"
              />
              <path
                d="M16.785 9.34901C16.8537 9.27268 16.9074 9.18288 16.943 9.08476C16.9786 8.98663 16.9955 8.8821 16.9927 8.77712C16.9899 8.67214 16.9674 8.56877 16.9265 8.47292C16.8857 8.37707 16.8272 8.2906 16.7546 8.21847C16.6819 8.14634 16.5964 8.08995 16.503 8.05252C16.4096 8.01509 16.31 7.99735 16.2101 8.00032C16.1101 8.00329 16.0117 8.02691 15.9205 8.06983C15.8292 8.11274 15.7469 8.17412 15.6782 8.25045L9.20807 15.4462C9.07445 15.5947 9 15.7912 9 15.9955C9 16.1998 9.07445 16.3963 9.20807 16.5448L15.6782 23.7414C15.7465 23.8194 15.8287 23.8824 15.9203 23.9267C16.0119 23.971 16.111 23.9957 16.2118 23.9995C16.3126 24.0033 16.413 23.9859 16.5074 23.9486C16.6017 23.9112 16.6881 23.8545 16.7614 23.7818C16.8347 23.7091 16.8936 23.6218 16.9345 23.525C16.9754 23.4282 16.9976 23.3238 16.9998 23.2179C17.002 23.112 16.9842 23.0067 16.9473 22.9081C16.9104 22.8095 16.8552 22.7196 16.785 22.6436L10.8081 15.9955L16.785 9.34901Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Providers;
