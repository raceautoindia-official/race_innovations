"use client"; // ✅ Ensure it's a Client Component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below
  visible: { opacity: 1, y: 0 }, // Move up to position
};

function Philosophy() {
  return (
    <>
      <motion.h1
        className="mt-4"
        style={{
          fontSize: "3rem",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}
      >
        <span style={{ color: "black" }}>Race</span>
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>Philosophy</span>
      </motion.h1>

      <div className="container-fluid mt-5">
        <div className="row">
          {/* Image Section */}
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/research.png"
              width={600}
              height={400}
              className="ms-md-5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="Research"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="col-md-6 d-flex flex-column justify-content-center align-items-center"
            style={{ lineHeight: "1.8",fontSize:"25px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              RACE Team is a well-renowned name in the space of Commercial
              Vehicle, Applications & Logistics projects. It thrives on business
              intelligence, innovative ideas supported by robust research,
              analytic abilities, consulting methodology integrated with
              engineering, sourcing, manufacturing expertise backed by marketing
              and go-to-market strategies to get on with direct implementation
              mode, creating extraordinary value for customers.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Philosophy;
