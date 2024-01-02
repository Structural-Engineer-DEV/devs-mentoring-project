import React from "react";
import ButtonCTA from "../UI/Button/ButtonCTA";
import { Link } from "react-router-dom";
import Hero from "../../photos/Hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover w-full h-screen relative"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="bg-black bg-opacity-70 w-[400px] min-h-96  absolute  bottom-24 rounded flex flex-col left-1/2 -translate-x-1/2 items-center">
        <p className="m-4 text-gray-300 text-3xl whitespace-normal text-center">
          "MAIN TEXT MAIN TEXT MAIN TEXT MAIN TEXT MAIN TEXT MAIN TEXT"
        </p>
        <Link to="product-page">
          <ButtonCTA>Dowiedz się więcej</ButtonCTA>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
