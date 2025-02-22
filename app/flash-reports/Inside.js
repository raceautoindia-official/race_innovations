"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Inside() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        className="container-fluid mt-5"
        style={{
          backgroundImage: 'url("/images/liquid-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "130vh",
        }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        {/* Heading */}
        <motion.h4
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          className="mt-4"
          variants={slideFromBottom}
        >
          <span style={{ color: "black" }}>What’s Inside a</span>
          <span style={{ color: "#293BB1", marginLeft: "15px" }}>
            Flash Report
          </span>
        </motion.h4>

        {/* Cards Container */}
        <div className="container mt-4">
          <div className="row justify-content-center">
            {[
              {
                img: "/images/4.png",
                title: "Industry Trends & Market Forecasting",
                text: "Growth opportunities to help businesses navigate industry shifts.",
              },
              {
                img: "/images/5.png",
                title: "Competitive Intelligence & Benchmarking",
                text: "Understand strategies, pricing, and market positioning for competitive advantage.",
              },
              {
                img: "/images/3.png",
                title: "Product & Concept Testing",
                text: "Validate new products, services, and technologies before market launch through extensive feasibility studies.",
              },
              {
                img: "/images/1.png",
                title: "Consumer Behaviour & Demand Analysis",
                text: "Uncover customer preferences and brand perception to refine your product and marketing strategies.",
              },
              {
                img: "/images/2.png",
                title: "Supply Chain & Distribution Research",
                text: "Optimize operations with insights into supply chain efficiency, vendor selection, and distribution channel performance.",
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4 mt-4"
                key={index}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={slideFromBottom}
                transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
                onViewportEnter={() => setHasAnimated(true)}
              >
                <div
                  className="card p-3 text-center"
                  style={{
                    maxWidth: "350px",
                    maxHeight: "500px",
                    margin: "auto",
                  }}
                >
                  <Image
                    src={item.img}
                    width={250}
                    height={250}
                    className="card-img-top"
                    style={{
                      width: "80%",
                      height: "auto",
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                    alt={item.title}
                  />
                  <h5 className="mt-4">{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Inside;
