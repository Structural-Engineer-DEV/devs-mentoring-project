import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsFilters from "./ProductsFilters";

const ProductsWall = ({ setNumOfProducts, sortBy }) => {
  return (
    <div className="flex justify-between w-full items-start">
      <ProductsFilters />
      <ProductsGrid setNumOfProducts={setNumOfProducts} sortBy={sortBy} />
    </div>
  );
};

export default ProductsWall;
