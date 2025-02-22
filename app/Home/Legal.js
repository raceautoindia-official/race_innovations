"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Legal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="container-fluid d-flex align-items-center justify-content-center"
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Legal Section */}
          <motion.div
            className="col-md-4 col-12 text-center text-md-start"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 style={{ color: "#293BB1" }}>Legal</h1>
            <h4 className="mt-3">RACE has a global presence</h4>
            <p className="mt-3">
              Most businesses face complex legal and commercial pressures when operating internationally. Our members guide you through the legal issues encountered while conducting business overseas.
            </p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="btn w-100"
              style={{
                maxWidth: "200px",
                backgroundColor: "#A497971F",
                borderRadius: "20px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#293BB1",
              }}
            >
              Learn More
            </motion.button>

            {/* Accounting Section */}
            <motion.h1
              style={{ color: "#293BB1" }}
              className="mt-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Accounting
            </motion.h1>
            <h4 className="mt-3">RACE has a global presence</h4>
            <p className="mt-3">
              RACE associates have worked with various industries, supporting export/import and business needs. Our expert advisors provide actionable steps for doing business across international borders.
            </p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="btn w-100"
              style={{
                maxWidth: "200px",
                backgroundColor: "#A497971F",
                borderRadius: "20px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#293BB1",
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Accounting Image */}
          <motion.div
            className="col-md-4 col-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/accouting-1.jpg"
              width={800}
              height={500}
              className="img-fluid"
              alt="Accounting"
            />
          </motion.div>

          {/* AI Image */}
          <motion.div
            className="col-md-4 col-12"
            style={{ marginTop: "10rem" }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/al.jpg"
              alt="Artificial Intelligence concept illustration"
              width={800}
              height={600}
              className="img-fluid"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Legal;
