"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Int() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center text-center text-md-start">
        <motion.div
          className="col-md-4 col-12 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/images/int.jpg"
            width={600}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
            }}
            alt="Intelligence Image"
          />
        </motion.div>

        <motion.div
          className="col-md-7 col-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p style={{ fontSize: "20px" }}>
            “Intellect” is one of the core solution offerings of RACE. Our
            strong network of market research and consulting team continuously
            tracks the Indian, global automotive market to provide clients with
            rich, extensive insights on market entry strategies, product launch,
            competitive strategy, mega trends, vehicle/component OEM strategies,
            regulatory/statutory tracking, customer behavior analysis, and
            manufacturing feasibility.
          </p>
        </motion.div>
      </div>
      <h1 className="text-center">
      <span style={{ color: "black" }}>Unlock Actionable </span>
      <span style={{ color: "#293BB1", marginLeft: "15px" }}>Insights with RACE</span>
      
      </h1>
      <p style={{ fontSize: "20px" }}>
        At RACE, we go beyond data—we decode your business challenges to deliver
        powerful insights that drive growth and success. Our expertise lies in
        providing tailored solutions, equipping you with the right intelligence
        to make informed, high-impact decisions. Our research team operates at
        the forefront of industry trends, gathering real-time field data through
        an extensive network of internal and external associates. With rigorous
        sampling techniques and advanced statistical methodologies, we ensure
        optimal accuracy and minimal margin of error, delivering insights you
        can trust. Every research project undergoes stringent quality checks,
        aligning with internationally recognised standards and tailored to meet
        your specific business needs. Backed by a team of highly skilled
        analysts, senior industry consultants, and research directors, we are
        committed to delivering accurate, unbiased, and comprehensive reports.
        Partner with RACE for research that not only informs but empowers your
        business strategy
      </p>
      <motion.h1
        className="text-center mt-5"
        style={{ fontSize: "3.5rem", fontWeight: "bold" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Features
      </motion.h1>
      <motion.div
        className="row text-center text-md-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {[
          "Comprehensive Data Sources – Insights from OEMs, dealerships, application builders, and Vahan dashboard.",
          "Advanced Analytics – Statistical models ensure high accuracy and minimal errors.",
          "Real-Time Market Tracking – Monitor trends, registrations, and regulatory changes.",
          "Industry-Specific Intelligence – Tailored insights for automotive, logistics, construction, and mining sectors.",
          "High-Quality Compliance – Reports meet international standards and client requirements.",
          "Expert-Led Research – Backed by experienced analysts and industry consultants.",
          "Customisable Dashboards – Interactive reports tailored to business needs.",
          "Competitive Benchmarking – Market comparisons, competitor analysis, and forecasting.",
          "Scalable Solutions – Suitable for startups, OEMs, fleet operators, and policymakers.",
          "Actionable Insights – Strategic recommendations for growth and efficiency.",
          "Clear recommendation guidelines for execution",
          "In-Depth Analysis and use of latest tools & techniques",
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="col-12 col-md-4 mb-3" // 3 columns in medium and large screens
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
          >
            <motion.li
              className="list-unstyled p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {feature}
            </motion.li>
          </motion.div>
        ))}
      </motion.div>

      <motion.h1
        className="text-center mt-5"
        style={{ fontSize: "3.5rem", fontWeight: "bold", color: "#293BB1" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 1, delay: 1 }}
      >
      
      </motion.h1>
    </div>
  );
}

export default Int;
