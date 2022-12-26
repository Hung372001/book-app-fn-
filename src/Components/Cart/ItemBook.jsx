import React from "react";

const ItemBook = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex w-[387px] relative p-2 border-[1px] border-[#F2F4F5] p-2 mr-2">
      <div className="w-1/2">
        <a href="">
          <div>
            <img
              src={`http://api-book-app-production.up.railway.app/book-name/img/${data.img}`}
              alt=""
              className="max-h-[190px]"
            />
          </div>
        </a>
      </div>
      <div className="flex flex-col w-1/2 ">
        <h2 className="mt-[0.5rem] text-start h-10 text-sm overflow-hidden text-ellipsis ">
          {data.nameBook}
        </h2>
        <div className="flex flex-col">
          <p className="flex ">
            <span className="text-[1.45rem] leading-7 text-[14.5px] text-[#C92127] font-semibold ">
              {data.gia}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemBook;
