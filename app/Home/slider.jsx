"use client";  

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }} 
      spaceBetween={30}
      speed={1600}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }} 
      pagination={{ clickable: true }}
      navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}  
      modules={[Navigation, Pagination, Autoplay, FreeMode, EffectFade]} 
      className="mySwiper"
    >
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/accounting-5.jpg"
            alt="Accounting and finance team analyzing reports"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/connect.jpg"
            alt="Business professionals connecting and networking"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/intellect.jpg"
            alt="Artificial intelligence and machine learning concept"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/survey.jpg"
            alt="Surveyor using equipment for land measurement"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/ban-1.jpg"
            alt="Legal and law professionals discussing case files"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div style={{ position: "relative", aspectRatio: "2.98/1", width: "100%" }}>
          <Image
            fill
            priority
            src="/images/technic 1.jpg"
            alt="Technician working on advanced technical solutions"
            // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
