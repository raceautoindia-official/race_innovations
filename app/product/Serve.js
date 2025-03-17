"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Serve() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <>
      <h5
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        className="mt-4"
      >
        <span style={{ color: "black" }}>Industries</span>
        <span style={{ color: "#293BB1", marginLeft: "9px" }}>We Serve</span>
      </h5>

      <div
        className="container-fluid"
        style={{
          backgroundImage: 'url("/images/silver-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
        }}
      >
        <div className="container mt-5" ref={sectionRef}>
          {[
            [
              { img: "/images/group-11.png", title: "Automotive", desc: "Industry outlook, vehicle technology trends, sales forecasting, and dealership insights." },
              { img: "/images/group-15.png", title: "Manufacturing & Industrial Equipment", desc: "Supply chain optimization, product feasibility studies, and market penetration strategies." },
            ],
            [
              { img: "/images/group-14.png", title: "Farm Machinery & Equipment", desc: "Market trends, innovation analysis, and competitive benchmarking." },
              { img: "/images/group-13.png", title: "Technology & Innovation", desc: "Digital transformation trends, adoption studies, and emerging tech research." },
            ],
            [
              { img: "/images/group-11.png", title: "Construction Machinery", desc: "Demand assessment, fleet management insights, and regulatory analysis." },
              { img: "/images/group-12.png", title: "Consumer Goods & Retail", desc: "Market entry strategies, pricing analysis, and brand perception studies." },
            ],
          ].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="row mt-5"
              initial={{ opacity: 0, y: 50 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
            >
              {row.map((industry, colIndex) => (
                <div className="col-md-6" key={colIndex}>
                  <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                      <Image
                        src={industry.img}
                        width={150}
                        height={150}
                        className="card-img-top"
                        style={{ width: "40%", height: "auto", objectFit: "contain" }}
                        alt={industry.title}
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="mt-4" style={{ color: "#293BB1" }}>{industry.title}</h5>
                      <p>{industry.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Serve;
