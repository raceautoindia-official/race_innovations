"use client";

import React from "react";
import { motion } from "framer-motion";

function Lbi() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        width: "100%",
        height: "100vh",
        background: `url('/images/gg.jpg') no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "10px",
        alignItems: "center",
      }}
      className="mt-3"
    >
      <h1 style={{ color: "#293BB1" }}>LBI Route Survey</h1>
      <h4 className="mt-3">RACE has a global presence</h4>
      <p className="mt-3 text-center">
        Location Based Intelligence emphasis<br></br> on facilitating hindrance-free movement of goods by <br></br>
        conducting route surveys by a team of<br></br> experts. LBI team expertise in providing reports with <br></br>
        recommendations which helps the <br></br> users to move freely without any difficulties.
      </p>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="btn btn-outline-primary"
        style={{
          width: "198.79px",
          height: "45.72px",
          borderRadius: "19.88px",
          borderWidth: "0.99px",
        }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}

export default Lbi;
