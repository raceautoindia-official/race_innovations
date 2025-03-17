"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function Industry() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="container-fluid mt-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="row align-items-center">
        {/* Video Section - Full width on mobile, 50% on medium+ screens */}
        <div className="col-12 col-md-6 mb-4">
          <div className="ratio ratio-16x9">
            <motion.div
              className="w-100 d-flex justify-content-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {isMounted && (
                <ReactPlayer
                  url="https://youtu.be/Zz2KlzvTqFY"
                  controls
                  playing={true}
                  muted={true}
                  width="100%"
                  height="auto" // ✅ Fix for mobile responsiveness
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Text Section - Full width on mobile, 50% on medium+ screens */}
        <div className="col-12 col-md-6 mt-2 text-center text-md-start">
          <motion.h1
            className="d-flex justify-content-center justify-content-md-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="me-2" style={{ color: "black" }}>Our</span>
            <span style={{ color: "#293BB1" }}>Industry</span>
          </motion.h1>

          <motion.p
            className="text-muted px-3 px-md-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            RACE has a global presence, spanning Europe, East, West, and North Africa, North and Latin America, Korea, China, the UK, as well as other Asian and SAARC nations, with its headquarters in India. Our international reach, application-focused approach, and deep expertise in the automotive, farm equipment and implements, construction, and mining sectors make us the ideal local partner for OEMs, vehicle aggregate manufacturers, fleet operators, and logistics service providers.
          </motion.p>

          <motion.button
            className="btn mt-3"
            style={{
              width: "198.79px",
              height: "45.72px",
              backgroundColor: "#A497971F",
              borderRadius: "19.88px",
              border: "0.99px solid #A497971F",
              transform: "rotate(0.79deg)",
            }}
            initial={{ opacity: 0, y: 100 }}
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
