"use client";

import React from "react";
import { motion } from "framer-motion";

function Industry() {
  return (
    <motion.div
      className="container-fluid mt-5"
      initial={{ opacity: 0, y: 100 }} // Scroll-up effect starts from below
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation runs only once
    >
      <div className="row">
        {/* Video Section */}
        <div className="col-md-6 mb-4">
          <div className="ratio ratio-16x9">
            <motion.video
              controls
              className="w-100 rounded"
              initial={{ opacity: 0, y: 100 }} // Scroll-up effect
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <source src="/videos/industry.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-6 mt-2">
          <motion.h1
            className="d-flex"
            initial={{ opacity: 0, y: 100 }} // Heading scroll-up
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="me-4" style={{ color: "black" }}>Our </span>
            <span style={{ color: "#293BB1" }}>Industry</span>
          </motion.h1>

          <motion.p
            className="text-muted"
            initial={{ opacity: 0, y: 100 }} // Paragraph scroll-up
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            RACE has a global presence in 6 countries and is headquartered in
            India. Our global reach, application-centric approach, and deep
            domain expertise in the commercial vehicle industry vertical make us
            an ideal local business partner for OEMs, vehicle aggregate
            manufacturers, fleet operators, and logistics service providers.
          </motion.p>

          <motion.button
            className="btn"
            style={{
              width: "198.79px",
              height: "45.72px",
              backgroundColor: "#A497971F",
              borderRadius: "19.88px",
              border: "0.99px solid #A497971F",
              transform: "rotate(0.79deg)",
            }}
            initial={{ opacity: 0, y: 100 }} // Button scroll-up
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            GET STARTED <i className="bi bi-arrow-right ms-2"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Industry;
