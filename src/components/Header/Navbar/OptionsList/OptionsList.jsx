import React from "react";

const OptionsList = (props) => {
  const { filteredOptions } = props;

  return (
    <ul className="absolute top-24 left-0 w-full p-0 pb-4 bg-gray-300 text-center transition-opacity">
      {filteredOptions?.map((opt, i) => (
        <li
          key={i}
          className="cursor-pointer text-lg mx-auto p-2 w-fit text-gray-600 hover:text-black hover:text-xl"
        >
          {opt}
        </li>
      ))}
    </ul>
  );
};

export default OptionsList;
