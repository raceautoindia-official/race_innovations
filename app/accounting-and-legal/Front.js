"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const slideUpOnce = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Front() {
  return (
    <>
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/route-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
        initial="hidden"
        animate="visible"
        variants={slideUpOnce}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-4 col-12 mb-4 mb-md-0">
              <h1
                className="ms-md-4 position-relative"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                }}
              >
                <span style={{ color: "#293BB1" }}>Accounting & Legal</span>
              </h1>
            </div>
            <div className="col-md-8 col-12">
              <Image
                src="/images/account.png"
                width={600}
                height={400}
                className="ms-md-5"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                alt="Account"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        animate="visible"
        variants={slideUpOnce}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="m-2">Technic</p>
        <p className="m-2">Intellect</p>
        <p className="m-2">Connect</p>
        <p className="m-2">LBI Route Survey</p>
        <p className="m-2">Accounting & Legal</p>
      </motion.div>
    </>
  );
}

export default Front;
