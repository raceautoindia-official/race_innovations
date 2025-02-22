"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Offerings() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/images/rectangle.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "90vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {[
            {
              img: "/images/group.png",
              title: "Syndicated & Ready Reports",
              text: "Includes Voice Of Customers (VOC), competitive framework analysis, price analysis, demand-supply analysis, business feasibility & alignment, product comparison, sourcing/procurement strategies, sales & marketing strategies framework.",
            },
            {
              img: "/images/group.png",
              title: "Location-Based Intelligence",
              text: "Includes market overview, trends & forecast, drivers & restraints, market players, products and applications, business potential & legal framework.",
            },
            {
              img: "/images/group.png",
              title: "Customised Reports & Specific Growth Strategies",
              text: "Provides area & application-specific surveys. Having travelled more than 30,000 kms across India studying logistic scenarios, routes, bridges, and assisting in hindrance-free movement of goods.",
            },
          ].map((offering, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-12 d-flex flex-column align-items-center text-center mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Image
                src={offering.img}
                width={150}
                height={150}
                style={{ objectFit: "contain" }}
                alt={offering.title}
              />
              <h5 style={{ color: "#293BB1" }}>{offering.title}</h5>
              <p>{offering.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offerings;
