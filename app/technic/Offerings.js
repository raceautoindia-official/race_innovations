"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Offerings() {
  return (
    <div className="container">
      <div className="row">
        <motion.div
          className="col-md-6 d-flex flex-column"
          style={{   }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-3">Features</h1>
          <ul
            className="text-start"
            style={{
              listStyleType: "disc",
              paddingLeft: "",
              fontFamily: "roboto",
              fontSize: "20px",
            }}
          >
            {[
              "Trained engineering resources",
              "Assist to reduce product development cycle",
              "Help to deliver right products to market",
              "Use of latest engineering tools & techniques",
              "Voice of Customer (VOC) & Quality Function Deployment (QFD)",
              "Lesser workload on client internal R&D resources",
            ].map((feature, index) => (
              <motion.li key={index} className="mt-3">
                <strong>{feature}</strong> {/* Bold text */}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="col-md-5 mt-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/offerings.png"
            width={1100}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            alt="Offerings"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Offerings;
