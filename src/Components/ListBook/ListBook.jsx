import React, { useEffect, useState } from 'react'
import BookItem from '../BookItem/BookItem'
import Pagination from '../Pagination/Pagination'
import bookItem from './../../data/BookItem'
const ListBook2 = (props) => {
const data = props
console.log(data)
    return (
    <div class="grid grid-cols-4 gap-4 bg-white">
   {data.data.map((item,index )=>(
 <BookItem gia={item.price} name={item.name} img={item.img} />
   ))}
    
    
    </div>
  )
}

export default ListBook2