import React, { useState } from "react";
import categories from "../../../data/data.js";
import OptionsList from "./OptionsList/OptionsList";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (i) => {
    setActiveCategory(i);
  };
  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const filteredOptions = categories[activeCategory]?.options;

  const isOpen = activeCategory !== null;

  return (
    <nav className="pt-10">
      <ul
        className="bg-transparent cursor-pointer flex justify-between w-auto h-full"
        onMouseLeave={handleMouseLeave}
      >
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`min-w-fit px-4 py-auto cursor-pointer text-lg h-full transition-all  text-gray-600   ${
              i === activeCategory &&
              "underline text-black/100 underline-offset-4"
            }`}
            onMouseEnter={() => handleMouseEnter(i)}
          >
            {cat.label}
          </li>
        ))}
        {isOpen && <OptionsList filteredOptions={filteredOptions} />}
      </ul>
    </nav>
  );
};

export default Navbar;
