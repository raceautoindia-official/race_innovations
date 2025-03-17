"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <motion.div
          className="col-12 col-md-4 text-center text-md-end d-flex flex-column justify-content-center"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromBottom}
          onViewportEnter={() => setHasAnimated(true)}
        >
          <h1
            className="ms-md-4"
            style={{
              fontSize: "clamp(2rem, 2.5vw, 3rem)", 
              wordBreak: "break-word", 
              overflowWrap: "break-word", 
              textAlign: "center", 
            }}
          >
            <span style={{ color: "black" }}>Management</span>
            <span style={{ color: "#293BB1" }}> Team</span>
          </h1>
        </motion.div>
        <motion.div
          className="col-12 col-md-8 d-flex justify-content-center"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromBottom}
          onViewportEnter={() => setHasAnimated(true)}
        >
          <Image
              src="/images/team.jpeg"
              width={300}
              height={300}
              className="w-100 h-100 img-fluid"
              style={{
                objectFit: "cover",
                minHeight: "300px", 
              }}
              alt="Descriptive Alt Text"
            />
        </motion.div>
      </div>
    </div>
  );
}

export default Mission;
