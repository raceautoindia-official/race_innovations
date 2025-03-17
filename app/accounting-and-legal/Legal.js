"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Legal() {
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
          <span style={{ color: "#293BB1" }}>Legal</span>
        </h1>

        <p className="mt-5" style={{ fontSize:"18px" }}>
          Most businesses face many complex legal and commercial pressures when operating internationally that require the guidance of experienced and insightful advisors. Our members will guide you through the countless legal issues you may encounter while conducting business overseas.
        </p>

        <p style={{ fontSize:"18px" }}>
          Our law firm members provide solutions in an efficient and seamless manner, giving you more time to focus on other facets of your business.
        </p>

        <p style={{ fontSize:"18px" }}>
          Having worked across a wide range of industries, our member firms have the experience to understand your specific needs and become a trusted advisor to your business. With services ranging from employment law to international trade law, whatever support your business requires to be successful on the international stage, an RACE member firm can help.
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
          <span style={{ color: "#293BB1" }}>Legal Services</span>
        </h1>
        <div className="row">
          <div className="col-md-4" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Anti-trust & Competition</li>
              <li className="mt-3">Arbitration & Dispute resolution</li>
              <li className="mt-3">Banking & Finance, Bankruptcy & Creditor rights</li>
              <li className="mt-3">Business & Corporate</li>
              <li className="mt-3">Commercial & Contract</li>
              <li className="mt-3">Data protection & Privacy</li>
              <li className="mt-3">Employment</li>
              <li className="mt-3">Estate planning & Trusts</li>
              <li className="mt-3">Environmental</li>
              <li className="mt-3">Family & Matrimonial</li>
            </ul>
          </div>
          <div className="col-md-4 mt-1" style={{ fontSize:"18px" }}>
            <ul>
              <li className="mt-3">Immigration</li>
              <li className="mt-3">Intellectual property rights</li>
              <li className="mt-3">International trade</li>
              <li className="mt-3">Licensing and Litigation</li>
              <li className="mt-3">Mergers, Acquisitions & Disposals</li>
              <li className="mt-3">Product liability</li>
              <li className="mt-3">Real estate</li>
              <li className="mt-3">Shipping & Maritime</li>
              <li className="mt-3">Tax</li>
              <li className="mt-3">Technology & E-commerce</li>
            </ul>
          </div>
          <div className="col-md-4">
            <Image
              src="/images/image-78.png"
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

export default Legal;
