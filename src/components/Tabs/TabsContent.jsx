import React from "react";
import { useTabsContext } from "./Tabs";

const TabsContent = ({ children }) => {
  const { activeContent } = useTabsContext();

  return (
    <div className="bg-gray-50 h-full w-full text-4xl flex justify-center border-2 border-gray-300  pt-10">
      {activeContent}
    </div>
  );
};

export default TabsContent;
