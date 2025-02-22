"use client"; 

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
};
function First() {
  return (
    <>
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
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp} 
              transition={{ duration: 1 }}
            >
              <h1 className="ms-md-4" style={{ fontSize: "3.5rem", whiteSpace: "nowrap" }}>
                <span style={{ color: "#293BB1" }}>Intellect</span>
              </h1>
            </motion.div>
            <motion.div
              className="col-md-8 col-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp} 
              transition={{ duration: 1, delay: 0.2 }} 
            >
              <Image
                src="/images/brain.jpg"
                width={600}
                height={400}
                className="ms-md-5"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                alt="Brain Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp} 
        transition={{ duration: 1, delay: 0.4 }} 
      >
        {["Technic", "Intellect", "Connect", "LBI Route Survey", "Accounting & Legal"].map(
          (item, index) => (
            <motion.p 
              key={index} 
              className="m-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp} 
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }} 
            >
              {item}
            </motion.p>
          )
        )}
      </motion.div>
    </>
  );
}

export default First;
