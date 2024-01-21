import React, { useContext } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsFilters from "./ProductsFilters";
import { ProductsContext } from "./ProductsListing";

const ProductsWall = () => {
  const { setNumOfProducts, sortBy } = useContext(ProductsContext);
  return (
    <div className="flex justify-between w-full items-start">
      <ProductsFilters />
      <ProductsGrid />
    </div>
  );
};

export default ProductsWall;
