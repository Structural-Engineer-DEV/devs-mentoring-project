import React from "react";
import ButtonCTA from "../UI/Button/ButtonCTA";
import RevealHorizontal from "../Animations/RevealHorizontal";

const Product = ({ product, buttonText, leftSided }) => {
  return (
    <section className="flex justify-between w-full h-96 items-stretch relative">
      <div
        className={`bg-amber-400 w-[30%] ${
          leftSided ? "order-first" : "order-last"
        }`}
      />
      <div className="bg-white w-[70%] border-t-2" />
      <div className="flex justify-between absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] h-[90%]">
        <RevealHorizontal
          moveLeft={!leftSided}
          className={`h-80 w-auto max-w-md bg-gray-200 self-center flex flex-col justify-between items-center py-10 rounded ${
            leftSided ? "order-first" : "order-last"
          }`}
        >
          <div className="m-4 whitespace-normal text-center text-2xl">
            {product.description}
          </div>
          <ButtonCTA>{buttonText}</ButtonCTA>
        </RevealHorizontal>
        <RevealHorizontal moveLeft={leftSided}>
          <img src={product.image} alt={product.name} className="h-full py-4" />
        </RevealHorizontal>
      </div>
    </section>
  );
};

export default Product;
