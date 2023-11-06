import React, { createContext, useContext, useState } from "react";
import TabsList from "./TabsList";
import TabsContent from "./TabsContent";

const TabsContext = createContext();
export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("Tabs must be used within a ContextProvider");
  }
  return context;
};

const Tabs = ({ tabsData, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabChange = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabsData.find((tab) => tab.id === activeTab).content;

  return (
    <TabsContext.Provider
      value={{ tabsData, activeContent, handleActiveTabChange, activeTab }}
    >
      <section className="bg-transparent m-20 flex flex-col h-52 ">
        {children}
      </section>
    </TabsContext.Provider>
  );
};

Tabs.List = TabsList;
Tabs.Content = TabsContent;

export default Tabs;
