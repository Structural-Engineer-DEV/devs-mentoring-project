import React, { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import DropdownList from "./DropdownList";

const SORT_OPTIONS = [
  "Popularne",
  "Najnowsze",
  "Cena: od najniższej",
  "Cena: od najwyższej",
];

const Dropdown = ({ trait, setTrait, options = SORT_OPTIONS }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [sortBy, setSortBy] = useState(null);

  const handleTraitClick = (option) => {
    setTrait(option);
    setIsOpen(false);
  };

  const clickAwayRef = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={clickAwayRef}>
      <div
        className="flex justify-end cursor-pointer caret-transparent m-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Sortuj wg {trait ? `: ${trait}` : ""}
        <div
          className={`ml-2 border-8 border-transparent ${
            isOpen
              ? "border-b-black -translate-y-1/3"
              : "border-t-black translate-y-1/3"
          }`}
        />
      </div>
      <DropdownList
        options={options}
        isOpen={isOpen}
        handleTraitClick={handleTraitClick}
        trait={trait}
      />
    </div>
  );
};

export default Dropdown;
