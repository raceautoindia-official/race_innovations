"use client";
import React from "react";
import { FaGlobe, FaUsers, FaBullhorn, FaDatabase } from "react-icons/fa";
function It() {
  const images = [
    "/images/react.png",
    "/images/next.png",

    "/images/ai.png",
    "/images/figma.png",
    "/images/pr.png",
    "/images/xd.png",
    "/images/wordpress.png",
    "/images/apple.png",
    "/images/android.png",
    "/images/au.png",
    "/images/laravel.png",
    "/images/ae.png",
    "/images/shopify.png",
    "/images/ps.png",
  ];

  const Rightimages = [
    "/images/node.png",
    "/images/spring.png",
    "/images/php.png",
    "/images/python.png",
    "/images/mysql.png",
    "/images/postgresql.png",
    "/images/mongo.png",
    "/images/oracle.png",
    "/images/aws.png",
    "/images/azure.png",
    "/images/google.png",
    "/images/github.png",
    "/images/ubuntu.png",
  ];

  return (
    <>
      <div
        className="container-fluid d-flex  justify-content-end"
        style={{
          backgroundImage: "url('/images/it-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
 <div className="col-lg-auto col-12 mt-5 me-3 custom-it-solutions">
  <div className="justify-content-center mt-5">
    <h3 className="text-white text-center text-lg-start">CUSTOMIZED IT SOLUTIONS</h3>

    <p
      className="d-flex flex-row align-items-start text-white text-start custom-it-item"
      onClick={() => document.getElementById("ttl").scrollIntoView({ behavior: "smooth", block: "center" })}
      style={{ cursor: "pointer" }}
    >
      <FaGlobe size={24} className="me-2" />
      <span>Website, TTL & Mass Communication Solutions</span>
    </p>

    <p
      className="d-flex flex-row align-items-start text-white text-start custom-it-item"
      onClick={() => document.getElementById("crm").scrollIntoView({ behavior: "smooth", block: "center" })}
      style={{ cursor: "pointer" }}
    >
      <FaUsers size={23} className="me-2" />
      <span>Customized CRM Solutions & App Development</span>
    </p>

    <p
      className="d-flex flex-row align-items-start text-white text-start custom-it-item"
      onClick={() => document.getElementById("digital").scrollIntoView({ behavior: "smooth", block: "center" })}
      style={{ cursor: "pointer" }}
    >
      <FaBullhorn size={23} className="me-2" />
      <span>Digital Marketing & AI-Powered Lead Generation</span>
    </p>

    <p
      className="d-flex flex-row align-items-start text-white text-start custom-it-item"
      onClick={() => document.getElementById("mining").scrollIntoView({ behavior: "smooth", block: "center" })}
      style={{ cursor: "pointer" }}
    >
      <FaDatabase size={23} className="me-2" />
      <span>Data Mining & Business Intelligence</span>
    </p>
  </div>
</div>


      </div>
      <div className="container mt-4 text-center">
        <h2
          className="ms-md-4"
          style={{
            fontSize: "clamp(1rem, 5vw, 2.7rem)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "black" }}>Tools &</span>
          <span style={{ color: "#293BB1" }} className="ms-3">
            Technology
          </span>
        </h2>
      </div>
      <div className="scroll-container mt-4">
        <div className="scroll-content scroll-left">
          {images.concat(images).map((img, index) => (
            <img
              key={`left-${index}`}
              src={img}
              alt="Tech Logo"
              className="scroll-img"
            />
          ))}
        </div>
      </div>
      <div className="scroll-container">
        <div className="scroll-content scroll-right">
          {Rightimages.concat(Rightimages).map((img, index) => (
            <img
              key={`right-${index}`}
              src={img}
              alt="Tech Logo"
              className="scroll-img"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
          background: white;
          padding: 10px 0;
          margin-bottom: 10px;
        }

        .scroll-content {
          display: flex;
          align-items: center;
          gap: 30px;
          width: fit-content;
        }

        .scroll-left {
          animation: scroll-left 20s linear infinite;
          animation-delay: 1s;
        }

        .scroll-right {
          animation: scroll-right 20s linear infinite;
          animation-delay: 1s;
        }

        .scroll-img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Responsive: Adjust speed for mobile */
        @media (max-width: 768px) {
          .scroll-content {
            gap: 15px;
          }
          .scroll-img {
            height: 40px; /* Smaller image size */
          }
          .scroll-left {
            animation: scroll-left 15s linear infinite;
            animation-delay: 1s; /* Keep delay */
          }
          .scroll-right {
            animation: scroll-right 15s linear infinite;
            animation-delay: 1s;
          }
        }
      `}</style>
    </>
  );
}

export default It;
