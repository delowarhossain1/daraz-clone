import React from "react";
import { useState, useEffect } from "react";
import MegaMenuItem from "../MegaMenu/MegaMenuItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from '../../../../images/slider/slider-img-1.jpg';
import slider2 from '../../../../images/slider/slider-img-2.jpg';
import slider3 from '../../../../images/slider/slider-img-3.jpg';
import slider4 from '../../../../images/slider/slider-img-4.jpg';
import slider5 from '../../../../images/slider/slider-img-5.jpg';
import slider6 from '../../../../images/slider/slider-img-6.jpg';

const Slider = () => {
  const [megaMenu, setMegaMenu] = useState([]);

  useEffect(() => {
    fetch("info/megaMenu.json")
      .then((res) => res.json())
      .then((menu) => setMegaMenu(menu));
  }, []);

  return (
    <section className="flex">
      {/* Mega menu */}
      <div className="w-[17%]">
        <ul className="bg-white relative">
          {megaMenu?.map((menu) => (
            <MegaMenuItem menu={menu} key={menu.id} />
          ))}
        </ul>
      </div>
      {/* Slider image */}
      <div className="w-[83%]">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide><img src={slider1} alt="slider" /></SwiperSlide>
          <SwiperSlide><img src={slider2} alt="slider" /></SwiperSlide>
          <SwiperSlide><img src={slider3} alt="slider" /></SwiperSlide>
          <SwiperSlide><img src={slider4} alt="slider" /></SwiperSlide>
          <SwiperSlide><img src={slider5} alt="slider" /></SwiperSlide>
          <SwiperSlide><img src={slider6} alt="slider" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
