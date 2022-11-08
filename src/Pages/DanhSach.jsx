import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCurmb/BreadCrumb'
import ListBook from "./../data/ListNavBook";
const DanhSach = () => {
  const ref = useRef(null);
  const params = new URLSearchParams(window.location.pathname);
  let {list, category,category1,category2 } = useParams();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log(category1)
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  }, []);
  return (
    <div className='max-w-[1230px] w-full mx-auto'>
      <div>
        <BreadCrumb />
      </div>

      <div className='bg-white w-100% py-5 px-[10px]'>
        <div>
          <ul ref={ref}>
             {list == "DanhSach"?(
              <li>Tất cả Sản Phẩm
                {ListBook.map((item,index)=>{
                  if(item.cate == category ){
                   
                    return(
                      <li> 
                        <Link to={`/${list}/${category}`} className={`${category1 == item.name ?"text-[#F7941E]  font-bold text-[14px]":"text-[#333333] hover:text-[#333333]"} "`} >
                        {category}
                        </Link>
                      
                      <ul className='ml-[10px]'>
                      {item.list.map((dt, index)=>(

                           <li>
                            <Link  to={`/${list}/${category}/${dt.name}`} className={`${category1 == dt.name ?"text-[#F7941E]  font-bold text-[14px]":"text-[#333333] hover:text-[#333333]"} "`}>{dt.name}</Link>
                           <ul>
                            {dt.name == category1 ?(
                              <ul className='ml-[15px]'>
                                {dt.list.map(data=>(
                                  <li>
                                    <Link to={`/${list}/${category}/${dt.name}/${data.name}`} className={`${category2 == data.name ?"text-[#F7941E]  font-bold text-[14px]":"text-[#333333] hover:text-[#333333]"} "`}>
                                    {data.name}
                                    </Link>
                                   
                                  </li>
                                ))}
                              </ul>
                            ):(<div></div>) }
                           </ul>
                           </li>

                         ))}
                      </ul>
                     
                      </li>
                    )
                  }else{
                    return(
                      <li> 
                         <Link to={`/${list}/${item.cate}`} className={`${category1 == item.name ?"text-[#F7941E]  font-bold text-[14px]":"text-[#333333] hover:text-[#333333]"} "`} >
                         {item.cate}
                        </Link>
                     </li>
                    )
                  }
                })}
        </li>
             ):(
              <div></div>
             )}
          </ul>
          <div onClick={() => setToggle(!toggle)}>Xem Them</div>
        </div>
        <div className='border-[1px] border-[#f6f6f6]'></div>
        <div>
         
        </div>
      </div>
    </div>
  )
}

export default DanhSach




// <li> Tất cả Sản Phẩm
// <ul className='ml-[10px]'>
//   {ListBook.map((item, index) => (
//     <li key={index}>{item.cate}
//       <ul className='ml-[5px]'>
//         {item.list.map((dt, index) => {
       
//           if(category==dt.name){
// return(
// <ul className='ml-[20px]'>
// <li className=''>
// <spn className='text-[#F7941E] font-bold text-[14px]'>
// {dt.name}
// </spn> 
// <ul className={`${toggle ? ' h-[100px]':"h-full"} overflow-hidden transition-all`}>
// <li  className='ml-[30px]'>
// Truyen Thieu Nhi
// </li>
// </ul>
// </li>

// </ul>
// )
//           }
//         }
    
        
//           )}
//       </ul>

//     </li>
//   ))}
// </ul>
// </li>