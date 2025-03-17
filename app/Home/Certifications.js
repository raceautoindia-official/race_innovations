"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Certifications() {
  const images = [
    "/images/image-33.jpg",
    "/images/image-35.jpg",
    "/images/image-38.jpg",
    "/images/image-39.jpg",
    "/images/iso.jpg",
    "/images/egac.png",
    "/images/cmm.png",
  ];

  return (
    <div className="container mt-5">
      {/* Title */}
      <div className="row text-center">
        <h1>
          <span style={{ color: "black" }}>Our</span>{" "}
          <span style={{ color: "#293BB1" }}>Certifications</span>
        </h1>
        <p className="mt-3 px-3">
          Race Innovationss Pvt. Ltd is ISO27001, ISO9001, and CMMI Level 3
          Certified Company
        </p>
      </div>

      {/* Swiper Slider with Bootstrap Responsiveness */}
      <div className="row justify-content-center">
        <div className="col-12">
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mt-4"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
              576: { slidesPerView: 3, spaceBetween: 15 }, // Mobile
              768: { slidesPerView: 4, spaceBetween: 20 }, // Medium screens
              992: { slidesPerView: 5, spaceBetween: 30 }, // Large screens
            }}
          >
            {/* Certification Images */}
            {images.map((src, index) => (
              <SwiperSlide key={index} className="d-flex justify-content-center">
                <Image
                  src={src}
                  width={150}
                  height={150}
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    minWidth: "100px",
                    minHeight: "100px",
                    maxWidth: "150px",
                    maxHeight: "150px",
                  }}
                  alt={`Certification ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
