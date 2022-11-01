import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1230px] mx-auto'>
            <div className='hidden md:flex justify-center w-full py-[14px] px-[25px] bg-[#9fa7ab] text-white '>
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <h2> Đăng Ký Để Nhận ƯU Đãi</h2>
                </div>
                <form className="bg-white p-2 rounded-1">
                    <div className='bg-none h-[inherit] leading-[inherit] w-[600px] float-right '>
                    <input type="text" className='bg-none h-[inherit] leading-[inherit] w-[600px] float-right  outline-0	text-black' />
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Footer