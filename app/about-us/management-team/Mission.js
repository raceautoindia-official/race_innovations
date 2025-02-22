"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation variant
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Text Section with Animation */}
          <motion.div
            className="col-md-4 d-flex flex-column justify-content-center text-end"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            onViewportEnter={() => setHasAnimated(true)}
          >
            <h1
              className="ms-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "black" }}>Management</span>
              <span style={{ color: "#293BB1" }}> Team</span>
            </h1>
          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="col-md-8"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            onViewportEnter={() => setHasAnimated(true)}
          >
            <Image
              src="/images/image 19.jpg"
              width={500}
              height={500}
              className="ms-5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="Descriptive Alt Text"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Mission;
