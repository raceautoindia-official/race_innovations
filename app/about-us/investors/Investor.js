"use client"
import React from 'react';

function Investors() {
  return (
    <div
      className="container-fluid mt-3 d-flex flex-column align-items-center justify-content-center position-relative"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/images/investor.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
        }}
      ></div>
      <h1
        className="text-white position-relative"
        style={{ fontSize: "5rem", zIndex: 1 }}
      >
        Investors
      </h1>
    </div>
  );
}

export default Investors;
