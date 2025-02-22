"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Corporate() {
  return (
    <>
      {/* Corporate Overview Section */}
      <motion.div
        className="container d-flex flex-column align-items-center text-center mt-5"
        style={{ justifyContent: "center" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "black" }}>Corporate</span>
          <span style={{ color: "#293BB1" }}> Overview</span>
        </h1>

        <p className="mt-5">
          RACE Connect is the cost-effective strategy to experience an evolving
          market and the most efficient method to build relationships in new
          markets. With the Indian automotive market becoming more challenging
          and competitive, the RACE Connect program helps global companies enter
          the Indian market in the most productive and cost-effective manner
          right from the beginning. Competitive, the RACE Connect program helps
          global companies enter the Indian market in the most productive and
          cost-effective manner right from the beginning.
        </p>
      </motion.div>

      {/* Contact Details Section */}
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "black" }}>Contact</span>
              <span style={{ color: "#293BB1" }}> Details</span>
            </h1>
            <p>
              Investors and Associates willing to partner with RACE success
              story can send in their interest and request to
            </p>
            <p className="mt-5">M.P. Rajesh Khanna</p>
            <p>Managing Director</p>
            <p>kh@raceinnovations.in</p>
            <p>+91 98404 90241</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="col-md-6 mt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <Image
              src="/images/image-80.png"
              width={700}
              height={500}
              alt="Untitled Image"
              style={{
                width: "1000px",
                height: "auto",
                maxWidth: "100%",
                objectFit: "cover",
              }}
              className="responsive-img"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Corporate;
