import Image from "next/image";
import TabsComponent from "./components/TabsComponent";
import RecentItems from "./components/RecentItems";
import WinnaOriginals from "./components/WinnaOriginals";
import Providers from "./components/Providers";
import Slots from "./components/Slots";
import TableGames from "./components/TableGames";
import MyBets from ".//components/MyBets";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <TabsComponent />
      <RecentItems />
      <WinnaOriginals />
      <Providers />
      <Slots />
      <TableGames />
      {/* <MyBets /> */}
    </>
  );
}
