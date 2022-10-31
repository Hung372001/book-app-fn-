import React from 'react'

import ItemBook from '../Cart/ItemBook';
import bookItem from './../../data/BookItem';

import { SwiperSlide,Swiper } from 'swiper/react';

import { Grid, Pagination } from "swiper";

import ImgCart from './../../img/imgCart/image_195509_1_29993.jpg'
import 'swiper/css';
import "swiper/css/grid";
const ListItemBook = () => {
  return (
    <div className='flex' id="listBook">
      <div class="pl-6">
       <img src={ImgCart}/>
      </div>
    <div>
      
    </div>
      <Swiper
       
         grid={{
          rows: 2
        }}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
        >
      {bookItem.map(dt=>(
          <SwiperSlide>
             <ItemBook {...dt}/>
          </SwiperSlide>
        ))}
      </Swiper>
       
      
    </div>
  )
}

export default ListItemBook