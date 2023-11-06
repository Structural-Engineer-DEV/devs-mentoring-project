import React from "react";
import { useTabsContext } from "./Tabs";

const TabsList = ({ children }) => {
  const { tabsData, handleActiveTabChange, activeTab } = useTabsContext();
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
          onClick={() => handleActiveTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsList;
