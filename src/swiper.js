// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><di>ABD</SwiperSlide>
      <SwiperSlide>123</SwiperSlide>
    </Swiper>
  );
};
