"use client";

import { useState, type ReactNode } from "react";
import TabsComponent from "./TabsComponent";

type TabKey = "recent" | "favorites";

type Item = {
  id: string;

  href: string;
  image: string;
};

const tabs: { key: TabKey; label: string; icon: ReactNode }[] = [
  {
    key: "recent",
    label: "Recently played",
    icon: (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-6"
      >
        <path d="M16 5.07A8 8 0 1 1 4 12v-.26a8 8 0 0 1 12-6.67M12 7.2a.8.8 0 0 0-.8.8v4a.8.8 0 0 0 .8.8h2.8a.8.8 0 1 0 0-1.6h-2V8a.8.8 0 0 0-.7-.8z" />
      </svg>
    ),
  },
  {
    key: "favorites",
    label: "Favorites",
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
      >
        <path
          d="M19.4117 12.9522L12.2094 20.0138C12.1533 20.0688 12.0779 20.0996 11.9993 20.0996C11.9208 20.0996 11.8454 20.0688 11.7893 20.0138L4.58698 12.9522C3.84617 12.2247 3.33528 11.2956 3.11771 10.2803C2.90014 9.26503 2.98546 8.2082 3.36309 7.24096C3.69641 6.37848 4.25179 5.61944 4.97295 5.04074C5.69412 4.46203 6.55544 4.08424 7.46963 3.94564C9.17732 3.71545 10.7719 4.40423 11.9993 5.88802C13.228 4.40183 14.8223 3.71335 16.5231 3.94114C17.4931 4.09264 18.4019 4.5109 19.1478 5.14918C19.8938 5.78746 20.4476 6.62062 20.7473 7.55554C21.047 8.49046 21.0808 9.4903 20.845 10.4433C20.6091 11.3964 20.1129 12.265 19.4117 12.9522Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const recentItems: Item[] = [
  {
    id: "coin-climber",
    href: "/game/originals/coin-climber",
    image:
      "https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: "starburst",
    href: "/game/originals/starburst",
    image:
      "https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
];

const favoriteItems: Item[] = [
  {
    id: "book-of-dead",

    href: "/game/originals/book-of-dead",
    image:
      "https://winna.fra1.digitaloceanspaces.com/game-image/1770655865193/COINCLIMBER%20%281%29.avif",
  },
  {
    id: "sweet-honey-fruits",

    href: "/game/originals/sweety-honey-fruits",
    image:
      "https://winna.fra1.digitaloceanspaces.com/game-image/1770655865193/COINCLIMBER%20%281%29.avif",
  },
];

const RecentItems = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("recent");
  const items = activeTab === "recent" ? recentItems : favoriteItems;

  return (
    <div>
      <TabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(key) => setActiveTab(key as TabKey)}
      />
      <div className="relative mt-5">
        <section
          className="-mt-2 flex overflow-x-auto overflow-y-hidden scroll-smooth pt-2 gap-[6px]"
          style={{
            scrollSnapType: "x mandatory",
            containerType: "inline-size",
            gap: "clamp(6px, 0.78cqw, 12px)",
          }}
        >
          {items.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center gap-2 py-20 text-14 text-typography-secondary h-[142px] lg:h-[222px]">
              <span>No Games found</span>
              <span>Please use search or filter to find a game</span>
            </div>
          ) : (
            items.map((item, index) => (
              <a
                key={item.id}
                className="flex-shrink-0 snap-start animate-card-reveal"
                href={item.href}
                data-discover="true"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex aspect-[105/142] w-[calc((100vw-2rem)/3)] sm:w-[140px] flex-shrink-0 lg:aspect-[167/222] lg:w-[167px] lg:hover:[transform:translate3d(0,-8px,0)] transition-transform duration-300 group relative cursor-pointer overflow-hidden rounded-xl bg-body-level-1">
                  <img
                    className="absolute inset-0 h-full w-full object-contain opacity-100"
                    loading="eager"
                    src={item.image}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                    <p className="text-14 font-semibold leading-tight"></p>
                  </div>
                </div>
              </a>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default RecentItems;
