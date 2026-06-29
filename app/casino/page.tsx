import Casino from "../../app/casino/casino";
import MobileCainoCategory from "../../app/casino/MobileCainoCategory";

export default function casino() {
    return (
        <div className="layout-container mx-auto h-full w-full pb-5 text-white lg:pb-12">
          <MobileCainoCategory/>
            <Casino />
        </div>
    );
}