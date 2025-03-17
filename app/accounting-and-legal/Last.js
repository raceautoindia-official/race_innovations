"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Last() {
  return (
    <>
      <motion.div
        className="container mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center" style={{ fontSize: "3rem", whiteSpace: "nowrap" }}>
          <span style={{ color: "#293BB1" }}>Tax</span>
        </h1>

        <p className="mt-5" style={{ fontSize:"18px" }}>
          With the experienced account and audit team, we have handled taxation
          activities for major industries and individuals. Currently, tax
          regulations are constantly updated, making it challenging for clients
          to adhere to and operate. RACE has a dedicated team to advise
          individuals and businesses on tax reduction strategies while ensuring
          compliance with regulations.
        </p>

        <p style={{ fontSize:"18px" }}>
          We work closely with clients to understand their inflows and outflows,
          providing tailored solutions to improve tax savings while following
          government tax rules.
        </p>

        <p style={{ fontSize:"18px" }}>
          When you work with one of our member firms, you have access to experts
          who will handle your tax matters efficiently and with the utmost care,
          so you can focus on other vital aspects of your business.
        </p>
      </motion.div>
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
          <div className="col-md-4" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Corporate tax</li>
              <li className="mt-3">Customs duties</li>
              <li className="mt-3">Employee incentives</li>
              <li className="mt-3">Employment tax</li>
              <li className="mt-3">Deportee tax & Employee advice</li>
              <li className="mt-3">International tax planning</li>
            </ul>
          </div>
          <div className="col-md-4 mt-1" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Personal tax, asset protection & trust planning</li>
              <li className="mt-3">Property tax</li>
              <li className="mt-3">Tax preparation & Compliance</li>
              <li className="mt-3">Transaction support</li>
              <li className="mt-3">Transfer pricing</li>
              <li className="mt-3">VAT & Indirect Taxes</li>
            </ul>
          </div>
          <div className="col-md-4">
            <Image
              src="/images/image-79.png"
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

export default Last;
