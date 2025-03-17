"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Blog() {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", width: "100%" }}>

      {/* Main Content */}
      <div style={{ marginLeft: "270px", width: "100%", padding: "20px" }}>
        <div style={buttonContainerStyle}>
          <button style={{ ...viewSiteButtonStyle, alignSelf: "flex-start" }}>
            View Site
          </button>
          <button style={{ ...addBlogButtonStyle, alignSelf: "flex-end" }}>
            Add Blog
          </button>
        </div>

        <div className="container">
          <div className="container">
            <div className="card" style={cardStyle}>
              <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <div>
                    <Image
                      src="/images/lorry.png"
                      alt="Article Image"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 style={{ fontWeight: "bold", color: "#333" }}>
                    Impact of GST on Logistics Sector
                  </h4>
                  <h5 style={{ color: "#666" }}>Rajesh Khanna</h5>
                  <h6 style={{ color: "#888" }}>
                    Industry News, Press Release
                  </h6>
                </div>
                <div className="col-md-3 text-end">
                  <p>June 27,2017</p>
                  <button
                    className="btn text-light mt-2 me-2"
                    style={editButtonStyle}
                  >
                    Edit
                  </button>
                  <button
                    className="btn text-light mt-2"
                    style={deleteButtonStyle}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <button style={saveButtonStyle}>Add Partnership</button>
          <button className="me-4" style={saveButtonStyle}>
            Save Changes
          </button> */}
        </div>
        <div className="container">
          <div className="container">
            <div className="card" style={cardStyle}>
              <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                  <div>
                    <Image
                      src="/images/lorry.png"
                      alt="Article Image"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 style={{ fontWeight: "bold", color: "#333" }}>
                    Impact of GST on Logistics Sector
                  </h4>
                  <h5 style={{ color: "#666" }}>Rajesh Khanna</h5>
                  <h6 style={{ color: "#888" }}>
                    Industry News, Press Release
                  </h6>
                </div>
                <div className="col-md-3 text-end">
                  <p>June 27,2017</p>
                  <button
                    className="btn text-light mt-2 me-2"
                    style={editButtonStyle}
                  >
                    Edit
                  </button>
                  <button
                    className="btn text-light mt-2"
                    style={deleteButtonStyle}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button style={saveButtonStyle}>Add Partnership</button>
          <button className="me-4" style={saveButtonStyle}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

const NavItem = ({ href, icon, text }) => (
  <li style={navItemStyle}>
    <Link href={href} style={linkStyle}>
      <span style={iconStyle}>{icon}</span>
      <span style={{ color: "black", fontWeight: "500" }}>{text}</span>
    </Link>
  </li>
);

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
const cardStyle = {
  backgroundColor: "#f5f5f5", // Light ash background
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const editButtonStyle = {
  backgroundColor: "#615c9f",
  padding: "8px 12px",
  borderRadius: "5px",
};

const buttonContainerStyle = {
  display: "flex", // Flexbox for horizontal alignment
  alignItems: "center", // Align items to center
  justifyContent: "flex-end", // Align buttons to the right
  gap: "10px", // Space between buttons
  marginBottom: "20px",
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
};

const addBlogButtonStyle = {
  backgroundColor: "#013f7c",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

const deleteButtonStyle = {
  backgroundColor: "black",
  padding: "8px 12px",
  borderRadius: "5px",
};

const saveButtonStyle = {
  backgroundColor: "#013f7c",
  color: "white",
  padding: "8px",
  marginTop: "20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  float: "right",
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

export default Blog;
