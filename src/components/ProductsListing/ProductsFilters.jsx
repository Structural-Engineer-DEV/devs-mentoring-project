import React from "react";
import Collapse from "../Collapse/Collapse";
import { collapseData } from "../../data/data";

const ProductsFilters = () => {
  return (
    <div className="max-w-4/12">
      <Collapse collapseData={collapseData} />
    </div>
  );
};

export default ProductsFilters;
