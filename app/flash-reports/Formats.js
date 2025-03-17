"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Formats() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation for sections
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Staggered animation for list items
  const listItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 }, // Staggered effect
    }),
  };

  return (
    <motion.div
      className="container"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {/* Title */}
      <motion.h4
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        className="mt-4"
        variants={slideFromBottom}
      >
        <span style={{ color: "black" }}>Flash</span>
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>
          Report Formats
        </span>
      </motion.h4>

      {/* Description */}
      <motion.p
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        transition={{ delay: 0.2 }}
      >
        At Race Innovationss, we offer Flash Reports in quarterly, monthly,
        half-yearly, and yearly formats to keep you updated on the latest market
        intelligence at the frequency that best suits your needs.
      </motion.p>

      {/* List */}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <ul className="l">
          {[
            {
              title: "Quarterly Report",
              description:
                "In-depth updates on market shifts, financial trends, and competitive strategies.",
            },
            {
              title: "Monthly Reports",
              description:
                "A concise snapshot of critical industry movements, product launches, and investment activities.",
            },
            {
              title: "Half-Yearly Reports",
              description:
                "Strategic analysis and mid-year performance reviews to help optimize your business strategies.",
            },
            {
              title: "Yearly Reports",
              description:
                "Comprehensive yearly reviews with actionable insights, market forecasts, and financial outlooks.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="mt-3"
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={listItemVariant}
              custom={index + 1} // Custom delay per item
            >
              <strong style={{ color: "#293BB1" }}>{item.title}:</strong> {item.description}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Formats;
