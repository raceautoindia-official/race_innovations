"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Advisory() {
  return (
    <>
      {/* Advisory Section */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        whileInView="visible"  // Triggers animation on scroll
        viewport={{ once: true, amount: 0.2 }} // Ensures it runs only once when 20% is in view
        variants={slideUpVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center" style={{ fontSize: "3rem", whiteSpace: "nowrap" }}>
          <span style={{ color: "#293BB1" }}>Advisory</span>
        </h1>

        <p className="mt-5" style={{ fontSize:"18px" }}>
          RACE associates have worked with most industries and have been a part of export/import and business needs. Our expert advisors and consultants have the knowledge to provide actionable steps to meet the challenges of doing business in new territories or across international borders.
        </p>

        <p style={{ fontSize:"18px" }}>
          Our advisers will help you plan while meeting your current goals. With services ranging from management consulting to feasibility studies, and from technology consulting to mergers and acquisitions, our member firms can advise on a wide variety of issues, ensuring that your people, processes, and products are aligned with your business goals.
        </p>

        <p style={{ fontSize:"18px" }}>
          With extensive industry experience, you can be assured that our member firms will provide relevant guidance completely tailored to your organization’s strategic vision.
        </p>
      </motion.div>

      {/* Key Accounting Services Section */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-center">
          <span style={{ color: "black", marginRight: "10px" }}>Key</span>
          <span style={{ color: "#293BB1" }}>Accounting Services</span>
        </h1>
        <div className="row">
          {/* List Column 1 */}
          <div className="col-md-4" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Business valuation</li>
              <li className="mt-3">Corporate finance</li>
              <li className="mt-3">Feasibility studies</li>
              <li className="mt-3">Human resources & organizational development</li>
              <li className="mt-3">International expansion</li>
              <li className="mt-3">Management consulting</li>
              <li className="mt-3">Mergers & Acquisitions</li>
              <li className="mt-3">Performance efficiency & Profit enhancement</li>
            </ul>
          </div>

          {/* List Column 2 */}
          <div className="col-md-4 mt-1" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Private equity</li>
              <li className="mt-3">Product & Operations consulting</li>
              <li className="mt-3">Project finance</li>
              <li className="mt-3">Restructuring</li>
              <li className="mt-3">Risk management</li>
              <li className="mt-3">Strategic planning</li>
              <li className="mt-3">Technology consulting</li>
            </ul>
          </div>

          {/* Image Column */}
          <div className="col-md-4">
            <Image
              src="/images/image-77.png"
              width={600}
              height={400}
              className="ms-md-5"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              alt="Descriptive Alt Text"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Advisory;
