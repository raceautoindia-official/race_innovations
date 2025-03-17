"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Corporate() {
  return (
    <>
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
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <span style={{ color: "black" }}>Drive the Future with RACE</span>
          <span style={{ color: "#293BB1" }}> – Partner in Innovation!</span>
        </h1>

        <p className="mt-5">
          At Race Innovationss, we are shaping the future of automotive,
          logistics, and engineering solutions.
        </p>
        <p>
          We invite investors and strategic partners to join us in
          revolutionising industries through cutting-edge technology and
          visionary leadership.
        </p>
      </motion.div>
      <div className="container">
        <div className="row">
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

            <h4 className="mt-3">
              <strong>Why Invest in RACE?</strong>
            </h4>
            <p>
              🔹 Industry Disruptor – Pioneering breakthroughs in vehicle
              safety, energy storage, and intelligent mobility.
            </p>
            <p>
              🔹 Expanding Market Presence – Strong footprint across automotive,
              construction, mining, and logistics sectors.
            </p>
            <p>
              🔹 Expert-Led Growth – Backed by a team of industry leaders,
              engineers, and research specialists.
            </p>
            <p>
              🔹 Global Alliances – Collaborating with top international
              innovators to drive next-gen solutions.
            </p>

            <p>
              <strong>Partner with Us & Accelerate Success!</strong>
            </p>

            <p>
              <strong>📌 M.P. Rajesh Khanna</strong>
            </p>
            <p>
              <strong>🧑‍💼 Designation:</strong> Managing Director
            </p>
            <p>
              <strong>✉️ Email:</strong> kh@raceinnovations.in
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98404 90241
            </p>
          </motion.div>
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
                height: "100%",
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
