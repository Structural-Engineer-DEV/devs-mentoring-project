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
      <span className="my-1">{product.price} zł</span>
      <span className="my-1">Popularity: {product.numOfPurchase}</span>
      <span className="my-1">Date month: {product.date.getMonth() + 1}</span>
      {product.badge && (
        <span className="absolute text-red-600 m-2 font-semibold">
          {product.badge}
        </span>
      )}
    </div>
  );
});

export default ProductCard;
