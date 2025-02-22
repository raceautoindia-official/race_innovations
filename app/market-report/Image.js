"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Image() {
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
          minHeight: "60vh",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers when 30% of the section is in view
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center">
            {/* Animated Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideUpVariants}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1
                className="ms-md-4"
                style={{
                  fontSize: "clamp(3rem, 5vw, 3rem)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "black" }}>Market</span>
                <span style={{ color: "black", marginLeft: "15px" }}>
                  Reports
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Market Reports Section */}
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Title */}
        <motion.h4
          style={{
            fontSize: "3rem",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span style={{ color: "black" }}>Market</span>
          <span style={{ color: "#293BB1", marginLeft: "15px" }}>
            Reports
          </span>
        </motion.h4>

        {/* Description */}
        <motion.p
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 0.8 }}
        >
          In today's fast-moving business environment, timely intelligence is
          the key to staying ahead. RACE Innovations Flash Reports provide quick,
          actionable insights to help businesses make informed decisions—faster.
          Designed for executives, investors, and decision-makers, our concise,
          data-driven reports deliver the latest market trends, competitive
          shifts, financial movements, and emerging innovations in your
          industry.
        </motion.p>
      </motion.div>
    </>
  );
}

export default Image;
