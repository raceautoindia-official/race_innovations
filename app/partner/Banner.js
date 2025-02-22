"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Banner() {
  const [productType, setProductType] = useState("");
  const [product, setProduct] = useState("");
  const productOptions = {
    individual: [
      "Personal Loan",
      "Home Loan",
      "Car Loan",
      "Two Wheeler Loan",
      "Education Loan",
      "Gold Loan",
      "Loans Against Securities",
      "Loans Against Shares ",
      "Loans Against Mutual Funds",
      "Loans Against Property",
      "Agri & Rural Loans",
      "Smart Loans",
    ],
    corporate: [
      "MSME Loan",
      "Bank Guarantee",
      "Bill Discounting",
      "Overdraft",
      "Loan Against property(LAP)",
      "Supply chain finance",
      "Solutions for Importer",
      "Solutions for Exporter",
    ],
  };

  const handleApplyNow = () => {
    if (!productType || !product) {
      alert("Please select a product type and product before applying.");
    } else {
      alert(`Applying for: ${product}`);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Swiper Section */}
        <div className="col-md-8">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, FreeMode]}
            className="mySwiper mt-3"
          >
            {[
              { src: "/images/slide-1.jpg", alt: "Accounting Slide 1" },
              { src: "/images/slide-2.png", alt: "Banner Slide 2" },
              { src: "/images/slide-3.png", alt: "Banner Slide 3" },
              { src: "/images/slide-4.png", alt: "Banner Slide 4" },
              { src: "/images/slide-5.png", alt: "Banner Slide 5" },
            ].map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide.src}
                  width={800} // Adjust as needed
                  height={400} // Adjust as needed
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  alt={slide.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Sidebar Section */}
        <div
          className="col-md-4 mt-3 p-4 d-flex flex-column align-items-center justify-content-between"
          style={{
            backgroundColor: "#d8dbea",
            borderRadius: "15px",
            height: "68vh",
          }}
        >
          <Image
            src="/images/14.png"
            width={250}
            height={200}
            className="mt-3"
            style={{
              width: "85%",
              height: "auto",
              objectFit: "contain",
            }}
            alt="Automotive"
          />
          <h4 className="text-center mt-3" style={{ color: "#4a78d4" }}>
            Race Financing Solutions
          </h4>
          <div className="w-75">
            <select
              value={productType}
              onChange={(e) => {
                setProductType(e.target.value);
                setProduct("");
              }}
              className="form-select mt-3"
            >
              <option value="">Select Product Type</option>
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
            </select>

            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="form-select mt-3"
              disabled={!productType}
            >
              <option value="">Select Product</option>
              {productType &&
                productOptions[productType].map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <button
            className="btn mt-3"
            onClick={handleApplyNow}
            disabled={!product}
            style={{
              borderRadius: "20px",
              border: "2px solid #4a78d4",
              color: "#4a78d4",
              backgroundColor: "transparent",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
