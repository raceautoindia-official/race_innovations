"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdArticle,
  MdAssessment,
  MdImage,
  MdAttachMoney,
  MdHome,
  MdSettings,
} from "react-icons/md";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ ...sidebarStyle, width: isMobile ? "70px" : "250px" }}>
      <div style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}>
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%" }}>
            <Image src="/images/r.png" alt="Logo" width={80} height={100} style={{ objectFit: "contain" }} />
            <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>Race Innovationss</p>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Image
          src="/images/man.png"
          alt="Admin Profile"
          width={isMobile ? 40 : 90}
          height={isMobile ? 40 : 90}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        {!isMobile && (
          <>
            <h5 style={{ fontWeight: "bold", color: "black" }}>Reena</h5>
            <h6 style={{ color: "black" }}>Admin</h6>
          </>
        )}
      </div>

      <nav style={{ width: "100%", marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: "0", width: "100%" }}>
          {navLinks.map(({ href, Icon, text }) => {
            const isActive = pathname === href;
            return (
              <li key={href} style={navItemStyle}>
                <Icon size={20} style={{ color: isActive ? "#013F7C" : "black" }} />
                {!isMobile && (
                  <Link href={href} style={isActive ? activeLinkStyle : linkStyle}>
                    {text}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

// Navigation Links
const navLinks = [
  { href: "/dashboard", Icon: MdDashboard, text: "Dashboard" },
  { href: "/admin/blog", Icon: MdArticle, text: "Blog" },
  { href: "/admin/report", Icon: MdAssessment, text: "Reports" },
  { href: "/admin/gallery", Icon: MdImage, text: "Gallery" },
  { href: "/admin/funding", Icon: MdAttachMoney, text: "Funding" },
  { href: "/homepage", Icon: MdHome, text: "HomePage" },
  { href: "/settings", Icon: MdSettings, text: "Settings" },
];

// Styles
const sidebarStyle = {
  height: "100vh",
  backgroundColor: "#fff",
  boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  position: "fixed",
  left: "0",
  top: "0",
  transition: "width 0.3s ease-in-out",
};
const navItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  cursor: "pointer",
};
const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "500",
};
const activeLinkStyle = {
  ...linkStyle,
  color: "#013F7C",
  fontWeight: "bold",
};

export default Sidebar;
