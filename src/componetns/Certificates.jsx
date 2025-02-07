import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "../assets/certificates/1.jpg";
import img2 from "../assets/certificates/2.jpg";
import img3 from "../assets/certificates/3.jpg";
import img4 from "../assets/certificates/4.jpg";
import img5 from "../assets/certificates/5.png";

import "./Certificates.css"; 

const Certificates = () => {
  return (
    <div id="Education" className="border-b border-neutral-900  lg:m-24 ">
      <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-2 lg:my-20 text-center text-4xl"
        >
         Certificates
        </motion.h1>

      <div className="max-w-3xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-96 object-contain rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
 
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Certificates;
