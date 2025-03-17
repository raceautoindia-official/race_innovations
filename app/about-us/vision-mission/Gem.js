"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, DollarSign, FileText, Users, ShieldCheck, LifeBuoy, ClipboardList } from "lucide-react"; // Import icons
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Gem() {
  const [openItem, setOpenItem] = useState("collapseOne");

  return (
    <>
      <motion.h1
        className="mt-4 mb-5"
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
        <span style={{ color: "black" }}>GEM</span>
        <span style={{ color: "#293BB1", marginLeft: "15px" }}>Model</span>
      </motion.h1>

      <motion.div
        className="container mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ fontSize:"20px" }}
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

      {/* Accordion Section */}
      <motion.div
        className="container mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="accordion" id="myAccordion">
          {[
           {
            id: "collapseOne",
            title: "Generate",
            style: { fontSize: "45px" },
            icon: <Briefcase />,
            content: (
              <>
                <p style={{ fontSize: "15px" }}>
                  RACE team is driven by consultants, design engineers, and managers
                  with extensive experience in the automotive & transportation
                  industry. Our experts capture futuristic market trends by deeply
                  understanding the industry through collaborative involvement.
                </p>
                <p style={{ fontSize: "15px" }}>
                  Our industry-specific knowledge enables us to build winning
                  business strategies and deliver tailored automotive applications to
                  OEMs, component manufacturers, fleet operators, and regulatory
                  bodies.
                </p>
              </>
            ),
          },
          {
            id: "collapseTwo",
            title: "Execute",
            style: { fontSize: "45px" },
            icon: <CheckCircle />,
            content: (
              <>
                <p style={{ fontSize: "15px" }}>
                  RACE’s extensive project management and technical expertise enable
                  us to execute complex automotive & transportation projects
                  successfully.
                </p>
                <p style={{ fontSize: "15px" }}>
                  Our execution strategy ensures effective planning, proactive issue
                  resolution, and seamless project delivery.
                </p>
                <ul style={{ fontSize: "15px", listStyle: "none", paddingLeft: 0 }}>
                  <li>
                    <strong>📌 Project Scoping:</strong> Defines project scope and
                    feasibility.
                  </li>
                  <li>
                    <strong>💰 Cost Control:</strong> Optimized financial analysis.
                  </li>
                  <li>
                    <strong>📄 Business Case:</strong> Validates investments and ROI.
                  </li>
                  <li>
                    <strong>🔍 Vendor Evaluation:</strong> Uses a robust supplier
                    assessment system.
                  </li>
                  <li>
                    <strong>🛡 Risk Management:</strong> Ensures compliance and
                    mitigation.
                  </li>
                  <li>
                    <strong>🤝 Post-Project Support:</strong> Seamless transition and
                    support.
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "collapseThree",
            title: "Measure",
            style: { fontSize: "45px" },
            icon: <FileText />,
            content: (
              <>
                <p style={{ fontSize: "15px" }}>
                  RACE's innovative delivery model helps clients leverage our
                  resources, expertise, and technology globally.
                </p>
                <p style={{ fontSize: "15px" }}>
                  Our value-driven approach ensures clear ROI, real-time monitoring,
                  and measurable business outcomes.
                </p>
              </>
            ),
          },
          ].map((item) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button custom-accordion-button ${openItem === item.id ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  aria-expanded={openItem === item.id ? "true" : "false"}
                  aria-controls={item.id}
                  onClick={() => setOpenItem(openItem === item.id ? "" : item.id)}
                >
                  <span className="title-container">
                    {item.title} <span className="icon">{openItem === item.id ? "−" : "+"}</span>
                  </span>
                </button>
              </h2>
              <div
                id={item.id}
                className={`accordion-collapse collapse ${openItem === item.id ? "show" : ""}`}
                data-bs-parent="#myAccordion"
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .custom-accordion-button {
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            display: flex;
            align-items: center;
            font-weight: bold;
            padding: 10px 15px;
          }

          .custom-accordion-button:focus {
            box-shadow: none;
          }

          .title-container {
            display: flex;
            align-items: center;
            gap: 10px; /* Creates space between text and + */
          }

          .icon {
            font-size: 1.2rem;
            font-weight: bold;
          }
            .custom-accordion-button::after {
  display: none !important; /* Hides Bootstrap's default arrow */
}
.custom-accordion-button span {
  font-size: 25px !important;
}

        `}</style>
      </motion.div>
    </>
  );
}

export default Gem;
