"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaDownload } from 'react-icons/fa';
import {
  MdDashboard,
  MdArticle,
  MdImage,
  MdAttachMoney,
  MdHome,
  MdSettings,
  MdAssessment ,
} from "react-icons/md";

const Fund = () => {
  return (
    <div style={sidebarStyle}>
      <div style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}>
  <Image src="/images/r.png" alt="Logo" width={80} height={100} />
  <p style={{ margin: 0, fontSize: "13px" }}>Race Innovations</p>
</div>


      <div style={{ textAlign: "center" }}>
        <Image
          src="/images/man.png"
          alt="Admin Profile"
          width={80}
          height={80}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <h5 style={{ fontWeight: "bold", color: "black" }}>Reena</h5>
        <h6 style={{ color: "black" }}>Admin</h6>
      </div>
      <nav style={{ width: "100%" }} className="mt-3">
        <ul style={{ listStyle: "none", padding: "0", width: "100%" }}>
          <NavItem href="/dashboard" icon={<MdDashboard />} text="Dashboard" />
          <NavItem href="/blog" icon={<MdArticle />} text="Blog" />
          <NavItem href="/reports" icon={<MdAssessment />} text="Reports" />
          <NavItem href="/gallery" icon={<MdImage />} text="Gallery" />
          <NavItem href="/funding" icon={<MdAttachMoney />} text="Funding" />
          <NavItem href="/homepage" icon={<MdHome />} text="HomePage" />
          <NavItem href="/settings" icon={<MdSettings />} text="Settings" />
        </ul>
      </nav>
    </div>
  );
};
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

export default Fund;
