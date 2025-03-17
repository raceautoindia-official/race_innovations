"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const ClientSection = () => {
  const images = [
    "/images/tata.jpg",
    "/images/image 53.jpg",
    "/images/image 47.jpg",
    "/images/image 49.jpg",
    "/images/image 43.jpg",
    "/images/rsb.jpg",
    "/images/pentar.png",
    "/images/jsw-logo.png",
    "/images/renew-bg.png",
    "/images/eil.jpg",
    "/images/lo.jpg",
    "/images/road.jpg",
    "/images/asho.png",
    "/images/db.jpg",
    "/images/so.jpg",
    "/images/yusen.jpg",
    "/images/mahi.jpg",
    "/images/frost.jpg",
    "/images/bc.jpg",
    "/images/toshiba.jpg",
    "/images/t.png",
    "/images/image 45.jpg",
    "/images/bus.jpg",
  ];

  return (
    <div className="container-fluid px-3">
      <div className="partner-ship">
        <Swiper
          spaceBetween={15}
          slidesPerView={1} // Show only 1 slide by default
          slidesPerGroup={1} // Move 1 slide at a time
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            576: {
              slidesPerView: 1, // Ensuring 1 slide per view on small screens
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="text-center">
              <Image
                src={src}
                width={200}
                height={180}
                style={{
                  borderRadius: "20px",
                  objectFit: "contain",
                }}
                alt={`Partner ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

function Client() {
  return (
    <div>
      <h1 className="text-center mt-4" style={{ fontSize: "2.5rem" }}>
        <span style={{ color: "black" }}>Our</span>
        <span style={{ color: "#293BB1" }}> Clients</span>
      </h1>
      <ClientSection />
    </div>
  );
}

export default Client;
