import React from "react";
import Sorting from "./Sorting";

const TopBar = ({ activeCategory, numOfProducts }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="m-1 text-xl font-semibold">
        {activeCategory} ({numOfProducts})
      </div>
      <Sorting />
    </div>
  );
};

export default TopBar;
