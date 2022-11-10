import React from 'react'
import ImgTest from '../../img/imgCart/image_195509_1_29993.jpg'
import './style.css'
const BookItem = () => {
  return (
    <div className='flex'>
    <div className='p-[9px] bg-white itembok' >
<img src={ImgTest} alt="" />
<div className='flex flex-col'>
<h1>Từ Điển Tiếng “Em” - Tái Bản 2021</h1>
<p>55.000 đ</p>
</div>
    </div>
    <div className='p-[9px] bg-white itembok' >
<img src={ImgTest} alt="" />
<div className='flex flex-col'>
<h1>Từ Điển Tiếng “Em” - Tái Bản 2021</h1>
<p>55.000 đ</p>
</div>
    </div>
    <div className='p-[9px] bg-white itembok' >
<img src={ImgTest} alt="" />
<div className='flex flex-col'>
<h1>Từ Điển Tiếng “Em” - Tái Bản 2021</h1>
<p>55.000 đ</p>
</div>
    </div>
    <div className='p-[9px] bg-white itembok' >
<img src={ImgTest} alt="" />
<div className='flex flex-col'>
<h1>Từ Điển Tiếng “Em” - Tái Bản 2021</h1>
<p>55.000 đ</p>
</div>
    </div>
    </div>

  )
}

export default BookItem