import React from 'react'

import ItemBook from '../Cart/ItemBook';
import bookItem from './../../data/BookItem';
import 'swiper/css';
import { SwiperSlide,Swiper } from 'swiper/react';
import './style.css'
const ListItemBook = () => {
  return (
    <div className='  ' id="listBook">
      <Swiper
         width={1230}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}>
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