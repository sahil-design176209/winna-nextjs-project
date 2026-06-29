import React from "react";
import Image from "next/image";
import WinnaLogo from "../../public/images/logo-winna.svg";
const FooterMenu = () => {
  return (
    <>
      <div className="hidden md:flex my-6 gap-4 lg:flex lg:justify-between lg:border-b lg:border-body-level-3 lg:pb-6">
        <div className="mb-6 lg:mb-0 lg:max-w-[290px]">
          <div className="mb-3 flex items-center justify-center gap-2 lg:mb-4 lg:justify-start">
            <a
              className="block w-20 min-w-[48px] shrink-0 flex-none sm:w-[81px] sm:min-w-[81px]"
              href="/"
              data-discover="true"
            >
              <Image src={WinnaLogo} alt="logo" />
            </a>
          </div>
          <p className="text-center text-10 text-typography-secondary lg:text-left text-12">
            <a href="https://winna.com/" target="_blank" className="underline">
              Winna.com
            </a>{" "}
            is operated by GG Gaming LLC, with its registered address at Sabana
            Business Center, Boulevard Ernesto Rohrmoser, Mata Redonda, San
            José, Costa Rica. GG Gaming LLC is licensed and regulated under the
            Gaming Act by the Tobique Gaming Commission.
          </p>
        </div>
        <section className="space-y-3">
          <h5 className="text-center text-14 font-regular text-white lg:text-left lg:text-16">
            Support
          </h5>
          <ul className="space-y-1">
            <li className="flex items-center h-4">
              <button
                type="button"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                id="custom_launcher"
              >
                Live Support
              </button>
            </li>
            <li className="flex items-center h-4">
              <a
                href="https://help.winna.com/"
                target="_blank"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
              >
                Help Center
              </a>
            </li>
            <li className="flex items-center h-4">
              <button
                type="button"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
              >
                Report a Bug
              </button>
            </li>
            <li className="flex items-center h-4">
              <button
                type="button"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
              >
                Business Contact
              </button>
            </li>
            <li className="flex items-center h-4">
              <button
                type="button"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
              >
                Complaints
              </button>
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h5 className="text-center text-14 font-regular text-white lg:text-left lg:text-16">
            Policy
          </h5>
          <ul className="space-y-1">
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/tos"
                data-discover="true"
              >
                Terms of Service
              </a>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/privacy"
                data-discover="true"
              >
                Privacy Policy
              </a>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/rg"
                data-discover="true"
              >
                Responsible Gambling
              </a>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/sports-terms"
                data-discover="true"
              >
                Sports Terms
              </a>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/bp"
                data-discover="true"
              >
                Bonus Policy
              </a>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/ap"
                data-discover="true"
              >
                Other Policies
              </a>
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h5 className="text-center text-14 font-regular text-white lg:text-left lg:text-16">
            Platform
          </h5>
          <ul className="space-y-1">
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/provably-fair"
                data-discover="true"
              >
                Provably Fair
              </a>
            </li>
            <li className="flex items-center h-4">
              <button
                type="button"
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
              >
                Verify Fairness
              </button>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/invite-friends"
                data-discover="true"
              >
                Affiliate Program
              </a>
            </li>
            <li className="flex items-center h-4">
              <button>
                <span className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors">
                  VIP Program
                </span>
              </button>
            </li>
            <li className="flex items-center h-4">
              <a
                className="whitespace-nowrap text-12 text-typography-secondary hover:text-accent-blue transition-colors"
                href="/about-us"
                data-discover="true"
              >
                About Us
              </a>
            </li>
          </ul>
        </section>
        <div className="flex w-full flex-col items-center gap-6 lg:w-auto lg:items-start">
          <section className="space-y-3 mt-6 lg:mt-0">
            <h5 className="text-center text-14 font-regular text-white lg:text-left lg:text-16">
              Join Our Community
            </h5>
            <div className="flex justify-center gap-1 lg:justify-start">
              <a
                href="https://t.me/winna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-body-level-4 hover:bg-body-level-3"
              >
                <img
                  alt=""
                  className="size-6"
                  src="data:image/svg+xml,%3csvg%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.34%206.1a1.2%201.2%200%200%201%201.2.16%201.2%201.2%200%200%201%20.44%201.16l-1.8%2011.22a1.57%201.57%200%200%201-2.3%201.16%2046%2046%200%200%201-3.1-1.87c-.54-.36-2.2-1.52-2-2.35.18-.7%202.96-3.36%204.56-4.94.62-.62.34-.98-.4-.41a111%20111%200%200%201-5.75%204.18c-.86.53-1.3.62-1.84.53-.98-.16-1.88-.42-2.62-.73-1-.43-.95-1.83%200-2.24z'%20fill='%23fff'/%3e%3c/svg%3e"
                />
              </a>
              <a
                href="https://www.instagram.com/winna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-body-level-4 hover:bg-body-level-3"
              >
                <img
                  alt=""
                  className="size-6"
                  src="data:image/svg+xml,%3csvg%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.768%2018.5118c-.78-.0355-1.2039-.1654-1.4856-.2752-.3735-.1454-.64-.3186-.9202-.5984s-.4537-.546-.5984-.9195c-.1098-.2816-.2398-.7057-.2752-1.4857-.0388-.8432-.0465-1.0966-.0465-3.2329%200-2.1364.0083-2.389.0465-3.233.0355-.78.1664-1.2032.2752-1.4856.1454-.3735.3186-.64.5984-.9202s.546-.4536.9202-.5984c.2816-.1098.7056-.2398%201.4856-.2752.8433-.0388%201.0966-.0465%203.232-.0465s2.389.0083%203.233.0465c.7799.0355%201.2032.1664%201.4856.2752.3735.1448.64.3186.9202.5984s.453.5467.5984.9202c.1098.2816.2397.7056.2752%201.4856.0388.844.0465%201.0966.0465%203.233%200%202.1363-.0077%202.389-.0465%203.2329-.0355.78-.1661%201.2039-.2752%201.4857-.1454.3735-.3186.64-.5984.9195-.2798.2796-.5467.453-.9202.5984-.2816.1098-.7057.2398-1.4856.2752-.8433.0388-1.0966.0465-3.233.0465s-2.389-.0077-3.232-.0465M12%2016.1079c-2.2688%200-4.1079-1.8391-4.1079-4.1079S9.7312%207.8921%2012%207.8921%2016.1079%209.7312%2016.1079%2012%2014.2688%2016.1079%2012%2016.1079m3.4721-7.8453a.96.96%200%200%201-.1616-.5334.9604.9604%200%200%201%201.4937-.7976.9602.9602%200%200%201%20.1449%201.477.96.96%200%200%201-1.477-.146'%20fill='%23fff'/%3e%3cpath%20d='M9.3338%2012c0-1.4727%201.1935-2.6669%202.6662-2.6669S14.6669%2010.5273%2014.6669%2012%2013.4727%2014.6669%2012%2014.6669%209.3338%2013.4727%209.3338%2012'%20fill='%23fff'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.768%2018.5118c-.78-.0355-1.2039-.1654-1.4856-.2752-.3735-.1454-.64-.3186-.9202-.5984s-.4537-.546-.5984-.9195c-.1098-.2816-.2398-.7057-.2752-1.4857-.0388-.8432-.0465-1.0966-.0465-3.2329%200-2.1364.0083-2.389.0465-3.233.0355-.78.1664-1.2032.2752-1.4856.1454-.3735.3186-.64.5984-.9202s.546-.4536.9202-.5984c.2816-.1098.7056-.2398%201.4856-.2752.8433-.0388%201.0966-.0465%203.232-.0465s2.389.0083%203.233.0465c.7799.0355%201.2032.1664%201.4856.2752.3735.1448.64.3186.9202.5984s.453.5467.5984.9202c.1098.2816.2397.7056.2752%201.4856.0388.844.0465%201.0966.0465%203.233%200%202.1363-.0077%202.389-.0465%203.2329-.0355.78-.1661%201.2039-.2752%201.4857-.1454.3735-.3186.64-.5984.9195-.2798.2796-.5467.453-.9202.5984-.2816.1098-.7057.2398-1.4856.2752-.8433.0388-1.0966.0465-3.233.0465s-2.389-.0077-3.232-.0465M8.7018%204.0484c-.8517.0388-1.4336.1739-1.9419.3716-.5263.2043-.9719.4782-1.4171.9228s-.7185.8908-.9228%201.4171c-.1977.5086-.3328%201.0902-.3716%201.9419C4.009%209.5548%204%209.8275%204%2012s.009%202.4452.0484%203.2982c.0388.8518.1739%201.4333.3716%201.9419.2043.526.4776.9728.9228%201.4171s.8908.718%201.4171.9228c.5092.1977%201.0902.3328%201.9419.3716C9.5552%2019.9903%209.8275%2020%2012%2020s2.4452-.009%203.2982-.0484c.8518-.0388%201.4333-.1739%201.9419-.3716.526-.2048.9719-.4782%201.4171-.9228s.718-.8911.9228-1.4171c.1977-.5086.3334-1.0902.3716-1.9419.0387-.8536.0478-1.1257.0478-3.2982s-.0091-2.4452-.0478-3.2982c-.0388-.8517-.1739-1.4336-.3716-1.9419-.2048-.526-.4782-.9719-.9228-1.4171s-.8911-.7185-1.4165-.9228c-.5092-.1977-1.0908-.3334-1.9418-.3716C14.4459%204.0097%2014.1732%204%2012.0006%204c-2.1725%200-2.4454.009-3.2988.0484'%20fill='%23fff'/%3e%3c/svg%3e"
                />
              </a>
              <a
                href="https://x.com/Winna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-body-level-4 hover:bg-body-level-3"
              >
                <img
                  alt=""
                  className="size-6"
                  src="data:image/svg+xml,%3csvg%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cmask%20id='a'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='4'%20y='5'%20width='15'%20height='15'%3e%3cpath%20d='M4%205h15v15H4z'%20fill='%23fff'/%3e%3c/mask%3e%3cg%20mask='url(%23a)'%3e%3cpath%20d='M15.81%205.7h2.3l-5.02%205.76L19%2019.3h-4.63l-3.63-4.75L6.6%2019.3H4.3l5.37-6.16L4%205.7h4.75l3.27%204.35zm-.8%2012.22h1.27L8.05%207.02H6.68z'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e"
                />
              </a>
              <a
                href="https://discord.gg/winna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-body-level-4 hover:bg-body-level-3"
              >
                <img
                  alt=""
                  className="size-6"
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='24'%20height='24'%3e%3cpath%20fill='%23fff'%20d='M18.942%205.556a16.299%2016.299%200%200%200-4.126-1.297c-.178.321-.385.754-.529%201.097a15.175%2015.175%200%200%200-4.573%200%2011.583%2011.583%200%200%200-.535-1.097%2016.274%2016.274%200%200%200-4.129%201.3c-2.611%203.946-3.319%207.794-2.965%2011.587a16.494%2016.494%200%200%200%205.061%202.593%2012.65%2012.65%200%200%200%201.084-1.785%2010.689%2010.689%200%200%201-1.707-.831c.143-.106.283-.217.418-.331%203.291%201.539%206.866%201.539%2010.118%200%20.137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52%2012.52%200%200%200%201.084%201.785%2016.46%2016.46%200%200%200%205.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678%2014.813c-.988%200-1.798-.922-1.798-2.045s.793-2.047%201.798-2.047%201.815.922%201.798%202.047c.001%201.123-.793%202.045-1.798%202.045zm6.644%200c-.988%200-1.798-.922-1.798-2.045s.793-2.047%201.798-2.047%201.815.922%201.798%202.047c0%201.123-.793%202.045-1.798%202.045z'/%3e%3c/svg%3e"
                />
              </a>
            </div>
          </section>
          <div className="flex w-full flex-col items-center gap-2 lg:w-auto lg:items-start">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="_r_1_"
                className="flex h-10 w-[172px] z-[1] relative items-center justify-between gap-2 rounded-lg bg-body-level-3 py-2 pl-4 pr-2 text-white transition-colors hover:bg-body-level-4"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center overflow-hidden rounded-full">
                    <img
                      className="!size-full object-cover"
                      src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
                      style={{
                        display: "inline-block",
                        width: "1em",
                        height: "1em",
                        verticalAlign: "middle",
                      }}
                    />
                  </span>
                  <span className="whitespace-nowrap text-14 font-normal leading-5">
                    English
                  </span>
                </span>
                <svg
                  className="size-5 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
