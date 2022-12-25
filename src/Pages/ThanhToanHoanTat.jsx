import { Button } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthApi from "../api/auth.api";
import Helmet from "../Components/Helmet/Helmet";
const ThanhToanHoanTat = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);
  const loadNavItem = async () => {
    const response = await AuthApi.getbook()
      .then((res) => {
        setData(res.data.book);
        console.log(res.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    loadNavItem();
  }, 0);
  return (
    <Helmet title="Đặt hàng thành công">
      <div className="max-w-[1230px] m-auto mt-8">
        <div className="bg-white flex flex-col items-center">
          <div className="p-4 border-b-[1px] border-[#D9D9D9] w-full">
            <div className="text-center font-extrabold text-lg">
              Thông tin đơn hàng
            </div>
          </div>
          <div className="pb-4">
            <span className="text-center font-extrabold text-[#C92127] text-lg mt-4 mb-4 block">
              Đặt hàng thành công !
            </span>
            <Button variant="contained">Quay trở lại trang chủ</Button>
          </div>
        </div>
        <div className="bg-white flex flex-col mt-4">
          <div className="text-start font-extrabold text-lg py-4 pl-4 border-b-[1px] border-[#D9D9D9] w-full">
            Gợi ý Sản Phẩm
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ThanhToanHoanTat;
