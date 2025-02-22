"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

function Certifications() {
  return (
    <div className="container mt-5">
      {/* Title */}
      <h1 className="text-center">
        <span style={{ color: "black" }}>Our</span>{" "}
        <span style={{ color: "#293BB1" }}>Certifications</span>
      </h1>
      <p className="text-center mt-3 px-3">
        Race Innovations Pvt. Ltd is ISO27001, ISO9001, and CMMI Level 3
        Certified Company
      </p>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-4"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          576: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
      >
        {/* Certification Images */}
        {[
          "/images/image-33.jpg",
          "/images/image-35.jpg",
          "/images/image-38.jpg",
          "/images/image-39.jpg",
          "/images/image-35.jpg",
          "/images/image-33.jpg",
        ].map((src, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center">
            <Image
              src={src}
              width={100} 
              height={100} 
              className="img-fluid"
              style={{
                objectFit: "contain",
              }}
              alt={`Certification ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Certifications;
