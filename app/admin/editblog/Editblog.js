"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function Editblog() {
  const pathname = usePathname();



  return (
    <div style={{ display: "flex", width: "100%" }}>
     
      <div style={{ marginLeft: "270px", width: "100%", padding: "20px" }}>
        <button style={viewSiteButtonStyle}>View Site</button>

      

        {/* Input Fields Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", width: "100%", marginTop: "20px" }}>
          <label>Title</label>
          <input type="text" placeholder="Application Name" style={inputStyle} />
          <label>Author</label>
          <textarea placeholder="Footer About Section" style={inputStyle} />
          <label>Date</label>
          <input type="text" placeholder="Click Here to see More" style={inputStyle} />
          <label>Description</label>
          <input type="text" placeholder="" style={inputStyle} />
          <label>Body of Content</label>
          <input type="text" placeholder="" style={inputStyle} />
          <label>Keywords</label>
          <input type="text" placeholder="" style={inputStyle} />
          <label>Title Slug</label>
          <input type="text" placeholder="" style={inputStyle} />
          <label>Thumbnail Image</label>
          <input type="file" placeholder="" style={inputStyle} />
          <label>Content Image</label>
          <input type="file" placeholder="" style={inputStyle} />
        </div>
        <button style={saveButtonStyle}>Upload</button>
      </div>
    </div>
  );
}

// Reusable Components & Styles
const NavItem = ({ href, icon, text }) => (
  <li style={navItemStyle}>
    <Link href={href} style={linkStyle}>
      <span style={iconStyle}>{icon}</span>
      <span style={{ color: "black", fontWeight: "500" }}>{text}</span>
    </Link>
  </li>
);

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  fontSize: "16px",
  outline: "none",
};

const sidebarStyle = {
  width: "250px",
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

const viewSiteButtonStyle = {
  backgroundColor: "#f0b249",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  color: "black",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginBottom: "20px",
  display: "block",
  marginLeft: "auto",
};

const saveButtonStyle = {
  backgroundColor: "#013f7c",
  color: "white",
  padding: "8px",
  marginTop: "20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const navItemStyle = {
  textAlign: "center",
  transition: "0.3s",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  padding: "10px",
  borderRadius: "10px",
  width: "100%",
};

const iconStyle = {
  fontSize: "20px",
  color: "black",
};

const settingsMenuStyle = {
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  padding: "0",
  margin: "0",
};

const listItemStyle = {
  textAlign: "center",
  padding: "10px",
  color: "black",
};

const activeLinkStyle = {
  textDecoration: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  backgroundColor: "#615c9f",
  fontWeight: "bold",
  color: "white",
};

export default Editblog;
