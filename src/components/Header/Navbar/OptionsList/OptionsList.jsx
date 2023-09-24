import React, { useEffect, useState } from "react";

const OptionsList = (props) => {
  const { filteredOptions, isOpen } = props;

  return (
    <ul
      className={`absolute top-24 left-0 w-full p-0 pb-4 bg-gray-300 text-center transition-opacity opacity-0 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {filteredOptions?.map((opt, i) => (
        <li
          key={i}
          className="cursor-pointer text-xl my-2 mx-auto text-gray-600 hover:text-black hover:-translate-y-0.5 transition-all"
        >
          {opt}
        </li>
      ))}
    </ul>
  );
};

export default OptionsList;
