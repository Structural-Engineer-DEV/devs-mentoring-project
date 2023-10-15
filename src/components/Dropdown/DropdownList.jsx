import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownList = (props) => {
  const { sortByList, isOpen, handleTraitClick, sortBy } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex flex-col bg-gray-100 absolute items-end right-0 rounded-md whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          exit={{ opacity: 0, y: -5 }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownList;
