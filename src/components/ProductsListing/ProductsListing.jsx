import React, { createContext, useState } from "react";
import TopBar from "./TopBar";
import ProductsWall from "./ProductsWall";

export const ProductsContext = createContext();

export const sortOptions = {
  popular: "Popularne",
  newest: "Najnowsze",
  cheapest: "Cena: od najniższej",
  highest: "Cena: od najwyższej",
};

const options = Object.values(sortOptions);

const ProductsListing = () => {
  const [activeCategory, setActiveCategory] = useState("Kategoria");
  const [numOfProducts, setNumOfProducts] = useState(123);
  const [sortBy, setSortBy] = useState(null);

  return (
    <ProductsContext.Provider
      value={{
        activeCategory,
        numOfProducts,
        setNumOfProducts,
        numOfProducts,
        setNumOfProducts,
        sortBy,
        setSortBy,
        options,
      }}
    >
      <div className="flex flex-col w-11/12 mx-auto mt-2">
        <TopBar />
        <ProductsWall />
      </div>
    </ProductsContext.Provider>
  );
};

export default ProductsListing;
