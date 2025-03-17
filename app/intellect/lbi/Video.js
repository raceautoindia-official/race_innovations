"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to prevent SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Video() {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Bottom-to-top animation for the container
  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Text animation with staggered delay
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 }, // Stagger effect
    }),
  };

  return (
    <>
      {/* Video Section */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideFromBottom}
        onViewportEnter={() => setHasAnimated(true)}
      >
        <div className="row align-items-center">
          {/* Video Column */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <ReactPlayer
              url="https://youtu.be/5bL0P3xsPGQ?feature"
              controls
              playing={true}
              muted={true}
              width="100%"
              loop={true}
              height="350px"
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6">
            {[
              "Location-Based Intelligence emphasizes facilitating hindrance-free movement of goods by conducting route surveys by a team of experts. The LBI team specializes in providing reports with recommendations that help users move freely without any difficulties. LBI uses advanced technology and applications to increase accuracy and reliability.",
              "RACE has a team of professional engineering & civil experts to execute route surveys, identify the shortest feasible routes, ensure load securing, perform vehicle stability calculations, and determine bridge capacity and road filling requirements with associated civil costs for safe & economical cargo transportation.",
              "Additionally, the RACE Team is well-equipped to support various industries, logistics, and transportation companies in designing specialized trailers tailored to their specific cargo and applications.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textVariant}
                custom={i + 1} // Stagger delay
                className="mb-3"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Video;
