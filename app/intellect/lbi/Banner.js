"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slideUpOnce = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Banner() {
  return (
    <>
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/route-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
        initial="hidden"
        animate="visible"
        variants={slideUpOnce}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <motion.div
              className="col-md-4 col-12 mb-4 mb-md-0"
              initial="hidden"
              animate="visible"
              variants={slideUpOnce}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1
                className="ms-md-4"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#293BB1" }}>LBI Route Survey</span>
              </h1>
            </motion.div>

            <motion.div
              className="col-md-8 col-12"
              initial="hidden"
              animate="visible"
              variants={slideUpOnce}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Image
                src="/images/route.png"
                width={600}
                height={400}
                className="ms-md-5"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                alt="Route Image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 text-center"
        style={{ backgroundColor: "#676A6E", color: "white" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpOnce} 
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

export default Banner;
