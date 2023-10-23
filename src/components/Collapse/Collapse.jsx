import React from "react";
import CollapseCategory from "./CollapseCategory";

const Collapse = ({ collapseData }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-400-200 w-40 my-10">
      {collapseData.map((data) => (
        <CollapseCategory key={data.label} data={data} />
      ))}
    </div>
  );
};

export default Collapse;
