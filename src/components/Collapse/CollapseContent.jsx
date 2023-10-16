import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CollapseContent = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="collapse-content"
          initial={{ opacity: 0, height: 0, marginBottom: 0, marginTop: 0 }}
          animate={{
            opacity: 1,
            height: "fit-content",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
          exit={{ opacity: 0, height: 0, marginBottom: 0, marginTop: 0 }}
          transition={{
            opacity: { duration: 0.1 },
            height: { duration: 0.1 },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CollapseContent;
