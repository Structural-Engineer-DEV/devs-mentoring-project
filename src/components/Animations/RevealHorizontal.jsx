import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealHorizontal = ({ children, className, moveLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0%",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);

  const movement = moveLeft ? 50 : -50;

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: movement },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealHorizontal;
