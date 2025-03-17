"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to disable SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const scrollUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

function First() {
  return (
    <>
      {/* Background Section */}
      <div
        className="container-fluid mt-3 p-0 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="container-fluid p-0">
          <div className="row align-items-center text-center text-md-center m-0">
            {/* Title */}
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <h1
                className="ms-md-4"
                style={{ fontSize: "3.5rem", whiteSpace: "nowrap" }}
              >
                <span style={{ color: "#293BB1" }} className="text-center">Intellect</span>
              </h1>
            </motion.div>

            {/* Video Section */}
            <motion.div
              className="col-md-8 col-12 p-0 m-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <ReactPlayer
                url="https://youtu.be/AZwxqB1Q40I?si=AeOCwIcCD3JW5oHD"
                controls
                playing
                muted
                width="100%"
                height="400px"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollUpVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {[
          { name: "Technic", link: "/technic" },
          { name: "Intellect", link: "/intellect" },
          { name: "Connect", link: "/connect" },
          { name: "LBI Route Survey", link: "/intellect/lbi" },
          { name: "Accounting & Legal", link: "/accounting-and-legal" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="m-2 text-white text-decoration-none"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}

export default First;
