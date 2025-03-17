"use client"
import React from "react";
import Image from "next/image";

function Ttl() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/ttl.png"
              alt="Globe showing world map"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <h3 style={{ color: "#293BB1" }}>
            Website, TTL, and Mass Communication Solutions
          </h3>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            We build AI-powered, SEO-optimized websites designed to grow your
            business. No cookie-cutter solutions—just custom web development
            tailored to your needs. Our expert team handles everything from well-
            researched SEO-enabled contents, stunning designs to
            high-performance applications, ensuring a seamless user experience
            and a strong online presence.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>
              Whether it’s eCommerce, secure payments, or mobile-friendly
              design, we use the latest tech to create smart, scalable websites
              that rank higher and convert better.
            </strong>
          </p>
          <button
            className="custom-button mt-2 p-2"
          >
            For Enquiries
          </button>
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
    </div>
  );
}

export default Ttl;
