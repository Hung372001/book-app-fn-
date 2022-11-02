import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1230px] mx-auto '>
            <div className='hidden lg:flex justify-center w-full py-[14px] px-[25px] bg-[#9fa7ab] text-white  rounded-tl-lg rounded-tr-lg'>
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
            <div className='flex flex-wrap pt-10 pb-[25px] bg-white rounded-br-lg rounded-br-lg'>
                <div className='flex w-full lg:w-2/5 justify-start flex-col md:border-r-2 px-[15px] boder-black'>
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

                <div className=" w-full xl:w-3/5">
                    <div className="grid xl:grid-cols-3 xl:grid-rows-1 w-full  gap-4 grid-flow-col lg:grid-rows-2  grid-rows-3">
                    <div className='w-full flex flex-col w-full  px-[15px] items-start'>
                            <h2 className="leading-10 text-base font-bold uppercase">
                                Dịch Vụ
                            </h2>
                            <div className='text-[13px] flex flex-col gap-3'>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                            </div>
                        </div>
                        <div className='w-full flex flex-col w-full px-[15px] items-start'>
                        <h2 className="leading-10 text-base font-bold uppercase">
                                Dịch Vụ
                            </h2>
                            <div className='text-[13px] flex flex-col gap-3'>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                            </div>
                        </div>
                        <div className='w-full flex flex-col w-full  px-[15px] items-start'>
                        <h2 className="leading-10 text-base font-bold uppercase">
                                Dịch Vụ
                            </h2>
                            <div className='text-[13px] flex flex-col gap-3'>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer '><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>
                                <div className='hover:pl-[15px] hover:text-[#ea7696] transition-all transition duration-150 ease-out cursor-pointer'><a>Điều khoản sử dụng</a></div>

                            </div>
                        </div>
                    </div>
                   
                  
                    <div className='w-full mt-4 px-[15px]'>
                    <h2 className="leading-10 text-base font-bold uppercase">Liên Hệ</h2>
                    <div className='grid grid-cols-1 xl:grid-cols-3 '>
                        <div className='flex w-full items-center'>
                            <ion-icon name="location"></ion-icon>
                            <span>
                                Xuân Thủy, Cầu Giấy , Hà Nội
                            </span>
                        </div>
                        <div className='flex w-full items-center xl:pl-8'>
                            <ion-icon name="mail"></ion-icon>
                            <span>
                                abc@gamil.com
                            </span>
                        </div>
                        <div className='flex w-full items-center'>
                            <ion-icon name="call"></ion-icon>
                            <span>
                                0392714445
                            </span>
                        </div>
                    </div>
                </div>
                </div>
           
            </div>
        </div>
    )
}

export default Footer