import React, { useEffect, useRef, useState } from "react";

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
import { useCallback } from "react";

const ListItemBook = (item) => {
  const sliderRef = useRef(null);
  const [checkEnd, setcheckEnd] = useState(false);
  const [checkstart, setCheckStart] = useState(true);
  const [number, setNumber] = useState(0)
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
 useEffect(() => {
  if(number === 0){
    setCheckStart(true);
   }else{
    setCheckStart(false);
   }

 }, );
console.log(checkstart)

  return (
    <div className=" flex " id="listBook">
      <div className="hidden md:block">
        <img src={imgTitle} />
      </div>
      
      <Swiper
        ref={sliderRef}
      className="relative w-[700px]"
        slidesPerView={2}
        grid={{
          rows: 2,
         
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid:{
              rows: 2,
              
            }
          },
          640: {
            slidesPerView: 1,
            grid:{
              rows: 2,
              
            }
          },
          768: {
            slidesPerView: 1,
            grid:{
              rows: 2,
             
            }
          },
          1024: {
            slidesPerView: 2,
            grid:{
              rows: 2,
            
            }
          },
        }}
        onSlideChange={(swiper) =>{
          
          setcheckEnd(swiper.isEnd )
          setNumber(swiper.realIndex)
        
        }}   
             spaceBetween={10}
        modules={[Grid, Pagination]}
           
      >
        {[item].map((dt) => (

          dt.item.map(data=>(
         <SwiperSlide>
            <ItemBook {...data} />
          </SwiperSlide>
          ))
         
))}
<div className={`w-9 h-9 rounded-full flex items-center justify-center  border-[1px] border-black cursor-pointer absolute top-[45%] z-50 left-3 ${checkstart?"hidden":""}`

           } onClick={handlePrev}>
<ion-icon name="chevron-back-outline"></ion-icon>
</div>

<div className={`w-9 h-9 rounded-full  flex items-center justify-center border-[1px] border-black cursor-pointer absolute top-[45%] z-50 right-3  ${checkEnd?"hidden":""}`} onClick={handleNext}>
<ion-icon name="chevron-forward-outline"></ion-icon>
</div>
      </Swiper>
    </div>
  );
};

export default ListItemBook;
