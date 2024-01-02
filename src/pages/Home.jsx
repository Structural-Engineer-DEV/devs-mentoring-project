import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Hero from "../photos/Hero.jpg";
import NewestProducts from "../components/NewestProducts/NewestProducts";
import Tabs from "../components/Tabs/Tabs";
import CardsSection from "../components/CardsSection/CardsSection";
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
    </div>
  );
};

export default Home;
