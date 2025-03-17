"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Image() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Background Image Section */}
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/flash.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <div className="container">
          <div className="row align-items-center text-center">
            {/* Title */}
            <motion.h1
              className="ms-md-4"
              style={{
                fontSize: "clamp(3rem, 5vw, 3rem)",
                whiteSpace: "nowrap",
              }}
              variants={slideFromBottom}
            >
              <span style={{ color: "black" }}>Flash</span>
              <span style={{ color: "black", marginLeft: "15px" }}>Reports</span>
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="container"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        {/* Subheading */}
        

        {/* Description */}
        <motion.p className="mt-4" variants={slideFromBottom}>
          In today's fast-moving business environment, timely intelligence is the key to staying ahead. 
          Race Innovationss Flash Reports provide quick, actionable insights to help businesses make informed 
          decisions—faster. Designed for executives, investors, and decision-makers, our concise, data-driven 
          reports deliver the latest market trends, competitive shifts, financial movements, and emerging innovations in your industry.
        </motion.p>
      </motion.div>
    </>
  );
}

export default Image;
