"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Who() {
  return (
    <>
      {/* Title with Animation */}
      <motion.h1
        className="mt-4"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
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
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>
          Accomplishment
        </span>
      </motion.h1>

      {/* Background Section */}
      <div
        className="container-fluid"
        style={{
          backgroundImage: 'url("/images/rectangle.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          padding:"0.5rem"
        }}
      >
        <div className="container">
          {/* Intro Text */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
          
          </motion.div>

          {/* First Row */}
          <motion.div
            className="row justify-content-center mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {[
              { img: "chair.png", text: "Incorporated in the year 2011" },
              {
                img: "award.png",
                text: "Recognized, professionally acclaimed and admired player in the CV industry",
              },
              {
                img: "administrator.png",
                text: "Unique in the industry for our adept knowledge in truck/bus/trailer applications",
              },
              {
                img: "data-analytics.png",
                text: "Delivered more than 50 customized strategic reports and 100 market research reports",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUpVariants}
                transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
              >
                <div className="card p-3 text-center d-flex flex-column align-items-center w-100">
                  <Image
                    src={`/images/${item.img}`}
                    width={50}
                    height={50}
                    alt={item.text}
                    className="mb-3"
                  />
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="row justify-content-center mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              {
                img: "delivery-truck.png",
                text: "Designed and developed various truck, bus, trailer application designs",
              },
              {
                img: "team-leader.png",
                text: "Executed more than 10 strategic green field innovative projects",
              },
              {
                img: "engineer.png",
                text: "Employee strength of 35 members including engineers and marketing specialists",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUpVariants}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="card p-3 text-center d-flex flex-column align-items-center w-100">
                  <Image
                    src={`/images/${item.img}`}
                    width={50}
                    height={50}
                    alt={item.text}
                    className="mb-3"
                  />
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Who;
