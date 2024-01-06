import React from "react";
import ButtonCTA from "../UI/Button/ButtonCTA";
import RevealHorizontal from "../Animations/RevealHorizontal";

const Product = ({ product, buttonText, leftSided }) => {
  return (
    <section className="flex justify-between w-full h-auto items-stretch relative bg-white border-b-2 ">
      <div
        className={`bg-amber-400 h-full w-[30%] absolute z-0  ${
          leftSided ? "left-0" : "right-0"
        }`}
      />

      <div className="flex items-center w-[70%] justify-between z-10 mx-auto">
        <RevealHorizontal
          moveLeft={!leftSided}
          className={`h-80 max-w-md bg-gray-200 flex flex-col justify-between items-center py-10 rounded ${
            leftSided ? "order-first" : "order-last"
          }`}
        >
          <div className="m-4 whitespace-normal text-center text-2xl">
            {product.description}
          </div>
          <ButtonCTA>{buttonText}</ButtonCTA>
        </RevealHorizontal>
        <RevealHorizontal moveLeft={leftSided}>
          <img
            src={product.image}
            alt={product.name}
            className="h-auto max-h-96 w-full object-cover py-4"
          />
        </RevealHorizontal>
      </div>
    </section>
  );
};

export default Product;
