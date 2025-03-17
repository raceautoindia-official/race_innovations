"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const scrollUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

function Ban() {
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
          overflowX: "hidden", // ✅ Prevents horizontal scrolling
          width: "100vw", // ✅ Ensures it fits within the viewport
        }}
      >
        <div className="container p-0"> {/* ✅ Changed to 'container' instead of 'container-fluid' */}
          <div className="row align-items-center text-center text-md-start m-0">
            {/* Title with Animation */}
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollUpVariants}
              transition={{ duration: 1 }}
            >
              <h1
                className="ms-md-4"
                style={{
                  fontSize: "3rem",
                  whiteSpace: "nowrap",
                  wordBreak: "break-word",
                }}
              >
                <span style={{ color: "#293BB1" }}>Technic</span>
              </h1>
            </motion.div>

            {/* Image Section - Responsive Fix */}
            <motion.div
              className="col-md-8 col-12 p-0 m-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollUpVariants}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ display: "flex", justifyContent: "center" }} // ✅ Centers image properly
            >
              <Image
                src="/images/tech.jpeg"
                width={600}
                height={500}
                className="img-fluid" // ✅ Makes image responsive
                style={{
                  objectFit: "cover",
                  maxWidth: "100%", // ✅ Prevents overflow
                  height: "auto", // ✅ Keeps aspect ratio
                }}
                alt="Technic Image"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Links - Horizontal Scroll in Mobile */}
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

      {/* CSS for Mobile Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            text-align: center;
          }
          .nav-container {
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
          }
          .nav-container a {
            display: inline-block;
            padding: 10px 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Ban;
