import React from "react";

const TabsList = (props) => {
  const { tabsData, onActiveTabChange, activeTab } = props;
  return (
    <div className="bg-transparent h-auto flex align-middle justify-between">
      {tabsData.map((tab, i) => (
        <button
          className={`box-border
         bg-gray-200 h-12 w-28 border-2 z-10  border-gray-300  -mb-0.5 ${
           tab.id === activeTab &&
           "bg-gray-50 border-b-transparent  cursor-default"
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
