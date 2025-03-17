"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaDownload } from "react-icons/fa";



function Access() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
     

      {/* Main Content */}
      <div
        style={{
          ...mainContent,
          marginLeft: isMobile ? "90px" : "270px",
          position: "relative",
        }}
      >
        <button style={viewSiteButtonStyle}>View Site</button>

        {/* Table Section */}
        <table style={tableStyle} className="mt-5">
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Option</th>
            </tr>
          </thead>
          <tbody>
            {["John Doe", "Jane Smith", "Michael Johnson"].map(
              (name, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{name}</td>
                  <td style={tdStyle}>
                    {index === 2
                      ? "Rejected"
                      : index === 1
                      ? "Pending"
                      : "Approved"}
                  </td>
                  <td style={tdStyle}>
                    <button style={buttonStyle}>
                      <FaEye style={iconActionStyle} /> View
                    </button>
                    <button style={buttonStyle}>
                      <FaDownload style={iconActionStyle} /> Download
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styles
const sidebarStyle = {
  height: "100vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  position: "fixed",
  left: "0",
  top: "0",
};
const mainContent = { marginLeft: "270px", width: "100%", padding: "20px" };
const viewSiteButtonStyle = {
  backgroundColor: "#f0b249",
  padding: "10px 20px",
  borderRadius: "5px",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
  position: "absolute",
  right: "20px",
  top: "20px",
  border: "none",
};
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};
const thStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  textAlign: "left",
};
const tdStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
};
const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    backgroundColor: "#2C75BD", // Fixed the background color
    color: "white",
  };
  
const iconActionStyle = { fontSize: "16px" };

const logoContainer = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};
const profileContainer = { textAlign: "center", marginBottom: "20px" };
const profileImage = { borderRadius: "50%", objectFit: "cover" };
const profileName = { fontWeight: "bold", color: "black" };
const profileRole = { color: "gray" };
const navList = { listStyle: "none", padding: "0", width: "100%" };
const navItemStyle = { textAlign: "center", cursor: "pointer" };
const iconStyle = { fontSize: "20px", color: "black" };
const textStyle = { color: "black", fontWeight: "500" };
const linkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  borderRadius: "10px",
  width: "100%",
};
const logoStyle = { objectFit: "contain", marginRight: "10px" };
const logoText = { margin: 0, fontSize: "14px", fontWeight: "bold" };
export default Access;
