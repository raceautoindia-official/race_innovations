"use client"; // ✅ Required for Next.js 15+

import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variant (Scroll Up Effect)
const scrollUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Start from below
  visible: { opacity: 1, y: 0 }, // Move up smoothly
};

function Deliverable() {
  return (
    <div className="container">
      {/* Title */}
      <h1 style={{ color: "#293bb1" }} className="text-center">
        Deliverable
      </h1>

      {/* Boxes Section */}
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
            variants={scrollUpVariants} // ✅ Apply scroll-up effect
            transition={{ duration: 1, delay: index * 0.2 }} // Staggered animation
          >
            <div className="position-relative" style={{ width: "250px", height: "150px" }}>
              {/* Background Box */}
              <div
                className="position-absolute"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#673ab7",
                  borderRadius: "20px",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                }}
              ></div>

              {/* Foreground Box */}
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: "90%",
                  height: "90%",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
                  zIndex: "1",
                }}
              >
                <h6 className="text-center" style={{ color: "#673ab7" }}>
                  {item.title}
                </h6>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Deliverable;
