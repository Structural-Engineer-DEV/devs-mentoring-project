import React, { useContext } from "react";
import { TabsContext } from "./Tabs";

const TabsList = ({ children }) => {
  const { tabsData, onActiveTabChange, activeTab } = useContext(TabsContext);
  return (
    <div className="bg-transparent h-auto flex align-middle justify-between">
      {tabsData.map((tab, i) => (
        <button
          className={`box-border
         bg-gray-200 h-12 w-28 border-2 z-10  border-gray-300  -mb-0.5 text-gray-500 hover:text-black ${
           tab.id === activeTab &&
           "bg-gray-50 border-b-transparent  cursor-default text-black"
         }`}
          key={i}
          onClick={() => onActiveTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsList;
