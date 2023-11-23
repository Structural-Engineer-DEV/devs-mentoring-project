import React from "react";
import ButtonCTA from "../UI/Button/ButtonCTA";
import RevealHorizontal from "../Animations/RevealHorizontal";

const Product = ({ product, buttonText, leftSided }) => {
  return (
    <section className="flex justify-between w-full h-96 items-stretch">
      {leftSided ? (
        <>
          <div className="bg-amber-400 w-[30%]" />
          <RevealHorizontal
            moveLeft={true}
            className="w-[70%] bg-white flex items-center justify-center  border-t-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full py-4"
            />
          </RevealHorizontal>
          <RevealHorizontal
            moveLeft={false}
            className="absolute h-80 w-auto max-w-md bg-gray-200 left-[15%] self-center flex flex-col justify-between items-center py-10 rounded"
          >
            <div className="m-4 whitespace-normal text-center text-2xl">
              {product.description}
            </div>
            <ButtonCTA>{buttonText}</ButtonCTA>
          </RevealHorizontal>
        </>
      ) : (
        <>
          <RevealHorizontal
            moveLeft={false}
            className="w-[70%] bg-white flex items-center justify-center  border-t-2 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full py-4"
            />
          </RevealHorizontal>
          <div className="bg-amber-400 w-[30%]" />

          <RevealHorizontal
            moveLeft={true}
            className="absolute h-80 w-auto max-w-md bg-gray-200 right-[15%] self-center flex flex-col justify-between items-center py-10 rounded"
          >
            <p className="m-4 whitespace-normal text-center text-2xl">
              {product.description}
            </p>
            <ButtonCTA>{buttonText}</ButtonCTA>
          </RevealHorizontal>
        </>
      )}
    </section>
  );
};

export default Product;
