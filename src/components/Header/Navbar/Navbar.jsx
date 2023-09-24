import React, { useState } from "react";
import OptionsList from "./OptionsList/OptionsList";
import categories from "../../../data/data.js";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (i) => {
    setIsOpen(true);
    setActiveCategory(i);
  };
  const handleMouseLeave = (e) => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  const filteredOptions = categories[activeCategory]?.options;

  return (
    <nav className="pt-10">
      <ul
        className="bg-transparent cursor-pointer flex justify-between w-auto h-full"
        onMouseLeave={handleMouseLeave}
      >
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`min-w-fit px-4 py-auto cursor-pointer text-lg h-full transition-all  text-gray-700   ${
              i === activeCategory &&
              "underline text-black underline-offset-4 -translate-y-0.5"
            }`}
            onMouseEnter={(e) => handleMouseEnter(i)}
          >
            {cat.label}
          </li>
        ))}
        {isOpen && (
          <OptionsList
            filteredOptions={filteredOptions}
            onMouseLeave={handleMouseLeave}
            isOpen={isOpen}
          />
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
