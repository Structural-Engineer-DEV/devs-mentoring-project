import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsFilters from "./ProductsFilters";

const ProductsWall = () => {
  return (
    <div className="flex justify-between w-full items-start">
      <ProductsFilters />
      <ProductsGrid />
    </div>
  );
};

export default ProductsWall;
