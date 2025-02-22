"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Video() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation for the container
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Text animation with staggered delay
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 }, // Stagger effect
    }),
  };

  return (
    <>
      {/* Video Placeholder with Animation */}
      <motion.div
        className="container d-flex justify-content-center align-items-center mt-5"
        style={{
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: "400px",
        }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <motion.p
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariant}
          custom={0} // Delay 0
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          YouTube Video
        </motion.p>
      </motion.div>

      {/* Text Content with Individual Animation */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        {[
          "Location-Based Intelligence emphasizes facilitating hindrance-free movement of goods by conducting route surveys by a team of experts. The LBI team specializes in providing reports with recommendations that help users move freely without any difficulties. LBI uses advanced technology and applications to increase accuracy and reliability.",
          "RACE has a team of professional engineering & civil experts to execute route surveys, identify the shortest feasible routes, ensure load securing, perform vehicle stability calculations, and determine bridge capacity and road filling requirements with associated civil costs for safe & economical cargo transportation.",
          "Additionally, the RACE Team is well-equipped to support various industries, logistics, and transportation companies in designing specialized trailers tailored to their specific cargo and applications.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
            custom={i + 1} // Stagger delay
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </>
  );
}

export default Video;
