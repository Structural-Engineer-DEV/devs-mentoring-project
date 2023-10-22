import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownList = (props) => {
  const { SORT_OPTIONS, isOpen, handleTraitClick, sortBy } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex flex-col bg-gray-100 absolute items-end right-0 rounded-md whitespace-nowrap"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {SORT_OPTIONS.map((option) => (
            <div className="flex items-end px-2 py-0.5">
              <button
                key={option}
                className={`text-gray-500 ${
                  sortBy !== option ? "hover:text-black" : "cursor-not-allowed"
                }`}
                onClick={() => {
                  if (sortBy !== option) handleTraitClick(option);
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownList;
