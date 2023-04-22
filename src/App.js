import logo from "./logo.svg";
import "./App.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div className="App">
      <div className="slider">
      <Swiper
        pagination={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        navigation={true}
        
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/pic/1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pic/2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );

}

export default App;
