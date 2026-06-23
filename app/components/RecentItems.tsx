import React from "react";

const RecentItems = () => {
  return (
    <div>
      <div className="relative mt-5">
        <section
          className="-mt-2 flex overflow-x-auto overflow-y-hidden scroll-smooth pt-2 gap-[6px]"
          style={{
            scrollSnapType: "x mandatory",
            containerType: "inline-size",
            gap: "clamp(6px, 0.78cqw, 12px)",
          }}
        >
          <div className="hidden">
            <section className="flex w-full flex-col items-center justify-center gap-2 py-20 text-14 text-typography-secondary h-[142px] lg:h-[222px]">
              <span>No Games found</span>
              <span>Please use search or filter to find a game</span>
            </section>
          </div>
          <div className="contents">
            <div className="contents" aria-hidden="false">
              <a
                className="flex-shrink-0 snap-start animate-card-reveal"
                href="/game/originals/coin-climber"
                data-discover="true"
                style={{ animationDelay: "0ms" }}
              >
                <div className="flex aspect-[105/142] w-[calc((100vw-2rem)/3)] sm:w-[140px] flex-shrink-0 lg:aspect-[167/222] lg:w-[167px] lg:hover:[transform:translate3d(0,-8px,0)] transition-transform duration-300 group relative cursor-pointer overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-contain opacity-100"
                    alt="CoinClimber"
                    loading="eager"
                    src="https://winna.fra1.digitaloceanspaces.com/game-image/1770655865193/COINCLIMBER%20%281%29.avif"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* <button
          className="absolute top-1/2 hidden lg:flex size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-transparent text-typography-secondary transition-colors hover:bg-body-level-3 hover:text-accent-blue active:bg-body-level-0 active:text-typography-secondary disabled:bg-transparent disabled:text-body-level-3 -left-1 -translate-x-full"
          data-direction={-1}
        >
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className=""
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
          className="absolute top-1/2 hidden lg:flex size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-transparent text-typography-secondary transition-colors hover:bg-body-level-3 hover:text-accent-blue active:bg-body-level-0 active:text-typography-secondary disabled:bg-transparent disabled:text-body-level-3 -right-1 translate-x-full"
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
        </button> */}
      </div>
    </div>
  );
};

export default RecentItems;
