"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then(() => {
          console.log("Bootstrap JS loaded successfully");
        })
        .catch((err) => {
          console.error("Error loading Bootstrap JS:", err);
        });
    }
  }, []);

  const handleOffcanvasHide = () => {
    if (typeof window !== "undefined") {
      const offcanvasEl = document.getElementById("mobileNav");
      if (offcanvasEl) {
        let offcanvasInstance =
          window.bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (!offcanvasInstance) {
          offcanvasInstance = new window.bootstrap.Offcanvas(offcanvasEl);
        }

        offcanvasInstance.hide();
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d_navlogo" href="/">
            <img
              src="/images/main_logo.png"
              alt="Logo"
              style={{ width: "282px", height: "53px" }}
            />
          </Link>
          <button
            className="navbar-toggler ms-auto d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse desktop_nav d-none d-lg-flex"
            id="navbarNav"
          >
            <ul
              className="navbar-nav me-auto"
              style={{ fontSize: "18px", fontWeight: "700" }}
            >
              <li className="nav-item dropdown ms-5">
                <Link
                  href="/about_us"
                  className={`nav-link dropdown-toggle  menus ${styles.navbarCustom}`}
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: "#293BB1" }}
                >
                  About Us
                </Link>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/about-us/vision-mission"
                    >
                      Vision & Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/about-us/management-team"
                    >
                      Management Team
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ms-5">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="productsDropdown"
                >
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
              <li className="nav-item dropdown ms-5">
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
              <li className="nav-item ms-5">
                <Link
                  className={`nav-link menus ${styles.navbarCustom}`}
                  href="/about-us/investors"
                  style={{ color: "#293BB1" }}
                >
                  Investors
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link
                  className={`nav-link menus ${styles.navbarCustom}`}
                  href="/partner"
                  style={{ color: "#293BB1" }}
                >
                  Funding
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link
                  className={`nav-link menus shining ${styles.navbarCustom}`}
                  href="/it"
                  style={{ color: "red" }}
                >
                  IT Services
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <a
                className={`nav-link menus ${styles.navbarCustom}`}
                href="/images/corporate.pdf"
                style={{
                  color: "#fff",
                  backgroundColor: "#293BB1",
                  borderRadius: "20px",
                  padding: "7px 10px",
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
              </a>

              <Link
                className="nav-link me-2 ms-3 mt-2 header_icon"
                href="/contact"
              >
                <Image src="/images/phone.png" alt="Data Icon" width={23} height={23} className="me-2 flex-shrink-0" />
              </Link>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start d-lg-none"
            tabIndex="-1"
            id="mobileNav"
            aria-labelledby="mobileNavLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="mobileNavLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                className="navbar-nav me-auto"
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                <li className="nav-item dropdown ms-5">
                  <Link
                    href="/about_us"
                    onClick={handleOffcanvasHide}
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
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/about-us/vision-mission"
                      >
                        Vision & Mission
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/about-us/management-team"
                      >
                        Management Team
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-5">
                  <Link
                    href="#"
                    onClick={handleOffcanvasHide}
                    className={`nav-link dropdown-toggle menus ${styles.navbarCustom}`}
                    id="productsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "#293BB1" }}
                  >
                    Products
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="productsDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/technic"
                      >
                        Technic
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/intellect"
                      >
                        Intellect
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/connect"
                      >
                        Connect
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/intellect/lbi"
                      >
                        LBI Route Survey
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/accounting-and-legal"
                      >
                        Accounting & Legal
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ms-5">
                  <Link
                    href="#"
                    onClick={handleOffcanvasHide}
                    className={`nav-link dropdown-toggle menus ${styles.navbarCustom}`}
                    id="reportsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "#293BB1" }}
                  >
                    Reports
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="reportsDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/market-report"
                      >
                        Market Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/product"
                      >
                        Product Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/strategic-report"
                      >
                        Strategic Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={handleOffcanvasHide}
                        href="/flash-reports"
                      >
                        Flash Report
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-5">
                  <Link
                    className={`nav-link menus ${styles.navbarCustom}`}
                    onClick={handleOffcanvasHide}
                    href="/about-us/investors"
                    style={{ color: "#293BB1" }}
                  >
                    Investors
                  </Link>
                </li>
                <li className="nav-item ms-5">
                  <Link
                    className={`nav-link menus ${styles.navbarCustom}`}
                    onClick={handleOffcanvasHide}
                    href="/partner"
                    style={{ color: "#293BB1" }}
                  >
                    Funding
                  </Link>
                </li>
                <li className="nav-item ms-5">
                <Link
                  className={`nav-link menus shining ${styles.navbarCustom}`}
                  href="/it"
                  onClick={handleOffcanvasHide}
                  style={{ color: "red" }}
                >
                  IT Services
                </Link>
              </li>
                <li className="nav-item ms-3">
                  <a
                    className={`nav-link menus ${styles.navbarCustom}`}
                    href="/images/corporate.pdf"
                    style={{
                      color: "#fff",
                      backgroundColor: "#293BB1",
                      borderRadius: "20px",
                      padding: "7px 10px",
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
