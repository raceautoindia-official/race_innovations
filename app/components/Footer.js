import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <div
      className="container-fluid mt-5"
      style={{
        backgroundImage: 'url("/images/footer-bg.png")',
        backgroundSize: "cover",
        padding: "1rem",
      }}
    >
      <div className="container mt-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-md-2">
            <Image
              src="/images/rlogo.png"
              width={311}
              height={251}
              alt="logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <p className="mb-0">
              About RACE Innovations At RACE Innovations, we are passionate
              about transforming ideas into impactful solutions. As trusted
              consultants, we partner with businesses to navigate complex
              challenges and deliver innovative strategies that drive success.
              Our team excels at designing and implementing custom solutions
              tailored to your unique needs, helping you stay ahead in a
              fast-paced world. With a focus on collaboration, creativity, and
              sustainability, we are dedicated to delivering results that
              empower growth and create lasting value for our clients.
            </p>
          </div>
          <div className="col-md-2">
            <div className="d-flex justify-content-end gap-3">
              <FaInstagram size={30} style={{ color: "#E4405F" }} />
              <FaFacebook size={30} style={{ color: "#1877F2" }} />
              <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
              <FaLinkedin size={30} style={{ color: "#0077B5" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <p>@Copyright 2025 Race Innovations - All Rights Reserved</p>
          <p>
            <a href="/about-us" style={{ textDecoration: "none" , color:"black" }}>
              About Us
            </a>
          </p>
          <p>
            <a href="/career" style={{ textDecoration: "none" , color:"black" }}>
              Careers
            </a>
          </p>
          <p>
            <a href="/contact" style={{ textDecoration: "none", color:"black" }}>
              Contact
            </a>
          </p>
          <p>
            <a href="/investors" style={{ textDecoration: "none", color:"black" }}>
              Investor
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
