import React, { useState } from 'react'
import Account from './Account'
import Cart from './Cart'
import NavLinks from './NavLink'
import Notification from './notification'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <div className='w-full  bg-white'>
<div class=" max-w-[1230px] mx-auto bg-white">
            <div className=' hidden md:flex items-center w-full mr-0 relative flex-row justify-between'>
                <div className=' flex '>
                    <h1>Logo</h1>

                </div>
                <div className='ml-[24px] w-24'>
                    <NavLinks />
                </div>

                <div className='relative  w-[585px] float-left'>
                    <input type="text" name="" id="" class="border-[1px] border-black  h-10 w-full rounded-lg" />
                    <button className="absolute top-[50%] h-[30px] w-[72px] text-white right-1 z-[3] w-[72px]  bg-[#C92127] rounded-lg" style={{ transform: "translate(0, -50% )" }}>
                        <ion-icon name="search-outline" ></ion-icon>

                    </button>
                </div>
                <div className='flex pl-[24px] justify-around w-80'>
                    <Account />
                    <Cart />
                    <Notification />
                </div>
            </div>
            <div className=' block md:hidden'>
                <div className='max-w-full text-center'>
                    <h1>Logo</h1>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className='text-2xl'>
                        <ion-icon name="menu-outline" onClick={() => setOpen(!open)}></ion-icon>
                    </div>
                    <div class="w-[calc(100%-104px)]">
                        <input type="text" className='border-[1px] border-black w-full rounded-lg' />
                    </div>
                    <div className='flex'>
                        <Account />
                        <Cart />
                    </div>
                    <ul
                        className={`
        md:hidden bg-white  absolute w-full h-full bottom-0 z-50 pb-24 pl-4
duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                    >
                        <li className='flex items-center justify-between'>
                            <a to="/" className="py-7 px-3 inline-block">
                                Trang Chủ
                            </a>
                            <div class="text-2xl">
  <ion-icon name={`${open ? "close" : "menu"}`} onClick={() => setOpen(!open)}></ion-icon>
                            </div>
                          
                        </li>
                        <NavLinks />
                        <div className="py-5">

                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        

    )
}

export default Navbar