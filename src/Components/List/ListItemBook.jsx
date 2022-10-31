import React from "react";

import ItemBook from "../Cart/ItemBook";
import bookItem from "./../../data/BookItem";

import "./style.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

import imgTitle from "./../../img/imgCart/BannerBlock09_ThieuNhi_350x415.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const ListItemBook = () => {
  return (
    <div className=" flex " id="listBook">
      <div>
        <img src={imgTitle} />
      </div>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={20}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {bookItem.map((dt) => (
          <SwiperSlide>
            <ItemBook {...dt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ListItemBook;
