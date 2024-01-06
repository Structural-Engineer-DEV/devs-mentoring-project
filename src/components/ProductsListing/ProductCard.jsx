import React, { forwardRef } from "react";

const ProductCard = forwardRef(({ product }, ref) => {
  return (
    <div
      className={`flex flex-col justify-between ${
        ref && "border-4 border-black"
      }`}
      ref={ref}
    >
      <img
        src={product.img}
        alt={product.description}
        className="max-h-96 object-contain"
      />
      <span className="my-1 text-lg">{product.description}</span>
      <span className="my-1">{product.price}</span>
    </div>
  );
});

export default ProductCard;
