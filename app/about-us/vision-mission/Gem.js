"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Gem() {
  return (
    <>
      {/* Title with Animation */}
      <motion.h1
        className="mt-4"
        style={{
          fontSize: "3rem",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}
      >
        <span style={{ color: "black" }}>Gem</span>
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>Model</span>
      </motion.h1>

      {/* Text Content */}
      <motion.div
        className="container mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p>
          Today, boundaries of competition have vanished, and automotive
          companies are quickly finding ways to systematically revolutionize
          their operational and strategic blueprint. The goal is to create
          stronger differentiation and carve out a newer market space for
          accelerated growth. However, it's not just about quicker growth but
          also about sustaining it by effectively managing costs across the
          entire value chain.
        </p>

        <p>
          In the past, technological investments have helped automotive and
          transportation firms unlock business potential to a great extent. But
          today, organizations need to be smarter in every aspect of their
          operations—from technology to commercialization—while reducing
          ownership costs to derive maximum value. At RACE, we are committed to
          supporting our automotive and transportation clients by delivering
          business intelligence and application solutions to meet tomorrow’s
          market demands with the utmost precision.
        </p>

        <p>
          We believe our GEM philosophy empowers us to tackle anything from
          standard business needs to the most complex projects effectively,
          ensuring measurable results with justified investments. For
          organizations to succeed, smarter decision-making, effective
          execution, and continuous value measurement are the keys to success.
          Our best-practice approach ensures that we enhance our clients' value
          proposition at all times.
        </p>
      </motion.div>

      {/* Image with Animation */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src="/images/image-64.png"
          width={500}
          height={500}
          className="ms-md-5"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="Gem Model Visualization"
        />
      </motion.div>
    </>
  );
}

export default Gem;
