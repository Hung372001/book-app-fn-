import React from 'react'

const ItemBook = (props) => {
    const { img, name, price, discount, old_price } = props;

    return (
        <div className='flex w-[387px] relative p-2 border-[1px] border-[#F2F4F5] p-2 mr-2'>
            <div className='w-1/2'>
                <a href="">
                    <div>
                        <img src={img} alt="" className="max-h-[190px]" />
                    </div>
                </a>
            </div>
            <div className='flex flex-col w-1/2 ' >
                <h2 className='mt-[0.5rem] text-start h-10 text-sm overflow-hidden text-ellipsis '>{name}</h2>
                <div className="flex flex-col">
                    <p className='flex '>
                        <span className="text-[1.45rem] leading-7 text-[14.5px] text-[#C92127] font-semibold ">
                            {price}
                        </span>
                        {
                            discount == "" || discount === null || discount === undefined ? (
                                <span className='ml-2 px-1 py-[3px] rounded font-semibold text-white bg-[#C92127] text-[13px]'>
                                </span>
                            ) : (
                                <span className='ml-2 px-1 py-[3px] rounded font-semibold text-white bg-[#C92127] text-[13px]'>
                                    {discount}
                               </span>
                            )
                        }
                    </p>
                    {
                        discount == "" || discount === null || discount === undefined ? (
                            <p className='text-[12px] text-[#888888] line-through p-0'>
                            </p>
                        ) : (
                            <p className=' text-justify text-[12px] text-[#888888] line-through p-0'>
                                {old_price}
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemBook