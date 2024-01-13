import React from "react";
import Card from "./Card";

const CardsSection = ({ cardsData }) => {
  return (
    <div className="flex justify-center items-center py-20 bg-gray-300 h-auto w-full">
      {cardsData.map((card) => (
        <Card cardData={card} />
      ))}
    </div>
  );
};

export default CardsSection;
