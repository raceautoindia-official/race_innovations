"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d_navlogo" href="#">
          <img
            src="/images/main_logo.png"
            alt="Logo"
            style={{
              width: "282px",
              height: "53px",
              position: "relative",
              top: "10px",
              left: "9px",
            }}
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse desktop_nav" id="navbarNav">
          <ul
            className="navbar-nav me-auto"
            style={{ fontSize: "18px", fontWeight: "700" }}
          >
            {" "}
            <li className="nav-item dropdown ms-5 mt-3">
              <Link
                href="/about_us"
                className={`nav-link dropdown-toggle me-4 menus ${styles.navbarCustom}`}
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: "#293BB1" }}
              >
                About Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link className="dropdown-item" href="/about-us/vision-mission">
                    Vision & Mission
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/about-us/management-team">
                    Management Team
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-5 mt-3">
              <Link
                href="#"
                className={`nav-link dropdown-toggle menus ${styles.navbarCustom}`}
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: "#293BB1" }}
              >
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <Link className="dropdown-item" href="/technic">
                    Technic
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/intellect">
                    Intellect
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/connect">
                    Connect
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/intellect/lbi">
                    LBI Route Survey
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/accounting-and-legal"
                  >
                    Accounting & Legal
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ms-5 mt-3">
              <Link
                href="#"
                className={`nav-link dropdown-toggle menus ${styles.navbarCustom}`}
                id="reportsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: "#293BB1" }}
              >
                Reports
              </Link>
              <ul className="dropdown-menu" aria-labelledby="reportsDropdown">
                <li>
                  <Link className="dropdown-item" href="/market-report">
                    Market Report
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/product">
                    Product Report
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/strategic-report">
                    Strategic Report
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/flash-reports">
                    Flash Report
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-5 mt-3">
              <Link
                className={`nav-link menus ${styles.navbarCustom}`}
                href="/about-us/investors"
                style={{ color: "#293BB1" }}
              >
                Investors
              </Link>
            </li>
            <li className="nav-item ms-5 mt-3">
              <Link
                className={`nav-link menus ${styles.navbarCustom}`}
                href="/career"
                style={{ color: "#293BB1" }}
              >
                Career
              </Link>
            </li>
            <li className="nav-item ms-3 mt-3">
              <Link
                className={`nav-link menus ${styles.navbarCustom}`}
                href="/corporate-profile"
                style={{
                  color: "#fff",
                  backgroundColor: "#293BB1",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  fontWeight: "600",
                  textAlign: "center",
                  display: "inline-block",
                  border: "2px solid #293BB1",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1F2C8A")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#293BB1")
                }
              >
                Corporate Profile
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="d-flex">
            {/* Search Icon */}
            <Link className="nav-link me-5 mt-3 header_icon" href="#">
              <i
                className="bi bi-search"
                style={{ fontSize: "22px", color: "black" }}
              ></i>
            </Link>

            {/* Telephone Icon */}
            <Link className="nav-link me-2 mt-3 header_icon" href="#">
              <i
                className="bi bi-telephone-fill"
                style={{ fontSize: "22px", color: "black" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
