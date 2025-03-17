"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Lbi() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        width: "100%",
        height: "100vh",
        background: `url('/images/gg.jpg') no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "10px",
        alignItems: "center",
      }}
      className="mt-3"
    >
      <div className="d-flex justify-content-center">
        <div className="col-md-6 text-center">
          {" "}
          {/* Adjust column width as needed */}
          <h1 style={{ color: "#293BB1" }}>
            LBI-Route Survey For
            <br /> Over Dimensional Cargo (ODC)
          </h1>
          <p className="mt-3" style={{ color: "#555555" }}>
            Location Based Intelligence emphasis on facilitating hindrance-free
            movement of goods by conducting route surveys by a team of experts.
            LBI team expertise in providing reports with recommendations which
            help the users to move freely without any difficulties. LBI uses
            advanced technology and applications to increase accuracy and
            reliability. RACE has a professional engineering & civil team to
            execute route surveys, identify the shortest feasible routes, load
            securing, vehicle stability calculations, determining the capacity
            of bridges, road filling information with civil costs for the
            purpose of safe & economical transportation of cargo. Also, the RACE
            Team is well-suited to support many industries, logistics &
            transportation companies in designing specialty trailers specific to
            their cargo/applications.
          </p>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="btn btn-outline-primary"
        style={{
          width: "198.79px",
          height: "45.72px",
          borderRadius: "19.88px",
          borderWidth: "0.99px",
        }}
      >
        <Link
          href="/intellect/lbi"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Learn More
        </Link>
      </motion.button>
    </motion.div>
  );
}

export default Lbi;
