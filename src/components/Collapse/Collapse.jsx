import React from "react";
import CollapseCategory from "./CollapseCategory";

const Collapse = () => {
  const collapseData = [
    { label: "Collapse 1", content: "Collapse 1 content" },
    { label: "Collapse 2", content: "Collapse 2 content" },
    { label: "Collapse 3", content: "Collapse 3 content" },
    { label: "Collapse 4", content: "Collapse 4 content" },
    { label: "Collapse 5", content: "Collapse 5 content" },
    { label: "Collapse 6", content: "Collapse 6 content" },
  ];
  return (
    <nav className="flex flex-col justify-between items-center bg-gray-400-200 w-40 my-10">
      {collapseData.map((data, index) => (
        <CollapseCategory key={data.label} data={data} index={index} />
      ))}
    </nav>
  );
};

export default Collapse;
