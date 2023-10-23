import React, { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import DropdownList from "./DropdownList";

const SORT_OPTIONS = [
  "Polecane",
  "Najnowsze",
  "Cena: od najniższej",
  "Cena: od najwyższej",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const handleTraitClick = (option) => {
    setSortBy(option);
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
        Sortuj wg {sortBy ? `: ${sortBy}` : ""}
        <div
          className={`ml-2 border-8 border-transparent ${
            isOpen
              ? "border-b-black -translate-y-1/3"
              : "border-t-black translate-y-1/3"
          }`}
        />
      </div>
      <DropdownList
        SORT_OPTIONS={SORT_OPTIONS}
        isOpen={isOpen}
        handleTraitClick={handleTraitClick}
        sortBy={sortBy}
      />
    </div>
  );
};

export default Dropdown;
