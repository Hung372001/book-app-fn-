import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1230px] mx-auto '>
            <div className='hidden lg:flex justify-center w-full py-[14px] px-[25px] bg-[#9fa7ab] text-white  rounded-lg'>
                <div className="flex items-center justify-between mr-10">
                    <div className="flex items-center text-2xl">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <h2 className='text-2xl uppercase ml-4'> Đăng Ký Để Nhận ƯU Đãi</h2>
                </div>
                <form className="bg-white p-2 rounded-lg flex items-center">
                    <div className='bg-none h-[inherit] leading-[inherit] w-[600px] float-right '>
                    <input type="text" className='bg-none h-[inherit] leading-[inherit] w-[600px] float-right  outline-none	text-black' />
                    </div>
                     <button className='bg-yellow-400 w-[118px] h-[39px] flex items-center justify-center rounded-lg float-right'>Dang Ky</button>
                </form>
            </div>
            <div className='flex flex-wrap '>
               <div className='flex justify-start flex-col border-r-2 pr-10 boder-black'>
                <div className='w-full'>
                <h2>Logo</h2>
                </div>
                    
                    <div className=' mt-10 text-justify flex flex-col text-[13px]'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugit quibusdam architec</p>
                        <p> Công Ty Cổ Phần Phát Hành
                Sách </p>
                <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam </p>
                    </div>
               </div>
               <div className='flex justify-between md:w-1/2 px-9 flex-wrap  '>
               <div className='flex flex-col md:w-1/3 px-[15px]'>
                <h2 className="leading-10">
                    Dịch Vụ
                </h2>
                <div className='text-[13px] flex flex-col gap-3'>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                </div>
               </div>
              
               <div className='flex flex-col md:w-1/3 px-[15px]'>
                <h2 className="leading-10">
                    Dịch Vụ
                </h2>
                <div className='text-[13px] flex flex-col gap-3'>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                </div>
               </div>
               <div className='flex flex-col md:w-1/3  px-[15px]'>
                <h2 className="leading-10">
                    Dịch Vụ
                </h2>
                <div className='text-[13px] flex flex-col gap-3'>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                    <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                </div>
               </div>
               </div>
            
            </div>
        </div>
    )
}

export default Footer