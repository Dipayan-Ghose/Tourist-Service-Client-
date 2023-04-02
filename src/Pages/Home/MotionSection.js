import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const MotionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);
  return (
  
      <div className="wrapper">
        <motion.div
          className="container"
          style={{
            scale,
          }}
        >
            <h1> I am Iron man</h1>
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <h1> I am Iron man</h1>
        </motion.div>
      </div>
    
  );
};

export default MotionSection;
