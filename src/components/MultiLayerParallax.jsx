import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div 
      ref={ref}
      className="parallax-container section"
    >
      <motion.h1
        style={{ y: textY }}
        className="parallax-content"
      >
        Parallaxxooox
      </motion.h1>
      <motion.div
        className="parallax-fg"
        style={{y: backgroundY}}
      />
      <div
        className="parallax-bg"
      />
    </div>
  );
}