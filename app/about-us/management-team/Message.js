"use client"; // ✅ Required for animations in Next.js 15+

import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Animation Variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Message() {
  return (
    <div className="container mt-5">
      {/* Title with Animation */}
      <motion.h1
        className="ms-4 d-flex justify-content-center"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
          width: "100%",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1 }}
      >
        <span style={{ color: "black", marginRight: "10px" }}>Message</span>
        <span style={{ color: "#293BB1" }}>from the MD</span>
      </motion.h1>

      {/* Animated Paragraphs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p>Dear Stakeholders,</p>
        <p>Greetings!</p>

        <p>
          Thank you for your valuable time and patience in visiting our website.
          It is a great privilege and pleasure to share with you our company’s
          visionary thoughts and growth prospects. In this digital age, the
          increasing convergence of technology and business has ushered in a new
          level of competition in the global marketplace. Moreover, evolving
          market dynamics, diminishing profit margins, and an uncertain economic
          climate have transformed how organizations operate. Innovation has
          taken center stage, driving organizations to reach new pinnacles of success
          through continuous growth.
        </p>

        <p>
          RACE is a dream to unlock the full potential of the Indian Logistics &
          Transportation Industry. Currently, this sector faces many challenges,
          and understanding the intricacies of the commercial vehicle market and
          its applications remains a priority. At RACE Innovations, we focus on
          studying applications and implementing diverse projects by leveraging
          robust engineering, cutting-edge research techniques, and extensive
          project management expertise.
        </p>

        <p>
          In an industry where quality, innovation, and reliability determine an
          organization’s success, RACE Innovations takes a visionary approach to
          drive growth. Our deep understanding of customer needs allows us to add
          significant value to their businesses while maintaining a balanced
          long-term vision. I am proud to see RACE gaining substantial momentum
          and evolving into a recognized brand in the industry. Many of our
          clients acknowledge our expertise and continue to trust our ability to
          deliver cutting-edge design, engineering, and research solutions.
        </p>

        <p>
          Today, our clientele includes <strong>25 companies</strong>, ranging from emerging
          businesses to top automotive majors worldwide. By 2025, we aspire to
          expand our customer base to <strong>200 companies</strong> and achieve a turnover of
          <strong>1 billion INR</strong>.
        </p>

        <p>
          Our partnership with <strong>Telma</strong> through the “India Connect” program for
          Electromagnetic Retarders has become a benchmark for international
          companies entering the Indian market through RACE. Similarly, many
          domestic companies utilize our “RACE Connect” services for their
          marketing and expansion needs. Our <strong>in-depth research, strong industry
          expertise, and strategic approach</strong> empower the RACE Intellect Team to
          deliver impactful solutions that enhance our clients' value proposition.
        </p>

        <p>
          RACE’s <strong>domain expertise and agile business structure</strong> are driven by a
          dynamic team of experienced engineers and managers from diverse industry
          backgrounds, including consulting firms, OEMs, and fleet operators. We
          strongly believe in fostering an <strong>open work culture</strong> and encouraging
          entrepreneurial thinking in our employees, which fuels our pursuit of
          excellence across all operations.
        </p>

        <p>
          As RACE Innovations continues to grow, we remain committed to <strong>delivering
          best-in-class solutions</strong> that positively impact our clients' growth
          objectives. I extend my heartfelt gratitude to our employees, customers,
          and industry partners for being part of the RACE journey. Let us work
          together to turn our visionary dreams into reality!
        </p>

        <p><strong>M.P. Rajesh Khanna</strong></p>
        <p>Managing Director</p>
      </motion.div>
    </div>
  );
}

export default Message;
