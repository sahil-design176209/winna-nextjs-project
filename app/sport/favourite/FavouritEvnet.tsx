"use client";

import { useState } from "react";
import { NavIcons } from "../../components/SvgIcons";
import SportEvent from "../../sport/SportEvent";

export default function FavouriteEvent() {


    return (
        <section className="w-full  py-6">
            {/* Heading */}
            <h3 className="flex items-center gap-2 text-white text-[24px] font-bold mb-6">
                <span className="text-white text-[24px] gap-2 flex items-center">
                    <svg data-cy="ic-favourites-title" className="sc-xgfwjj-1 hiaOyi jss158" width="32" height="32" viewBox="0 0 32 32" fill="#ffbe03" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M15.0554 4.71739C15.3667 3.82183 16.6333 3.82183 16.9446 4.71739L19.2982 11.4886C19.4356 11.8837 19.8043 12.1516 20.2224 12.1601L27.3896 12.3061C28.3375 12.3254 28.7289 13.53 27.9733 14.1028L22.2609 18.4337C21.9276 18.6864 21.7867 19.1198 21.9078 19.5201L23.9837 26.3816C24.2583 27.2891 23.2336 28.0336 22.4554 27.492L16.5712 23.3975C16.2279 23.1586 15.7721 23.1586 15.4288 23.3975L9.54463 27.492C8.76639 28.0336 7.74174 27.2891 8.01629 26.3816L10.0922 19.5201C10.2133 19.1198 10.0724 18.6864 9.73915 18.4337L4.02666 14.1028C3.27112 13.53 3.6625 12.3254 4.61043 12.3061L11.7776 12.1601C12.1957 12.1516 12.5644 11.8837 12.7018 11.4886L15.0554 4.71739Z"></path>
                    </svg>    Favourites
                </span> </h3>

            <SportEvent />

        </section>
    );
}