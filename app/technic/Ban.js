"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants (Bottom to Top)
const scrollUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Start from below
  visible: { opacity: 1, y: 0 }, // Move up smoothly
};

function Ban() {
  return (
    <>
      {/* Background Section */}
      <div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            {/* Title with Bottom-to-Top Scroll Animation */}
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollUpVariants} // ✅ Apply scroll-up effect
              transition={{ duration: 1 }}
            >
              <h1 className="ms-md-4" style={{ fontSize: "3.5rem", whiteSpace: "nowrap" }}>
                <span style={{ color: "#293BB1" }}>Technic</span>
              </h1>
            </motion.div>

            {/* Image with Bottom-to-Top Scroll Animation */}
            <motion.div
              className="col-md-8 col-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollUpVariants} // ✅ Apply scroll-up effect
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Image
                src="/images/technic-1.png"
                width={600}
                height={400}
                className="ms-md-5"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                alt="Technic Image"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Section with Animation */}
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollUpVariants} // ✅ Apply scroll-up effect
        transition={{ duration: 1, delay: 0.5 }}
      >
        {["Technic", "Intellect", "Connect", "LBI Route Survey", "Accounting & Legal"].map(
          (item, index) => (
            <motion.p key={index} className="m-2">{item}</motion.p>
          )
        )}
      </motion.div>
    </>
  );
}

export default Ban;
