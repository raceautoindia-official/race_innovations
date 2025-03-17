"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Ref() {
  return (
    <div className="container">
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
            src="/images/image-65.png"
            width={600}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out", 
            }}
            alt="Descriptive Alt Text"
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
          <p>
            RACE engineering team is fully equipped to support the clients with
            various applications and interface engineering enabling the
            automotive market to realize the complete potential of their
            products & services. This involves adequate understanding of the
            technical needs, operating conditions like terrain, location, usage
            pattern, and packaging requirements with partners in the value
            chain.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Ref;
