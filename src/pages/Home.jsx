import React from "react";
import { Link } from "react-router-dom";

import ButtonCTA from "../components/UI/Button/ButtonCTA";
import CardsSection from "../components/CardsSection/CardsSection";
import HeroSection from "../components/HeroSection/HeroSection";
import NewestProducts from "../components/NewestProducts/NewestProducts";
import Tabs from "../components/Tabs/Tabs";

import { cardsData, products, tabsData } from "../data/data";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <HeroSection />
      <NewestProducts
        products={products.slice(-3)}
        buttonText="Dowiedz się więcej"
      />
      <CardsSection cardsData={cardsData} />
      <Tabs tabsData={tabsData} />
      <div className="text-9xl mb-4">Home</div>
      <Link to="product-page">
        <ButtonCTA>Dowiedz się więcej</ButtonCTA>
      </Link>
      <Link to="product-page">
        <ButtonCTA typeBlue={true}>Dowiedz się więcej</ButtonCTA>
      </Link>
      <Tabs tabsData={tabsData}>
        <Tabs.List />
        <Tabs.Content />
      </Tabs>
    </div>
  );
};

export default Home;
