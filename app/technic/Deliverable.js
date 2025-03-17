"use client";

import React from "react";
import { motion } from "framer-motion";

const scrollUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

function Deliverable() {
  return (
    <div className="container">
      <h1 style={{ color: "#293bb1" }} className="text-center">
        Deliverable
      </h1>
      <div className="row justify-content-center mt-5">
        {[
          {
            title: "Application & Interface Engineering",
            description: "Bus & Truck bodies Packaging the vehicle",
          },
          {
            title: "Validation of Testing",
            description: "Proto development & Design Verification",
          },
          {
            title: "Product Engineering",
            description: "Bus & Truck Chassis & Specialized Vehicles",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="col-12 col-md-4 d-flex justify-content-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scrollUpVariants}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {/* Card Wrapper */}
            <div
              className="d-flex flex-column align-items-center"
              style={{
                width: "250px",
                height: "180px",
                backgroundColor: "#673ab7",
                borderRadius: "20px",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                padding: "15px",
              }}
            >
              {/* Inner White Card */}
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "20px",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h6 className="text-center" style={{ color: "#673ab7" }}>
                  {item.title}
                </h6>
                <p className="text-center" style={{ fontSize: "14px", margin: "0" }}>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Deliverable;
