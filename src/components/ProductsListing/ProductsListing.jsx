import React, { useState } from "react";
import TopBar from "./TopBar";
import ProductsWall from "./ProductsWall";

const ProductsListing = () => {
  const [activeCategory, setActiveCategory] = useState("Kategoria");
  const [numOfProducts, setNumOfProducts] = useState(123);
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="flex flex-col w-11/12 mx-auto mt-2">
      <TopBar
        activeCategory={activeCategory}
        numOfProducts={numOfProducts}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductsWall setNumOfProducts={setNumOfProducts} sortBy={sortBy} />
    </div>
  );
};

export default ProductsListing;
