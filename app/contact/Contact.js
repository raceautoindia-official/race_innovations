"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container-fluid mt-3 d-flex flex-column align-items-center justify-content-center position-relative"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/images/image-72.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {/* Overlay to dim the image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for dim effect
        }}
      ></div>

      {/* Content (text) */}
      <motion.h1
        className="text-white position-relative"
        style={{ fontSize: "clamp(2rem, 5vw, 5rem)", zIndex: 1 }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>
    </motion.div>
  );
}

export default Contact;
