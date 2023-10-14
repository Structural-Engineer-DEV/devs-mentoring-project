import React from "react";

const DropdownList = (props) => {
  const { sortByList, isOpen, handleTraitClick, sortBy } = props;

  return (
    <>
      {isOpen && (
        <div className="flex flex-col bg-gray-100 absolute items-end right-0 rounded-md whitespace-nowrap">
          {sortByList.map((trait) => (
            <div className="flex items-end px-2 py-0.5">
              <button
                key={trait}
                className={`text-gray-500 ${
                  sortBy !== trait ? "hover:text-black" : "cursor-not-allowed"
                }`}
                onClick={() => handleTraitClick(trait)}
              >
                {trait}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownList;
