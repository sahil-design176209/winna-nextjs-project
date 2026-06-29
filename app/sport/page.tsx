import Popular from "./Popular";
import Upcoming from "./Upcoming";
import LiveSport from "./LiveSport";

import HotComboSection from "./HotComboSection" ;
import MobileBanner from "../components/Mobilebanner";
export default function sport() {
  return (
    <div className="layout-container mx-auto mt-2 h-full w-full pb-5 text-white md:mt-5 lg:pb-12">
      <MobileBanner />
      <Popular />
      <HotComboSection/>
      <LiveSport />
      <Upcoming/>
    </div>
  );
}