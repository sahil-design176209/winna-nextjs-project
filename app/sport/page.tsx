import Popular from "./Popular";
import Upcoming from "./Upcoming";
import LiveSport from "./LiveSport";
import Banner from "../components/Banner";
import HotComboSection from "../sport/HotComboSection" ;
export default function sport() {
  return (
    <div className="layout-container mx-auto mt-2 h-full w-full pb-5 text-white md:mt-5 lg:pb-12">
      <Banner />
      <Popular />
      <HotComboSection/>
      <LiveSport />
      <Upcoming />
    </div>
  );
}