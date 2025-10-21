"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

function Courses() {
  const courses = [
    "TypeScript",
    "JavaScript",
    "REACT",
    "ReduxTlk",
    "HTML-CSS",
    "Restful-APi",
      "NEXT.JS",
    "Git-GitHub"
  ];

  return (
    <div className="mt-20 text-center md:text-left">
      <p className="text-white text-lg font-semibold mb-4">Ability</p>

      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        speed={2000} // 👈 controls scroll speed (ms)
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 0, // 👈 makes it continuous
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // 👈 optional: disable drag for smoother effect
        className="!px-2"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="!w-auto p-2">
            <span className="border border-[#22bf37] px-6 py-3 font-sans font-bold text-[#9C9C9C] rounded-md whitespace-nowrap">
              {course}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Courses;
