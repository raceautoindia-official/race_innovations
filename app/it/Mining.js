"use client"
import React from "react";
import Image from "next/image";
function Mining() {
  return (
    <>
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-6">
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/mining.png"
              alt="Globe showing world map"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className="col-lg-6">

            <h3 style={{ color: "#293BB1" }}>
              Data Mining & Business Intelligence
            </h3>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Leverage AI-powered insights for smarter decision-making and
              competitive advantage.
            </p>
            <ul>
              <li className="mt-2">
                Custom AI-Integrated CRM  Tailored solutions
                powered by AI, ML, and LLMs to automate workflows and enhance
                customer interactions.
              </li>
              <li className="mt-2">
                Market Research & Competitor Analysis – Data-driven strategies
                to uncover trends and opportunities.
              </li>
              <li className="mt-2">
                Automated Data Mining – AI-driven extraction, analysis, and
                trend prediction.
              </li>
              <li className="mt-2">
                Web Scraping – Real-time data collection for actionable business
                intelligence.
              </li>
            </ul>
            <button className="custom-button mt-2 p-2 ms-4">For Enquiries</button>
          </div>
        </div>
      </div>
      <style jsx>{`
    .custom-button {
      border: 2px solid #293BB1;
      color: black;
      background: white;
      border-radius: 50px;
      padding: 8px 20px;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.3s ease;
      background-color:rgba(164, 151, 151, 0.12);
    }

    .custom-button:hover {
      background: #293BB1;
      color: white;
    }
  `}</style>
  </>
  );
}

export default Mining;
