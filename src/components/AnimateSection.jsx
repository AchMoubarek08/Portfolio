import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateSection = ({
  children,
  initialOpacity = 0,
  initialY = 50,
  finalOpacity = 1,
  finalY = 0,
  duration = 0.8,
  threshold = 0.2,
  triggerOnce = true,
  customStyle = {},
}) => {
  const { ref, inView } = useInView({
    triggerOnce,  // Animates only once when in view
    threshold,    // Adjust visibility threshold (e.g., 20%)
  });

  const variants = {
    hidden: { opacity: initialOpacity, y: initialY },
    visible: { opacity: finalOpacity, y: finalY },
  };
  const motionStyle = {
    transition: `all ${duration}s ease-out`,
    ...customStyle, // Apply custom styles passed from props
  };
  return (
    <motion.div
      ref={ref} // Attach ref to detect section visibility
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Animate when in view
      variants={variants}
      transition={{ duration, ease: "easeOut" }} // Customize animation
      style={motionStyle} // Apply the merged styles here
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection;
