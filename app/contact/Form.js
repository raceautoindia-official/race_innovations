"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Form() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: "url('/images/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", 
        width: "100%",
      }}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <motion.h1
        style={{
          fontSize: "clamp(1rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
        }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
      >
        <span style={{ color: "black" }}>You can connect with</span>
        <span style={{ color: "#293BB1" }}>   us when you need help!</span>
      </motion.h1>

      <div className="container bg-white p-4 rounded shadow mt-5">
        <div className="row">
          <div className="col-md-6">
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Organization" />
              </div>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Location" />
              </div>
            </motion.div>
          </div>
          <div className="col-12">
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
              </div>
            </motion.div>
          </div>
          <div className="col-12 text-center">
            <motion.div
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromBottom}
              transition={{ duration: 0.8 }}
            >
              <button className="btn btn-primary px-4">Submit</button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Form;
