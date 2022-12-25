import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthApi from "../../../api/auth.api";

const NhaXuatBan = (props) => {
  const api = props;
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);

  const loadNavItem = async () => {
    const response = await AuthApi.getBookbyNhaXuatBan(api.api)
      .then((res) => {
        setData(res.data.findBookName);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadNavItem();
  }, [0]);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <Swiper
      ref={sliderRef}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      navigation
    >
      {data.map((dt) => (
        <SwiperSlide>
          <div className="flex flex-col">
            <Link to={`${dt.bookName.id}`} className="flex flex-col">
              <img
                src={`http://api-book-app-production.up.railway.app/book-name/img/${dt.bookName.bookImg}`}
                alt=""
                className=" max-w-full  h-auto md:h-[220px] rounded-lg"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-sm text-[#333333] text-start">
                  {dt.bookName.name}
                </h2>
                <span className="font-bold text-base text-[#C92127] ">
                  {dt.gia} đ
                </span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NhaXuatBan;
