import React, { useState } from "react";
import TabsList from "./TabsList";
import TabsContent from "./TabsContent";

const Tabs = (props) => {
  const { tabsData } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="bg-transparent m-20 flex flex-col h-52 ">
      <TabsList
        tabsData={tabsData}
        onActiveTabChange={handleActiveTabChange}
        activeTab={activeTab}
      />
      <TabsContent activeTabsData={tabsData[activeTab].content} />
    </section>
  );
};

export default Tabs;
