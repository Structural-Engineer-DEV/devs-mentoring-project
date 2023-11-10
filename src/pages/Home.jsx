import React from "react";
import ButtonCTA from "../components/UI/Button/ButtonCTA";
import { Link } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";
import { tabsData } from "../data/data";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start">
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
