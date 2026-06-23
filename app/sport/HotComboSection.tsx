"use client";

import { useState } from "react";

export default function HotComboSection() {
    const [activeTab, setActiveTab] = useState("hot");


    const combos = [
        {
            sport: "Cricket",
            match: "Mysore Warriors VS Hubli Tigers",
            time: "22 Jun 2026 14:30:00 PM",
        },
        {
            sport: "Cricket",
            match: "Royal Nimar Eagles VS Bhopal Leopards",
            time: "22 Jun 2026 15:00:00 PM",
        },
        {
            sport: "Tennis",
            match: "Naomi Osaka VS Magdalena Frech",
            time: "21 Jun 2026 19:00:00 PM",
        },
        {
            sport: "Tennis",
            match: "N Barrientos VS Denis Yevseyev",
            time: "22 Jun 2026 14:40:00 PM",
        },
    ];

    const HotCombos = () => (
        <div>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xl"><svg width="32" height="32" viewBox="0 0 32 32" fill="#FF2C06" xmlns="http://www.w3.org/2000/svg"><path d="M16 29C10.4444 29 6 24.6667 6 19.25C6 14.9167 8.66667 10.3667 9.77778 8.63333L9.83505 8.54942C10.6067 7.41785 13.6195 3 16 3C16.6667 3 17.1111 3.43333 17.1111 4.08333C17.1111 6.56173 17.9088 8.96235 19.3015 10.9557C19.7375 10.3368 20.076 9.67095 20.2222 8.95825C20.2827 8.6633 20.508 8.43259 20.7903 8.30111C21.3433 7.98498 22.0025 8.09572 22.3333 8.63333C23.8889 11.0167 25 13.6167 25.6667 15.8917C25.8889 17.0833 26 18.275 26 19.25C26 24.6667 21.5556 29 16 29ZM16 26.8333C17.8889 26.8333 19.3333 25.425 19.3333 23.5833C19.3333 23.3262 19.2638 23.0012 19.1797 22.6083C19.1575 22.5047 19.1343 22.3964 19.1111 22.2833C19.0069 21.8259 18.8292 21.3446 18.6012 20.8507C18.5166 20.9348 18.4276 21.0149 18.3343 21.0908L18.3333 21.0917C18.2222 21.3083 17.8889 21.4167 17.6667 21.4167C17.3333 21.4167 17 21.3083 16.7778 21.0917C16.0126 20.1421 15.4651 19.1076 15.1627 18.0148C14.0922 19.3181 12.6667 21.6824 12.6667 23.5833C12.6667 25.425 14.1111 26.8333 16 26.8333Z"></path></svg></span>
                <h2 className="text-white text-lg font-bold">
                    Hot Combos
                </h2>
            </div>

            <div className="space-y-2 bg-body-level-7 p-2 rounded-lg">
                {combos.map((item, index) => (
                    <div
                        key={index}
                        className="bg-body-level-9  rounded-lg p-3 border-r-[3px] border-green"
                    >
                        <div className="flex justify-between items-start gap-2">
                            <span className="text-white  text-sm font-semibold">
                                {item.sport}
                            </span>

                            <span className="text-typography-primary text-[11px] text-right opacity-75 ">
                                {item.time}
                            </span>
                        </div>

                        <p className="text-typography-primary opacity-75  text-xs mt-2">
                            {item.match}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

    const TopEvents = () => (
        <div >
            <div className="flex items-center gap-2 mb-4">
                <span className="text-green-500 text-xl"><svg
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green"
                >
                    <path d="M12.2726 1L12.9248 3.07791L14.9999 3.73008L12.7272 6.00281L11.3547 5.7283L8.58309 8.50006C8.284 8.79913 7.79908 8.79913 7.5 8.50006C7.20091 8.20099 7.20091 7.7161 7.5 7.41703L10.2735 4.64336L9.99992 3.27554L12.2726 1Z" />
                    <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C8.56669 2 9.11503 2.07856 9.63473 2.22539L8.91405 2.94611L9.05484 3.62192L9.05394 3.6241C8.71587 3.54297 8.36295 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 7.63934 12.4576 7.28859 12.3774 6.95247L13.0606 7.09264L13.7763 6.37144C13.9221 6.88931 14 7.43555 14 8Z" />
                    <path d="M8 5C8.15907 5 8.31524 5.01238 8.46761 5.03623L6.86728 6.61504C6.48053 6.94101 6.23483 7.42902 6.23483 7.97442C6.23483 8.95585 7.03044 9.75145 8.01186 9.75145C8.52346 9.75145 8.98456 9.53526 9.3088 9.18925L10.964 7.53402C10.9877 7.68588 11 7.8415 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5Z" />
                </svg></span>

                <h2 className="text-white text-lg font-bold">
                    Top Events
                </h2>
            </div>

            <div className="bg-body-level-7 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between text-xs text-typography-primary/70 mb-8">
                    <div className="flex items-center gap-1">
                        <svg
                            viewBox="0 0 32 32"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                        >
                            <path d="m11.897 18.864 1.24 1.24.035-.037a2.63 2.63 0 0 1 3.035-.492l.22.109a.88.88 0 0 0 1.01-.164l7.783-7.783a3.505 3.505 0 1 0-4.957-4.957l-7.783 7.782a.88.88 0 0 0-.164 1.012l.11.219a2.63 2.63 0 0 1-.493 3.035zm-.62.62L9.801 20.96a2.46 2.46 0 0 1-2.52.594.71.71 0 0 0-.725.172l-.547.546a.876.876 0 0 0 0 1.24l2.48 2.479a.876.876 0 0 0 1.239 0l.546-.547a.71.71 0 0 0 .172-.726 2.46 2.46 0 0 1 .594-2.519l1.476-1.476zm-3.806-8.977a3.067 3.067 0 1 1 0-6.135 3.067 3.067 0 0 1 0 6.135m0-.876a2.191 2.191 0 1 0 0-4.382 2.191 2.191 0 0 0 0 4.382M26.46 5.54a5.26 5.26 0 0 1 0 7.436l-7.783 7.782c-.8.8-2.023.999-3.035.493l-.219-.11a.88.88 0 0 0-1.011.165l-2.132 2.132a.71.71 0 0 0-.172.725c.295.885.065 1.86-.594 2.52l-.547.546a2.63 2.63 0 0 1-3.718 0L4.77 24.75a2.63 2.63 0 0 1 0-3.718l.547-.547a2.46 2.46 0 0 1 2.519-.594.71.71 0 0 0 .725-.172l2.133-2.132a.88.88 0 0 0 .164-1.011l-.11-.22a2.63 2.63 0 0 1 .493-3.034l7.782-7.783a5.26 5.26 0 0 1 7.437 0" />
                        </svg>

                        <span>ICC Women's T20 World Cup</span>
                    </div>

                    <span>Today , 03:00:00 PM</span>
                </div>

                {/* Countdown */}
                <div className="text-center mb-8">
                    <p className="text-xs uppercase text-typography-primary/70 mb-3">
                        Start In
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        {[
                            { value: "00", label: "Days" },
                            { value: "04", label: "Hours" },
                            { value: "19", label: "Mins" },
                            { value: "01", label: "Secs" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center">
                                <div className="text-center">
                                    <div className="text-white text-[20px] font-bold ">
                                        {item.value}
                                    </div>
                                    <div className="text-[10px] uppercase text-typography-primary/60 mt-2 font-bold">
                                        {item.label}
                                    </div>
                                </div>

                                {index !== 3 && (
                                    <span className="text-typography-primary/40 text-2xl mx-3">
                                        :
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-[145px] h-12 bg-body-level-9 rounded-lg flex items-center justify-center text-white font-bold text-[12px]">
                        New Zealand W
                    </div>

                    <div className="w-14 h-12 bg-body-level-9 rounded-lg flex items-center justify-center text-xl font-bold text-white/40">
                        X
                    </div>

                    <div className="w-[145px] h-12 bg-body-level-9 rounded-lg flex items-center justify-center text-white font-bold text-[12px]" >
                        Scotland W
                    </div>
                </div>

                {/* Button */}
                <button className="w-full h-12 rounded-lg bg-accent-blue hover:bg-accent-blue text-white font-semibold transition-colors">
                    Go to Event
                </button>
            </div>
        </div>
    );

    return (
        <section className="w-full">
            {/* Mobile & Tablet Tabs */}
            <div className="xl:hidden">
                <div className="flex bg-[#071B2A] rounded-lg p-1 mb-4">
                    <button
                        onClick={() => setActiveTab("hot")}
                        className={`flex-1 h-10 rounded-md text-sm font-semibold ${activeTab === "hot"
                            ? "bg-accent-blue text-white"
                            : "text-typography-primary"
                            }`}
                    >
                        Hot Combos
                    </button>

                    <button
                        onClick={() => setActiveTab("events")}
                        className={`flex-1 h-10 rounded-md text-sm font-semibold ${activeTab === "events"
                            ? "bg-accent-blue text-white"
                            : "text-typography-primary"
                            }`}
                    >
                        Top Events
                    </button>
                </div>

                <div className="relative overflow-hidden">
                    {activeTab === "hot" ? <HotCombos /> : <TopEvents />}
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden xl:grid xl:grid-cols-2 gap-4">
                <HotCombos />
                <TopEvents />
            </div>
        </section>
    );
}