"use client"; 

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
};

function Int() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center text-center text-md-start">
        <motion.div
          className="col-md-4 col-12 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/int.jpg"
            width={600} 
            height={400} 
            style={{
              width: "100%", 
              height: "auto", 
              objectFit: "contain",
            }}
            alt="Intelligence Image"
          />
        </motion.div>
        <motion.div
          className="col-md-7 col-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            “Intellect” is one of the core solution offerings of RACE. Our
            strong network of market research and consulting team continuously
            tracks the Indian, global automotive market to provide clients with
            rich, extensive insights on market entry strategies, product launch,
            competitive strategy, mega trends, vehicle/component OEM
            strategies, regulatory/statutory tracking, customer behavior
            analysis, and manufacturing feasibility.
          </p>
        </motion.div>
      </div>
      <motion.h1
        className="text-center mt-5"
        style={{ fontSize: "3.5rem", fontWeight: "bold" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Features
      </motion.h1>
      <motion.ul
        className="d-flex flex-column flex-md-row justify-content-between text-center text-md-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {[
          "Maximum Accuracy",
          "Clear recommendation guidelines for execution",
          "In-Depth Analysis and use of latest tools & techniques",
        ].map((feature, index) => (
          <motion.li 
            key={index} 
            className={index === 1 ? "ms-md-5" : ""}
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
          >
            {feature}
          </motion.li>
        ))}
      </motion.ul>
      <motion.h1
        className="text-center mt-5"
        style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#293BB1" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 1 }}
      >
        Offerings
      </motion.h1>
    </div>
  );
}

export default Int;
