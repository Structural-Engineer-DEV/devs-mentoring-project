import React, { useState } from "react";
import DropdownList from "./DropdownList";
import { useClickAway } from "@uidotdev/usehooks";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const sortByList = [
    "Polecane",
    "Najnowsze",
    "Cena: od najniższej",
    "Cena: od najwyższej",
  ];

  const handleTraitClick = (trait) => {
    setSortBy(trait);
    setIsOpen(false);
  };

  const clickAwayRef = useClickAway((e) => {
    if (!e.target.closest("#dropdown-container")) setIsOpen(false);
  });

  return (
    <div id="dropdown-container" className="relative" ref={clickAwayRef}>
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
        sortByList={sortByList}
        isOpen={isOpen}
        handleTraitClick={handleTraitClick}
        sortBy={sortBy}
      />
    </div>
  );
};

export default Dropdown;
