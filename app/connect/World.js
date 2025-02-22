"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const scrollUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function World() {
  return (
    <>
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/connect-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollUpVariant}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollUpVariant}
              transition={{ duration: 1 }}
            >
              <h1 className="ms-md-4" style={{ fontSize: "3.5rem", whiteSpace: "nowrap" }}>
                <span style={{ color: "#293BB1" }}>Connect</span>
              </h1>
            </motion.div>
            <motion.div
              className="col-md-8 col-12"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollUpVariant}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image
                src="/images/connect-background.png"
                width={800}
                height={400}
                className="ms-md-5"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                alt="Connect Background"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-1 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollUpVariant}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {["Technic", "Intellect", "Connect", "LBI Route Survey", "Accounting & Legal"].map(
          (item, index) => (
            <motion.p key={index} className="m-2">
              {item}
            </motion.p>
          )
        )}
      </motion.div>
      <div className="container mt-5">
        <div className="row align-items-center text-center text-md-start">
          <motion.div
            className="col-md-4 col-12 mb-4"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollUpVariant}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src="/images/image-connect.png"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
              alt="Connect Image"
            />
          </motion.div>
          <motion.div
            className="col-md-7 col-12"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollUpVariant}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              Starting with an in-depth market analysis which helps in understanding prospects and
              potential, followed by a feasibility study, understanding end customer’s needs based
              on their cultural background, customer mapping, arriving at a suitable marketing
              strategy for a diversified customer base & connecting them to the right people.
            </p>

            <p>
              RACE Application Engineering capability helps the company develop the right product
              for Indian application requirements.
            </p>

            <p>
              Additionally, RACE can also assist international companies in finding the right
              partner for a successful joint venture. RACE will conduct an unbiased technical and
              commercial due diligence activity, which will enable international companies to make a
              strategic decision on partnering with domestic counterparts.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="container-fluid"
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollUpVariant}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1></h1>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default World;
