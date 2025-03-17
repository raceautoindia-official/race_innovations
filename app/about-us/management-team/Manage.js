"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Manage() {
  return (
    <motion.div
      className="container mt-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="row align-items-center"> 
        {/* Left Column (Image & Name) */}
        <motion.div
          className="col-lg-4 col-md-5 text-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/image (2).jpg"
            width={400} // Increased size for better visibility
            height={400}
            className="img-fluid rounded-circle"
            style={{
              maxWidth: "80%", 
              height: "auto", 
              objectFit: "cover",
            }}
            alt="M.P. Rajesh Khanna"
          />

          <h1 className="mt-3">M.P. Rajesh Khanna</h1>
          <h4>Managing Director</h4>

          {/* Social Media Icons */}
          <div className="mt-4">
            <a
              href="https://www.facebook.com/kh.rajesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} className="ms-3 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-kh-96086411/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="ms-3 text-primary" />
            </a>
          </div>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          className="col-lg-8 col-md-7 mt-5 px-md-4"
          style={{ fontSize: "18px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h1 className="mt-3">
            <span style={{ color: "black", marginRight: "10px" }}>Message</span>
            <span style={{ color: "#293BB1" }}>from the MD</span>
          </h1>
          <p>
            RACE is driven by the ambition to unlock the full potential of the
            automotive industry. Today, the Indian automotive, agricultural,
            construction, and mining sectors face numerous challenges—some
            seemingly minor but with a significant impact. At the heart of our
            mission is a deep understanding of these industries and their
            applications. Race Innovationss is committed to exploring these
            complexities and delivering practical solutions by leveraging our
            strong engineering expertise, rigorous research, and extensive
            project management capabilities.
          </p>
          <p>
            RACE aspires to create a holistic and meaningful impact for all key
            stakeholders in this ecosystem. We recognise that, while the sector
            faces various hurdles, each challenge presents an opportunity for
            innovation and progress. Through collaboration, insight, and
            expertise, we aim to shape a smarter, more efficient future for the
            industry.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Manage;
