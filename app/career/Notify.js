"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Notify() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container-fluid mt-5 p-5 d-flex align-items-center"
      style={{
        backgroundImage: 'url("/images/get.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-3 col-12 mb-4 mb-md-0"></div>
          <motion.div
            className="col-md-5 col-12"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8 }}
          >
            <h1>Get Notified</h1>
            <p>Signup to receive occasional updates.</p>
            <div className="mb-3 d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                style={{ borderRadius: "30px" }}
              />
              <button
                className="ms-3 text-white"
                style={{
                  backgroundColor: "#72b4c4",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  border: "none",
                }}
              >
                JOIN
              </button>
            </div>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from us by email.
          </motion.div>

          <motion.div
            className="col-md-4 col-12"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/mail.png"
              width={300}
              height={300}
              className="ms-md-5"
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
              }}
              alt="Mail Icon"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Notify;
