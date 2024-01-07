import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const TopBar = ({ activeCategory, numOfProducts, sortBy, setSortBy }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="m-1 text-xl font-semibold">
        {activeCategory} ({numOfProducts})
      </div>
      <Dropdown trait={sortBy} setTrait={setSortBy} />
    </div>
  );
};

export default TopBar;
