import React, { useState } from "react";
import CollapseContent from "./CollapseContent";

const CollapseCategory = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = props;
  return (
    <div className="flex flex-col items-center w-full border-t last:border-b border-gray-400">
      <div
        className={`flex justify-between cursor-pointer caret-transparent p-1  w-full hover:text-black group ${
          isOpen ? `text-black` : `text-gray-500 `
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <button>{data.label}</button>
        <div
          className={`ml-2 border-8 border-transparent   ${
            isOpen
              ? "border-b-black -translate-y-1/3 border-t-transparent"
              : "border-t-gray-500 translate-y-1/3 group-hover:border-t-black"
          }`}
        />
      </div>
      {isOpen && <CollapseContent>{data.content}</CollapseContent>}
    </div>
  );
};

export default CollapseCategory;
