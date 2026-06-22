import Image from "next/image";
import TabsComponent from "./components/TabsComponent";
import RecentItems from "./components/RecentItems";
import WinnaOriginals from "./components/WinnaOriginals.jsx";
import Providers from "./components/Providers";
import Slots from "./components/Slots";
import TableGames from "./components/TableGames";
import MyBets from ".//components/MyBets";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <div className="layout-container mx-auto mt-2.5 h-full w-full pb-5 text-white md:mt-5 lg:pb-12">
        <Banner />
        <TabsComponent />
        <RecentItems />
        <WinnaOriginals />
        <Providers />
        <Slots />
        <TableGames />
        <MyBets />
      </div>
    </>
  );
}
