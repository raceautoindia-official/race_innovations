"use client";

import React from "react";
import { motion } from "framer-motion";

function Connected() {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-between">
        {/* Form Section */}
        <motion.div
          className="col-md-5 col-12 p-4 mt-4"
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-md-start text-center" style={{ color: "#3848b7" }}>
            Stay Connected..!
          </h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                style={{ border: "1px solid black", borderRadius: "5px" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                style={{ border: "1px solid black", borderRadius: "5px" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                style={{ border: "1px solid black", borderRadius: "5px" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn text-white w-25"
              style={{ backgroundColor: "#3848b7" }}
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Information Section */}
        <motion.div
          className="col-md-6 col-12 mt-4 p-4"
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} 
        >
          <h1 className="text-md-start text-center" style={{ color: "#3848b7" }}>
            Let's Work Together
          </h1>
          <p className="mt-3 text-md-start text-center">
            Race Innovations welcomes collaboration to champion diversity, equity, and inclusion.
            Together, we'll break barriers, challenge biases, and shape a brighter, more inclusive future for all.
          </p>
          <div className="mt-3">
            <p className="fw-bold text-md-start text-center" style={{ color: "#3848b7" }}>
              Mail Us:{" "}
              <span className="ms-1" style={{ color: "black" }}>info@raceinnovations.in</span>
            </p>
            <p className="fw-bold text-md-start text-center" style={{ color: "#3848b7" }}>
              Call Us:{" "}
              <span className="ms-1" style={{ color: "black" }}>044 4283 4054</span>
            </p>
            <p className="fw-bold text-md-start text-center" style={{ color: "#3848b7" }}>
              Address:{" "}
              <span className="ms-1" style={{ color: "black" }}>Olympia Platina, Guindy, Chennai</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Connected;
