import React, { forwardRef } from "react";

const ProductCard = forwardRef(({ product }, ref) => {
  return (
    <div
      className={`flex flex-col justify-between cursor-pointer group`}
      ref={ref}
    >
      <img
        src={product.img}
        alt={product.title}
        className="max-h-96 object-contain"
      />
      <span className="my-1 text-lg text-gray-500 group-hover:text-black ">
        {product.title}
      </span>
      <span className="my-1 text-gray-500 group-hover:text-black">
        {product.price} zł
      </span>
      <span className="my-1 text-gray-500 group-hover:text-black">
        Popularity: {product.numOfPurchase}
      </span>
      <span className="my-1 text-gray-500 group-hover:text-black">
        Date month: {product.date.getMonth() + 1}
      </span>
      {product.badge && (
        <span className="absolute text-red-600 m-2 font-semibold">
          {product.badge}
        </span>
      )}
    </div>
  );
});

export default ProductCard;
