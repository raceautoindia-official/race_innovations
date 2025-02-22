"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below
  visible: { opacity: 1, y: 0 }, // Move up to position
};

function Principles() {
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
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>Principles</span>
      </motion.h1>

      <div
        className="container-fluid mt-5"
        style={{
          backgroundImage: 'url("/images/rectangle.png")',
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
                  img: "/images/group-89.png",
                  title: "Independent",
                  text: "Inculcate entrepreneurship and freedom of mind to create nuances of creativity innovation in all our crucial project efforts.",
                },
                {
                  img: "/images/group-90.png",
                  title: "Team Spirit",
                  text: "Ability to work within the team and also partner with the client's team for mutual success.",
                },
                {
                  img: "/images/group-91.png",
                  title: "Services",
                  text: "Our motto/philosophy is committed to adding value for every stakeholder at all times.",
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
                      width={130}
                      height={180}
                      className="ms-md-5"
                      style={{ objectFit: "contain" }}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <p>{item.text}</p>
                    <h5 style={{ color: "#3647b5" }}>{item.title}</h5>
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
                  img: "/images/group-92.png",
                  title: "Fun",
                  text: "The perfect blend of fun and responsibility empowers employees, partners, and managers to achieve set goals while building confidence.",
                },
                {
                  img: "/images/group-93.png",
                  title: "Respect",
                  text: "Implies an ownership attitude and respect for everyone irrespective of culture, customs, religion, and nationality.",
                },
                {
                  img: "/images/group-94.png",
                  title: "Integrity",
                  text: "Virtue of success is sustained by our honest and reliable codes of practice in every sphere of our business operations.",
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
                      width={130}
                      height={180}
                      className="ms-md-5"
                      style={{ objectFit: "contain" }}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <p>{item.text}</p>
                    <h5 style={{ color: "#3647b5" }}>{item.title}</h5>
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

export default Principles;
