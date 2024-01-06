import React, { useState } from "react";
import TopBar from "./TopBar";
import ProductsWall from "./ProductsWall";

const ProductsListing = () => {
  const [activeCategory, setActiveCategory] = useState("Kategoria");
  const [numOfProducts, setNumOfProducts] = useState(123);
  return (
    <div className="flex flex-col w-11/12 mx-auto mt-2">
      <TopBar activeCategory={activeCategory} numOfProducts={numOfProducts} />
      <ProductsWall />
    </div>
  );
};

export default ProductsListing;
