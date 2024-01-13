import React from "react";
import ButtonCTA from "../UI/Button/ButtonCTA";

const Card = ({ cardData }) => {
  return (
    <div className="h-96 w-96 flex flex-col justify-start items-start">
      <img
        src={cardData.image}
        alt={cardData.title}
        className="object-cover w-full h-64 self-center object-center p-4"
      />
      <p className="mx-4 mb-2 text-xl">{cardData.title}</p>
      <p className="mx-4 mb-2">{cardData.description}</p>
      <ButtonCTA>{cardData.buttonText}</ButtonCTA>
    </div>
  );
};

export default Card;
