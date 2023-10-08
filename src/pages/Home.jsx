import React from "react";
import Tabs from "../components/Tabs/Tabs";
import { tabsData } from "../data/data";

const Home = () => {
  return (
    <>
      <Tabs tabsData={tabsData} />
      <div className="text-9xl min-h-screen text-center">Home</div>;
    </>
  );
};

export default Home;
