import React, { createContext, useState } from "react";
import TabsList from "./TabsList";
import TabsContent from "./TabsContent";
import { tabsData } from "../../data/data";

export const TabsContext = createContext();

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onActiveTabChange = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabsData.find((tab) => tab.id === activeTab).content;

  return (
    <TabsContext.Provider
      value={{ tabsData, activeContent, onActiveTabChange, activeTab }}
    >
      <section className="bg-transparent m-20 flex flex-col h-52 ">
        {children}
      </section>
    </TabsContext.Provider>
  );
};

export default Tabs;

Tabs.List = TabsList;
Tabs.Content = TabsContent;
