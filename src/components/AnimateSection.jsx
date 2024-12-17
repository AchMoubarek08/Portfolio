import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateSection = ({
  children,
  initialOpacity = 0,
  initialX = 0,
  initialY = 50,
  finalOpacity = 1,
  finalX = 0,
  finalY = 0,
  duration = 0.8,
  threshold = 1,
  triggerOnce = true,
  customStyle = {},
}) => {
  // Intersection Observer to track visibility
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  // Variants for motion animations
  const variants = {
    hidden: { opacity: initialOpacity, x: initialX, y: initialY },
    visible: { opacity: finalOpacity, x: finalX, y: finalY },
  };

  return (
    <motion.div
      ref={ref} // Ref for visibility tracking
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, ease: "easeOut" }} // Smooth animation transition
      style={{
        ...customStyle,
        willChange: "opacity, transform", // Optimize animation rendering
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
