"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CareerHome() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container-fluid mt-3 p-5 d-flex align-items-center"
      style={{
        backgroundImage: 'url("/images/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Text Section */}
          <motion.div
            className="col-md-4 col-12 mb-4 mb-md-0"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="ms-md-4"
              style={{ fontSize: "3.5rem", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "#293BB1" }}>Careers</span>
            </h1>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-md-8 col-12"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/career-bg.png"
              width={600}
              height={400}
              className="ms-md-5"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              alt="Career Background"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default CareerHome;
