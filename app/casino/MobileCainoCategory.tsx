"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { NavIcons } from "../components/SvgIcons";

export default function MobileCainoCategory() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Lobby",
      href: "/casino",
      icon: <NavIcons.LobbyIcon />,
    },
    {
      name: "Virtual",
      href: "/slots",
      icon: <NavIcons.OriginalIcon />,
    },
    {
      name: "Slots",
      href: "/slots",
      icon: <NavIcons.SlotsIcon />,
    },
    {
      name: "Evolution Gaming",
      href: "/slots",
      icon: <NavIcons.TableGamesIcon />,
    },
    {
      name: "Pragmatic Play",
      href: "/slots",
      icon: <NavIcons.LiveCasinoIcon />,
    },
    {
      name: "Hacksaw Gaming",
      href: "/slots",
      icon: <NavIcons.GameShowsIcon />,
    },
  ];

  return (
    <ul className="layout-container flex pb-3 xl:gap-10 w-full max-w-[1312px] mx-auto lg:hidden overflow-x-auto ">
      {menus.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={classNames(
              "flex flex-col items-center gap-2 whitespace-nowrap py-3 text-14 transition-colors hover:text-accent-blue rounded-[8px]",
              pathname === item.href
                ? "text-accent-blue bg-body-level-8 py-0 px-4 text-[12px] lg:text-[14px]" 
                : "text-typography-secondary  py-0 px-4  text-[12px] lg:text-[14px]"
            )}
          >
            {item.icon}
            <span className="text-center">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}