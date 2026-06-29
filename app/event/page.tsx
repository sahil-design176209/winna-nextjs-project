import SportsDropdown from "../components/SportEventDropdown";
import LiveMatchCarousel from "../components/LiveMatchCarousel"
import EventComponent from "../event/EventComponent"
export default function sport() {
    return (
        <div className="layout-container mx-auto mt-2 h-full w-full pb-5 text-white md:mt-5 lg:pb-12">
            <div className="flex items-center justify-between w-full gap-5 mb-4">
                <SportsDropdown />
                <LiveMatchCarousel /></div>
            <EventComponent />
        </div>
    );
}