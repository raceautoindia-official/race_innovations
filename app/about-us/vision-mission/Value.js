"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below
  visible: { opacity: 1, y: 0 }, // Move up to position
};

function Value() {
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
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>Values</span>
      </motion.h1>

      <div
        className="container-fluid mt-5"
        style={{
          backgroundImage: 'url("/images/value.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {[
                {
                  img: "/images/195.png",
                  title: "Pursuit of Excellence",
                  text: "Continually strive to exceed the expectations of our people and our clients.",
                },
                {
                  img: "/images/196.png",
                  title: "Confidentiality",
                  text: "We take utmost responsibility in protecting customers' confidential information, strategy, futuristic plans, and values.",
                },
                {
                  img: "/images/197.png",
                  title: "Integrity",
                  text: "Our energy and enthusiasm are contagious. We are inspired to make a lasting impact.",
                },
              ].map((item, index) => (
                <motion.div
                  className="row mt-5"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUpVariants}
                  transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                >
                  <div className="col-md-6">
                    <Image
                      src={item.img}
                      width={180}
                      height={180}
                      className="ms-md-5"
                      style={{ objectFit: "contain" }}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 style={{ color: "#3647b5" }}>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {[
                {
                  img: "/images/198.png",
                  title: "Passion",
                  text: "Our energy and enthusiasm are contagious. We are inspired to make a lasting impact.",
                },
                {
                  img: "/images/199.png",
                  title: "Collaboration",
                  text: "Ability to work within the team, partner with clients' team for mutual success.",
                },
                {
                  img: "/images/200.png",
                  title: "Accountability",
                  text: "Continually strive to exceed the expectations of our people and our clients.",
                },
              ].map((item, index) => (
                <motion.div
                  className="row mt-5"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUpVariants}
                  transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                >
                  <div className="col-md-6">
                    <Image
                      src={item.img}
                      width={180}
                      height={180}
                      className="ms-md-5"
                      style={{ objectFit: "contain" }}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 style={{ color: "#3647b5" }}>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Value;
