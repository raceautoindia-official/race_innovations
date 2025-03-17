"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded

function Connect() {
  // Get actual scroll position
  const { scrollY } = useScroll();

  // Smooth scrolling effect
  const smoothScroll = useSpring(scrollY, { damping: 15, stiffness: 500 });

  // Image animation
  const imageOpacity = useTransform(smoothScroll, [0, 600], [0, 1]);
  const imageTranslateY = useTransform(smoothScroll, [0, 600], [100, 0]);

  // Text animation
  const textOpacity = useTransform(smoothScroll, [0, 600], [0, 1]);
  const textTranslateY = useTransform(smoothScroll, [0, 600], [100, 0]);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <motion.div
          className="col-md-6 col-12 text-center text-md-start"
          style={{ opacity: imageOpacity, y: imageTranslateY }}
        >
          <Image
            src="/images/world.jpg"
            alt="Globe showing world map"
            width={800}
            height={600}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-md-6 col-12 mt-4 mt-md-0 text-center text-md-start"
          style={{ opacity: textOpacity, y: textTranslateY }}
        >
          <h1 className="text-primary fw-bold">Connect</h1>
          <h4 className="mt-2 fw-semibold">RACE has a global presence</h4>
          <p className="mt-3">
            RACE Application Engineering capability helps companies develop the
            right product for Indian application requirements.
          </p>
          <button className="btn btn-outline-primary rounded-pill px-4 py-2">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Connect;
