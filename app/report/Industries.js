"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Industries() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Slide-up animation
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Title Animation */}
      <motion.h5
        className="mt-4 text-center"
        style={{ fontSize: "2.5rem", whiteSpace: "nowrap" }}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <span style={{ color: "black" }}>Industries</span>
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>We Serve</span>
      </motion.h5>

      <div
        className="container-fluid"
        style={{
          backgroundImage: 'url("/images/silver-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mt-5">
          {/* Row 1 */}
          <motion.div
            className="row mt-5"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
            onViewportEnter={() => setHasAnimated(true)}
          >
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-11.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Automotive"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Automotive</h5>
                  <p>Industry outlook, vehicle technology trends, sales forecasting, and dealership insights.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-15.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Manufacturing & Industrial Equipment"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Manufacturing & Industrial Equipment</h5>
                  <p>Supply chain optimization, product feasibility studies, and market penetration strategies.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="row mt-5"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
          >
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-14.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Farm Machinery & Equipment"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Farm Machinery & Equipment</h5>
                  <p>Market trends, innovation analysis, and competitive benchmarking.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-13.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Technology & Innovation"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Technology & Innovation</h5>
                  <p>Digital transformation trends, adoption studies, and emerging tech research.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="row mt-5"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideFromBottom}
          >
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-11.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Construction Machinery"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Construction Machinery</h5>
                  <p>Demand assessment, fleet management insights, and regulatory analysis.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <Image
                    src="/images/group-12.png"
                    width={150}
                    height={150}
                    className="card-img-top"
                    style={{ width: "40%", height: "auto", objectFit: "contain" }}
                    alt="Consumer Goods & Retail"
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="mt-4" style={{ color: "#293BB1" }}>Consumer Goods & Retail</h5>
                  <p>Market entry strategies, pricing analysis, and brand perception studies.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Industries;
