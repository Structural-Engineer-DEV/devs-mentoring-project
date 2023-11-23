import React from "react";

import Product from "./Product";

const NewestProducts = ({ products, buttonText }) => {
  return (
    <>
      {products.map((product, i) => (
        <Product
          key={product.id}
          product={product}
          buttonText={buttonText}
          leftSided={(i + 1) % 2}
          // leftSided={true}
        />
      ))}
    </>
  );
};

export default NewestProducts;
