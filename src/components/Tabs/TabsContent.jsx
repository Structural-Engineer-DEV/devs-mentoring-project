import React from "react";

const TabsContent = (props) => {
  const { activeTabsData } = props;

  return (
    <div className="bg-gray-50 h-full w-full text-4xl flex justify-center border-2 border-gray-300  pt-10">
      {activeTabsData}
    </div>
  );
};

export default TabsContent;
