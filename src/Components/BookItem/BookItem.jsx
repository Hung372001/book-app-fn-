import React from "react";
import "./style.css";
import { Skeleton } from "@mui/material";
const BookItem = (props) => {
  const { name, gia, img, isLoad } = props;

  return (
    <div className="p-[9px] bg-white itembok flex flex-col ">
      {isLoad ? (
        <img
          src={`http://api-book-app-production.up.railway.app/book-name/img/${img}`}
          alt=""
          className="max-h-[190px] object-contain"
        />
      ) : (
        <Skeleton variant="rectangular" height={190} />
      )}

      <div className="flex-1 flex flex-col  ">
        {isLoad ? (
          <h1 class="flex-1">{name}</h1>
        ) : (
          <Skeleton variant="rectangular" />
        )}
        {isLoad ? (
          <div className="flex mt-auto flex-shrink-0 text-[#C92127] font-semibold text-[16.5px]">
            <span className="">{gia}</span>
            <span>đ</span>
          </div>
        ) : (
          <Skeleton variant="rectangular" />
        )}
      </div>
    </div>
  );
};

export default BookItem;
