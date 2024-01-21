import React from "react";
import { productsDetails } from "../data/data";
import Gallery from "../components/Gallery/Gallery";
import ProductDescription from "../components/Product/ProductDescription";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-20">
      <div className="text-4xl font-semibold">{productsDetails.title}</div>
      <div className="flex flex-row justify-between w-[80%] my-5">
        <Gallery photos={productsDetails.photos} />
        <ProductDescription
          title={productsDetails.title}
          features={productsDetails.features}
        />
      </div>
    </div>
  );
};

export default ProductPage;
