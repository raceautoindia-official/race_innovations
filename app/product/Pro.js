"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Starts lower for a more prominent effect
  visible: { opacity: 1, y: 0 },
};

function Pro() {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation only once when the component mounts
    controls.start("visible");
  }, [controls]);

  return (
    <>
      {/* Background Image Section */}
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/product.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}
        initial="hidden"
        animate={controls} // Animate once on mount
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center">
            {/* Animated Title */}
            <motion.div
              initial="hidden"
              animate={controls} // Animate once on mount
              variants={slideUpVariants}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1
                className="ms-md-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }}
              >
                <span style={{ color: "black" }}>Product</span>
                <span style={{ color: "black", marginLeft: "15px" }}>
                  Research
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="container"
        initial="hidden"
        animate={controls} 
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        

        <p className="mt-4">
          At RACE, we specialize in comprehensive product research to help businesses 
          develop, refine, and launch successful products. Whether you're designing a new 
          automotive component, a breakthrough in farm machinery, or industrial equipment, 
          our in-depth research ensures market fit, competitive advantage, and long-term success.
        </p>
      </motion.div>
      
    </>
  );
}

export default Pro;
