"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Manage() {
  return (
    <motion.div
      className="container mt-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="row">
        {/* Image and Name Section */}
        <motion.div
          className="col-md-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/image (2).jpg"
            width={300}
            height={300}
            className="ms-5"
            style={{
              width: "70%",
              height: "70%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt="M.P. Rajesh Khanna"
          />

          <h1 className="text-center mt-3">M.P. Rajesh Khanna</h1>
          <h4 className="text-center">Managing Director</h4>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center mt-4">
            <FaInstagram size={30} style={{ color: "#E4405F" }} />
            <FaFacebook size={30} style={{ color: "#1877F2" }} className="ms-4" />
            <FaTwitter size={30} style={{ color: "#1DA1F2" }} className="ms-4" />
            <FaLinkedin size={30} style={{ color: "#0077B5" }} className="ms-4" />
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="col-md-8 mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <p>
            RACE is a dream to realize the overall potential of the Indian Logistics & Transportation Industry. 
            Currently, the Indian Logistics and Transportation sector is constrained by many trivial challenges, 
            of which understanding the nitty-gritty of the commercial vehicle market and its applications is of prime focus. 
            RACE Innovations primarily focuses on studying applications and implementing diverse projects by leveraging its 
            robust engineering, immaculate research techniques, and extensive project management capabilities.
          </p>
          <p>
            RACE is a dream to realize the overall potential of the Indian Logistics & Transportation Industry. 
            Currently, the Indian Logistics and Transportation sector is constrained by many trivial challenges.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Manage;
