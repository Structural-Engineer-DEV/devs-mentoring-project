import React from "react";
import { motion } from "framer-motion";

const CollapseContent = (props) => {
  return (
    <motion.div
      className="my-4"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
    >
      {props.children}
    </motion.div>
  );
};

export default CollapseContent;
