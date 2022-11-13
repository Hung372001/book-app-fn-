import React from 'react'
import './style.css'
const BookItem = (props) => {
  const{name,gia,img} = props
  return ( 
    


    <div className='p-[9px] bg-white itembok' >
<img src={img} alt="" />
<div className='flex flex-col'>
<h1>{name}</h1>
<p>{gia} đ</p>
</div>
    </div>
 

  )
}

export default BookItem