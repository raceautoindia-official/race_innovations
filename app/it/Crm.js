"use client";
import Image from "next/image";
import React from "react";

function Crm() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mt-4">
          <h3 style={{ color: "#293BB1" }}>
            Customized CRM Solutions & App Development
          </h3>
          <div className="mt-3" style={{ textAlign: "justify" }}>
            Transform customer engagement with our AI-driven CRM, integrating
            Machine Learning (ML) and Large Language Models (LLMs) for smart
            automation and data-driven decision-making.
          </div>
          <div style={{ textAlign: "justify" }}>
            <strong>Key Features:</strong>
            <ul>
              <li className="mt-2">
                <strong>Custom AI-Integrated CRM –</strong> Tailored solutions
                powered by AI, ML, and LLMs to automate workflows and enhance
                customer interactions.
              </li>
              <li className="mt-2">
                <strong>Lead & Sales Pipeline Management –</strong> AI-driven
                tracking, predictive insights, and automation for seamless
                lead nurturing and conversions.
              </li>
              <li className="mt-2">
                <strong>Intelligent Follow-Ups & Reporting –</strong> 
                LLM-powered communication, automated reminders, and real-time
                analytics for proactive customer engagement.
              </li>
              <li className="mt-2">
                <strong>Seamless Integration –</strong> Effortlessly connect
                CRM with marketing, finance, and operations for a unified
                business ecosystem.
              </li>
            </ul>
          </div>
          <button className="custom-button mt-2 p-2 ms-4">For Enquiries</button>
        </div>
        <div className="col-lg-6 mt-3">
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/crm.png"
              alt="Globe showing world map"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-button {
          border: 2px solid #293bb1;
          color: black;
          background: white;
          border-radius: 50px;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          background-color: rgba(164, 151, 151, 0.12);
        }

        .custom-button:hover {
          background: #293bb1;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Crm;
