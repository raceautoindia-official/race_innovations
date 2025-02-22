"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Product() {
  return (
    <>
      {/* Title */}
      <motion.h1
        className="d-flex justify-content-center text-center mt-2"
        initial={{ opacity: 0, y: 100 }} // Scroll up from bottom
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="me-4" style={{ color: "black" }}>Our </span>
        <span style={{ color: "#293BB1" }}>Products</span>
      </motion.h1>

      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/tech.jpeg"
                width={1000}
                height={500}
                alt="Tech Image"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </motion.div>

            <motion.h1
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Intellect
            </motion.h1>

            <motion.h4
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              RACE has a global presence
            </motion.h4>

            <motion.p
              className="mt-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
             “Intellect” is one of the core solution offerings of RACE. Our strong network of market research and consulting team continuously tracks the Indian, global automotive market to provide clients with rich, extensive insights on market entry strategies, product launch, competitive strategy, mega trends, vehicle/ component OEM strategies, regulatory/statutory tracking, customer behaviour analysis and manufacturing feasibility.
            </motion.p>

            <motion.button
              className="btn btn-outline-primary"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                width: "198.79px",
                height: "45.72px",
                borderRadius: "19.88px",
                borderWidth: "0.99px",
              }}
            >
              Learn More
            </motion.button>

            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/world.jpg"
                width={800}
                height={400}
                style={{ width: "100%", height: "auto" }}
                alt="World Image"
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <motion.h1
              style={{ color: "#293BB1" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Technic
            </motion.h1>

            <motion.h4
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: true }}
            >
              RACE has a global presence
            </motion.h4>

            <motion.p
              className="mt-3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
             RACE engineering team is fully equipped to support the clients with various applications and interface engineering enabling the automotive market to realize the complete potential of their products & services, this involves adequate understanding of the technical needs, operating conditions like terrain, location, usage pattern and packaging requirements with partners in the value chain.
            </motion.p>

            <motion.button
              className="btn"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
              viewport={{ once: true }}
              style={{
                width: "198.79px",
                height: "45.72px",
                backgroundColor: "#A497971F",
                borderRadius: "19.88px",
                borderWidth: "0.99px",
                borderStyle: "solid",
                borderColor: "#293BB1",
                transform: "rotate(0.79deg)",
              }}
            >
              Learn More
            </motion.button>

            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/light.jpg"
                width={800}
                height={1200}
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
                alt="Bright glowing light concept"
              />
            </motion.div>

            <div className="mt-5">
              <motion.h1
                style={{ color: "#293BB1" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                viewport={{ once: true }}
              >
                Connect
              </motion.h1>

              <motion.h4
                className="mt-2"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                viewport={{ once: true }}
              >
                RACE has a global presence
              </motion.h4>

              <motion.p
                className="mt-3"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true }}
              >
                RACE Application Engineering capability helps company do develop right product for Indian application requirement.

              </motion.p>

              <motion.button
                className="btn btn-outline-primary"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                viewport={{ once: true }}
                style={{
                  width: "198.79px",
                  height: "45.72px",
                  borderRadius: "19.88px",
                  borderWidth: "0.99px",
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
