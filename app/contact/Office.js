"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Office() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container mt-5"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <motion.h1
        className="text-center"
        style={{
          fontSize: "3rem",
          whiteSpace: "nowrap",
        }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
      >
        <span style={{ color: "black", marginRight: "10px" }}>Our</span>
        <span style={{ color: "#293BB1" }}>Office</span>
      </motion.h1>

      <motion.p
        className="mt-5"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        transition={{ duration: 0.8 }}
      >
        RACE Connect is the cost-effective strategy to experience an evolving
        market and the most efficient method to build relationships in new
        markets. With the Indian automotive market becoming more challenging and
        competitive, the RACE Connect program helps global companies enter the
        Indian market in the most productive and cost-effective manner right
        from the beginning.
      </motion.p>

      <div className="row">
        <div className="col-md-4 mt-4">
          <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/group-1.png"
              width={400} // Adjust as needed
              height={300} // Adjust as needed
              style={{ objectFit: "cover" }}
              alt="Office Image 1"
            />
          </motion.div>
        </div>
        <div className="col-md-4 mt-4">
          <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/group-2.png"
              width={400} // Adjust as needed
              height={300} // Adjust as needed
              style={{ objectFit: "cover" }}
              alt="Office Image 2"
            />
          </motion.div>
        </div>
        <div className="col-md-4 mt-4">
          <motion.div
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/group-3.png"
              width={400} // Adjust as needed
              height={300} // Adjust as needed
              style={{ objectFit: "cover" }}
              alt="Office Image 3"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Office;
