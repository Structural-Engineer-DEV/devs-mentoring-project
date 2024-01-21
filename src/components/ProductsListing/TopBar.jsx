import React, { useContext } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { ProductsContext } from "./ProductsListing";

const TopBar = () => {
  const { activeCategory, numOfProducts, sortBy, setSortBy, options } =
    useContext(ProductsContext);
  return (
    <div className="flex justify-between w-full">
      <div className="m-1 text-xl font-semibold">
        {activeCategory} ({numOfProducts})
      </div>
      <Dropdown trait={sortBy} setTrait={setSortBy} options={options}/>
    </div>
  );
};

export default TopBar;
