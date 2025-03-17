"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Service() {
  const [animatedIndices, setAnimatedIndices] = useState({});

  useEffect(() => {
    console.log("Framer Motion animations are active...");
  }, []);
  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const services = [
    { img: "/images/4.png", title: "Industry Trends & Market Forecasting", desc: "Growth opportunities to help businesses navigate industry shifts." },
    { img: "/images/5.png", title: "Competitive Intelligence & Benchmarking", desc: "Understand strategies, pricing, and market positioning for competitive advantage." },
    { img: "/images/3.png", title: "Product & Concept Testing", desc: "Validate new products, services, and technologies before market launch. before market launch." },
    { img: "/images/1.png", title: "Consumer Behaviour & Demand Analysis", desc: "Uncover customer preferences, and brand perception to refine your strategies." },
    { img: "/images/2.png", title: "Supply Chain & Distribution Research", desc: "Optimize operations with insights into supply chain efficiency and vendor selection." },
    { img: "/images/4.png", title: "Consumer & End-User Insights", desc: "Understand customer needs, pain points, and preferences through surveys through surveys." },
  ];

  return (
    <div
      className="container-fluid mt-5"
      style={{
        backgroundImage: 'url("/images/liquid-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Title Animation */}
      <motion.h4
        initial="hidden"
        animate="visible"
        variants={slideFromBottom}
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        className="mt-4"
      >
        <span style={{ color: "black" }}>Our Core</span>
        <span style={{ color: "#293BB1", marginLeft: "9px" }}>Research Services</span>
      </motion.h4>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial="hidden"
              animate={animatedIndices[index] ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // ✅ Only animates once
              variants={slideFromBottom}
              onViewportEnter={() => {
                setAnimatedIndices((prev) => ({ ...prev, [index]: true }));
              }}
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
                  src={service.img}
                  width={250}
                  height={250}
                  className="card-img-top"
                  style={{
                    width: "80%",
                    height: "auto",
                    margin: "0 auto",
                    objectFit: "contain",
                  }}
                  alt={service.title}
                />
                <h5 className="mt-4">{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
