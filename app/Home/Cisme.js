"use client";

import React from "react";
import { motion } from "framer-motion";

function Cisme() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#EEEEF2" }}>
      <motion.div
        className="text-center mt-5"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          controls
          autoPlay
          loop
          muted
          style={{ width: "100%", maxWidth: "100%", borderRadius: "10px" }}
        >
          <source src="/images/cisme.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}

export default Cisme;
