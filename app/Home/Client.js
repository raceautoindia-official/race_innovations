"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const ClientSection = () => {
  const images = [
    "/images/image 51.jpg",
    "/images/image 53.jpg",
    "/images/image 45.jpg",
    "/images/image 47.jpg",
    "/images/image 49.jpg",
    "/images/image 43.jpg",
  ];

  return (
    <div className="container-fluid mt-5 px-3">
      <div className="partner-ship">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
        >
          {[...images, ...images].map((src, index) => (
            <SwiperSlide key={index} className="text-center">
              <Image
                src={src}
                width={100}
                height={80}
                style={{
                  borderRadius: "20px",
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
      <h1 className="text-center mt-5">
        <span style={{ color: "black" }}>Our</span>
        <span style={{ color: "#293BB1" }}> Clients</span>
      </h1>
      <ClientSection />
    </div>
  );
}

export default Client;
