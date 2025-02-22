"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Partner = () => {
  const images = [
    "/images/Group 32.jpg",
    "/images/Group 33.jpg",
    "/images/Group 34.jpg",
    "/images/Group 35.jpg",
    "/images/Group 36.jpg",
  ];

  // Prevent autoplay restart by tracking initial render
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true only once when the component mounts
  }, []);

  return (
    <>
      <h1 className="text-center">
        <span style={{ color: "black" }}>Our</span>
        <span style={{ color: "#293BB1" }}> Partnerships</span>
      </h1>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#F5F5F5", padding: "20px" }}
      >
        <div className="partner-ship">
          {isMounted && ( // Ensures Swiper only initializes once per page load
            <Swiper
              spaceBetween={20}
              slidesPerView={"auto"}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                576: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 5,
                  centeredSlides: false,
                },
              }}
            >
              {[...images, ...images].map((src, index) => (
                <SwiperSlide
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src={src}
                    width={150}
                    height={100}
                    style={{
                      width: "90%",
                      maxWidth: "150px",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                    alt={`Partner ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Partner;
