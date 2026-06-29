"use client";
import React, { useEffect, useRef } from "react";
import WinnaLogo from "../../public/images/logo-winna.svg";
import Image from "next/image";
import FooterMobile from "./FooterMobile";
import FooterMenu from "./FooterMenu";
import Sponsors from "./Sponsors";
const Footer = () => {
  const marqueeRefs = useRef<HTMLUListElement[]>([]);

  const setMarqueeRef = (el: HTMLUListElement | null) => {
    if (el && !marqueeRefs.current.includes(el)) {
      marqueeRefs.current.push(el);
    }
  };

  useEffect(() => {
    marqueeRefs.current.forEach((ul) => {
      if (!ul.dataset.duplicated) {
        const items = Array.from(ul.children);
        items.forEach((child) => {
          ul.appendChild(child.cloneNode(true));
        });
        ul.dataset.duplicated = "true";
      }
    });
  }, []);

  return (
    <>
      <footer className="bg-body-level-1 border-t border-body-level-3 px-2.5 ">
        <div className="layout-container py-6 lg:py-10 w-full max-w-[1312px] mx-auto">
          <FooterMobile />
          <FooterMenu />
          <section className="mb-6 space-y-3">
            <Sponsors />
          </section>
          <div className="mb-10 flex flex-col justify-stretch gap-4 lg:flex-row">
            <div className="flex flex-1 items-center justify-between gap-4 whitespace-nowrap rounded-lg bg-body-level-3 px-3 py-3 text-13 text-white lg:px-6">
              <a
                className="cursor-pointer transition-colors hover:text-accent-blue"
                href="https://help.winna.com/en/articles/12081182-our-gaming-license-and-regulatory-information"
                target="_blank"
              >
                Licensed in Canada
              </a>
              <div className="flex items-center gap-2.5">
                <svg
                  width={29}
                  height={28}
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 lg:size-8"
                >
                  <g clipPath="url(#clip0_3665_3514)">
                    <path
                      d="M14.6666 29.9688C23.4859 29.9688 30.6354 22.8193 30.6354 14C30.6354 5.1807 23.4859 -1.96875 14.6666 -1.96875C5.84733 -1.96875 -1.30212 5.1807 -1.30212 14C-1.30212 22.8193 5.84733 29.9688 14.6666 29.9688Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M30.6354 13.9999C30.6354 7.66896 26.951 2.19867 21.6095 -0.384277V28.3841C26.951 25.8012 30.6354 20.3309 30.6354 13.9999ZM-1.30212 13.9999C-1.30212 20.3309 2.38223 25.8012 7.72371 28.3842V-0.384277C2.38223 2.19867 -1.30212 7.66896 -1.30212 13.9999ZM17.4438 16.0828L20.2209 14.6942L18.8324 13.9999V12.6114L16.0552 13.9999L17.4438 11.2228H16.0552L14.6666 9.1399L13.278 11.2228H11.8894L13.278 13.9999L10.5008 12.6114V13.9999L9.11231 14.6942L11.8894 16.0828L11.1952 17.4714H13.9724V19.5543H15.3609V17.4714H18.1381L17.4438 16.0828Z"
                      fill="#D80027"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3665_3514">
                      <rect
                        x="0.666626"
                        width={28}
                        height={28}
                        rx={14}
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  id="dlag-f1afbc19-1da5-4436-bba6-f5991e549a81"
                  data-dlag-seal-id="f1afbc19-1da5-4436-bba6-f5991e549a81"
                  data-dlag-image-size={128}
                  data-dlag-image-type="basic-light-small"
                  className="-my-[4px] size-8 empty:hidden"
                >
                  <div
                    style={{
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: 128,
                      minWidth: 32,
                      backgroundImage:
                        "url(https://f1afbc19-1da5-4436-bba6-f5991e549a81.seals.dlagglobal.com/54f396e0-b046-49b1-9cb3-0c69281d7ea9-beacon.png)",
                    }}
                  >
                    <a
                      target="_blank"
                      rel="nonoopener"
                      href="https://validate.thetgc.ca/validate?domain=winna.com&seal_id=e69f1911616f331fd05b6115028a4d5dc0615a84ef85eb0e2b43b60118fe6e4b9fb3dcbc8d08f8e15487c473f7edb938&stamp=b3dcb4b3375d08f55e3f594b0c5a3e4d"
                    >
                      <img
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                        src="https://f1afbc19-1da5-4436-bba6-f5991e549a81.seals.dlagglobal.com/sealassets/b3dcb4b3375d08f55e3f594b0c5a3e4d-winna.com-e69f1911616f331fd05b6115028a4d5dc0615a84ef85eb0e2b43b60118fe6e4b9fb3dcbc8d08f8e15487c473f7edb938-c2VhbC5wbmc%3D?status=valid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-between gap-4 whitespace-nowrap rounded-lg bg-body-level-3 px-3 py-3 text-13 text-white lg:px-6">
              <span className="cursor-pointer transition-colors hover:text-accent-blue">
                Provably Fair
              </span>
              <svg
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 lg:size-8"
              >
                <path
                  d="M16.3418 2.47314C16.9002 2.90058 17.7216 3.45836 18.8066 4.01221C20.7956 5.02738 23.6623 6.02156 27.3965 6.18604L28.3535 12.5376V12.5386C28.7536 15.1905 28.3939 17.8993 27.3242 20.3394L27.1006 20.8237C25.9364 23.2264 24.1206 25.2274 21.8789 26.5923L21.4248 26.856L16.3418 29.6831L11.2588 26.856C8.96141 25.5769 7.07423 23.6472 5.82422 21.2993L5.58301 20.8237C4.41877 18.4208 3.96061 15.7272 4.25977 13.0688L4.33008 12.5386V12.5376L5.28613 6.18604C9.02076 6.02169 11.8879 5.02747 13.877 4.01221C14.962 3.45836 15.7834 2.90058 16.3418 2.47314Z"
                  stroke="white"
                  strokeWidth="2.5"
                />
                <path
                  d="M14.5978 21.0788L22.6873 12.8207C22.933 12.5612 23.0688 12.2135 23.0657 11.8527C23.0627 11.4918 22.9209 11.1465 22.6709 10.8913C22.421 10.6362 22.0828 10.4914 21.7293 10.4883C21.3757 10.4851 21.0352 10.6239 20.7809 10.8746L13.6446 18.1596L11.9013 16.3799C11.7769 16.2485 11.6281 16.1437 11.4637 16.0715C11.2992 15.9994 11.1222 15.9615 10.9432 15.9598C10.7642 15.9583 10.5867 15.9931 10.421 16.0623C10.2553 16.1315 10.1047 16.2337 9.97815 16.3629C9.85156 16.4922 9.75145 16.6459 9.68366 16.8149C9.61586 16.9841 9.58174 17.1654 9.5833 17.3481C9.58486 17.5308 9.62205 17.7115 9.69271 17.8794C9.76338 18.0473 9.86609 18.1992 9.99486 18.3262L12.6914 21.0788C12.9442 21.3369 13.287 21.4818 13.6446 21.4818C14.0021 21.4818 14.345 21.3369 14.5978 21.0788Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-1 items-center justify-between gap-4 whitespace-nowrap rounded-lg bg-body-level-3 px-3 py-3 text-13 text-white lg:px-6">
              <a
                className="cursor-pointer transition-colors hover:text-accent-blue"
                href="/rg"
                data-discover="true"
              >
                Responsible Gambling
              </a>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 lg:size-8"
              >
                <g clipPath="url(#clip0_3665_3523)">
                  <path
                    d="M8.79162 22.7119V12.6593C8.17318 12.9999 6.99229 13.3323 6.31641 13.4126V11.5573C7.4746 11.3184 8.72926 10.6091 9.52591 9.78809H11.2955V22.7119H8.79162Z"
                    fill="white"
                  />
                  <path
                    d="M16.7085 13.2206C16.7085 14.1668 17.3645 14.8638 18.7155 14.8638C20.0111 14.8638 20.6672 14.3215 20.6672 13.2442C20.6672 12.2156 19.9913 11.4932 18.6898 11.4932C17.3388 11.4932 16.7085 12.1413 16.7085 13.2206ZM21.0355 18.9166C21.0355 17.5162 20.0884 16.8347 18.664 16.8347C17.0772 16.8347 16.3004 17.7023 16.3004 18.9029C16.3004 20.1506 17.2218 21.0239 18.6999 21.0239C20.0608 21.0239 21.0355 20.3503 21.0355 18.9166ZM13.8125 19.0245C13.8125 17.318 15.0037 16.2951 16.0243 15.8639C14.9759 15.272 14.3456 14.4571 14.3456 13.1557C14.3456 11.0332 15.8981 9.58301 18.7492 9.58301C21.3544 9.58301 23.03 10.9782 23.03 13.1225C23.03 14.5728 22.2628 15.3582 21.3156 15.7423C22.3537 16.1048 23.5096 17.2333 23.5096 18.944C23.5096 21.5369 21.4337 22.9478 18.5489 22.9478C15.93 22.9478 13.8125 21.5233 13.8125 19.0245Z"
                    fill="white"
                  />
                  <path
                    d="M26.957 12.4395V4.90918H29.2565V12.4395H26.957Z"
                    fill="white"
                  />
                  <path
                    d="M24.2988 9.81135V7.53809H31.916V9.81135H24.2988Z"
                    fill="white"
                  />
                  <path
                    d="M15.6944 31.5152C7.0405 31.5152 0 24.5552 0 16.0001C0 7.44495 7.0405 0.484863 15.6944 0.484863C19.0576 0.484863 22.2644 1.52143 24.9685 3.48238L23.4046 5.59023C21.1571 3.9606 18.491 3.09919 15.6944 3.09919C8.49865 3.09919 2.64445 8.88645 2.64445 16.0001C2.64445 23.1136 8.49865 28.9009 15.6944 28.9009C22.8902 28.9009 28.7442 23.1136 28.7442 16.0001C28.7442 15.5982 28.7254 15.1934 28.6884 14.7966L31.3216 14.5559C31.3662 15.0324 31.3888 15.5183 31.3888 16.0001C31.3888 24.5552 24.3483 31.5152 15.6944 31.5152Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3665_3523">
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-center text-[10px] md:text-[12px] text-typography-secondary ">
            <span>Copyright © 2026 </span>
            <a href="https://winna.com/" target="_blank" className="underline">
              Winna.com
            </a>
            <span> | All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
