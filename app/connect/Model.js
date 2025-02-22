"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the bottom-to-top animation
const scrollUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Model() {
  return (
    <div className="container">
      <div className="row">
        <motion.div
          className="col-md-6 mt-3"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center">
            <span style={{ color: "black" }}>Operating</span>
            <span style={{ color: "#293BB1" }}> Model</span>
          </h1>
        </motion.div>

        <motion.div
          className="col-md-6 mt-3"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-center">Features</h1>
        </motion.div>
      </div>

      <div className="row">
        <motion.div
          className="col-md-6 mt-4"
          style={{
            backgroundColor: "#e6e6fa",
            padding: "20px",
            borderRadius: "10px",
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1 }}
        >
          {[
            {
              number: "01",
              color: "linear-gradient(to right, #007bff, #0056b3)",
              text: "Engineering resource to support in development, testing, validating new products for different applications.",
            },
            {
              number: "02",
              color: "linear-gradient(to right, #ff9800, #e65100)",
              text: "Program manager with marketing skill supported by a team of dedicated resources to run the operation.",
            },
            {
              number: "03",
              color: "linear-gradient(to right, #4caf50, #2e7d32)",
              text: "Additional resources covering other functional requirements like manufacturing & operations, logistics, strategic sourcing, accounts.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                padding: "20px",
                boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.15)",
                marginBottom: "20px",
                border: "none",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
                position: "relative",
                overflow: "hidden",
              }}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.3 }}
              variants={scrollUpVariant}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100%",
                  background: item.color,
                  clipPath:
                    "polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "22px",
                  fontWeight: "bold",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                }}
              >
                {item.number}
              </div>
              <p style={{ marginLeft: "15px" }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="col-md-6 mt-4 d-flex justify-content-center"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              textAlign: "left",
            }}
          >
            {[
              "Deployment of trained resources",
              "Classified access to RACE proprietary knowledge repository",
              "Resources to serve various functions of cliental organization",
              "Thrive on excellence, long term contract to perform",
              "Swift and quicker results to our clients",
              "Optimal cost with more benefit",
              "Can mitigate on changing business scenario",
            ].map((feature, index) => (
              <motion.li key={index} className="mt-2">
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="row mt-5">
        <motion.div
          className="col-md-8"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>
            RACE Connect is the cost-effective strategy to experience an
            evolving market and the most efficient method to build relationships
            in new markets. With the Indian Automotive market becoming more
            challenging and competitive, the RACE Connect program helps global
            companies enter the Indian market in the most productive and
            cost-effective manner right from the beginning.
          </p>
        </motion.div>

        <motion.div
          className="col-md-4"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollUpVariant}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/image-68.png"
            width={600}
            height={400}
            className="ms-md-5"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            alt="RACE Connect"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Model;
