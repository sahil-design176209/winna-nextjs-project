"use client";

import { useState } from "react";
import { NavIcons } from "../components/SvgIcons";
import SportEvent from "./SportEvent";

export default function Upcoming() {


    return (
        <section className="w-full  py-6">
            {/* Heading */}
            <h3 className="flex items-center gap-2 text-white text-[20px] font-semibold mb-6">
                <span className="text-white text-xl gap-2 flex items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="upcoming-icon" fill="#10abe1"><g id="Property1Upcoming"><g id="Union"><path d="M21.9177 16.9959C21.4434 19.8356 18.9745 22 16 22C12.6863 22 10 19.3137 10 16C10 13.0256 12.1644 10.5566 15.0042 10.0823C15.5489 9.9913 16 10.4478 16 11V16H21C21.5523 16 22.0087 16.4511 21.9177 16.9959Z"></path><path  d="M27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z"></path></g></g></svg> Upcoming
                </span> </h3>
            <SportEvent />

        </section>
    );
}