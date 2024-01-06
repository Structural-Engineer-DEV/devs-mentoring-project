import React, { useEffect, useRef, useState } from "react";
import { productsData } from "../../data/data";
import ProductCard from "./ProductCard";

const num = 4;

const ProductsGrid = () => {
  const [viewedProducts, setViewedProducts] = useState(
    productsData.slice(0, num)
  );

  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && viewedProducts.length < productsData.length) {
        setTimeout(() => {
          setViewedProducts((prev) => [
            ...prev,
            ...productsData.slice(prev.length, prev.length + num),
          ]);
        }, 1000);
      }
    });
    observer.observe(cardRef.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [viewedProducts]);

  return (
    <div className="grid grid-cols-3 gap-10 ml-8">
      {viewedProducts.map((product, index, arr) => (
        <ProductCard
          key={product.id}
          product={product}
          {...(index === arr.length - 1 ? { ref: cardRef } : "")}
          // {...(index === arr.length - 1 ? (ref = { ref }) : "")}
          // Wczesniej tak to robilem, ale teraz nie dziala, dlaczego???
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
