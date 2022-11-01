import React, { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {dataSlider,dataImgTablet} from './../../data/Slider'
import img1 from './../../img/megasale_t10_flashsale_392x156.jpg'
import img3 from './../../img/Slider/mangaweek_840x320.jpg'
import 'swiper/css';
import './style.css';
const Slider = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className='  md:max-w-[1230px] w-full max-w-full md:mx-auto '>
       <div className="flex xl:flex-row lg:flex-col ">
        <div className='relative' id="banner">

       <Swiper
      
       ref={sliderRef}
      slidesPerView={1}
    >
      {dataSlider.map(dt=>(
       <SwiperSlide><img  src={dt.src} alt="" className=" max-w-full w-full h-auto md:h-[316px] rounded-lg" /></SwiperSlide>
      ))}
     </Swiper>
     <div className='flex items-center justify-center w-[24px]  h-[24px] rounded-full bg-white  hover:w-10  hover:h-10 ease-in duration-300 p-[5px] absolute top-1/2 z-10 left-[-12px]'  onClick={handlePrev}>
    <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
     <div className='flex items-center justify-center w-[24px] h-[24px] rounded-full  bg-white hover:w-10  hover:h-10 ease-in duration-300 p-[5px] absolute top-1/2 z-10 right-[-12px]' onClick={handleNext}>
     <ion-icon name="chevron-forward-outline"></ion-icon>
     </div>
     </div >
       <div className=' hidden xl:flex flex-col  ml-2 '>
        <div className="h-full mb-1"><img src={img1}  alt="" className="h-[156px] rounded-lg"/></div>
         <div className="h-full"><img src={img1} alt="" className="h-[156px] rounded-lg"/></div>
       </div>
       <div className=' hidden  xl:hidden lg:flex flex-row mt-10 '>
       {dataImgTablet.map(dt=>(
        <div className="h-full mb-1 mr-[10px] "><img src={dt.src}  alt="" className="h-[156px] w-[272px]"/></div>

       ))}
        
       </div>
    </div>
    
    </div>
  )
}

export default Slider