import React from "react";
import { ThemeIcons } from "./SvgIcons";

const NoData = () => {
  return (
    <div className="sports-search-svg-area py-[88px] flex flex-col justify-center items-center">
      <div className="svg-block">
        <ThemeIcons.NoDataIcon />
      </div>
      <div className="svg-heading">
        <p>Looking for something special ?</p>
      </div>
    </div>
  );
};

export default NoData;
