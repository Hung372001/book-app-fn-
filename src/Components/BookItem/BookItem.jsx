import React from "react";
import "./style.css";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
const BookItem = (props) => {
  const { id, name, gia, img, isLoad } = props;

  return (
    <div className="p-[9px] bg-white itembok flex flex-col ">
      {isLoad ? (
        <Link to={`/Sach/${id}`}>
          <img
            src={`http://api-book-app-production.up.railway.app/book-name/img/${img}`}
            alt=""
            className="max-h-[190px] object-contain"
          />
        </Link>
      ) : (
        <Skeleton variant="rectangular" height={190} />
      )}

      <div className="flex-1 flex flex-col  ">
        {isLoad ? (
          <Link to={`/Sach/${id}`}>
            <h1 class="flex-1">{name}</h1>
          </Link>
        ) : (
          <Skeleton variant="rectangular" />
        )}
        {isLoad ? (
          <div className="flex mt-auto flex-shrink-0 text-[#C92127] font-semibold text-[16.5px]">
            <Link to={`/Sach/${id}`}>
              <span className="text-[#C92127]">{gia}</span>
            </Link>
            <Link to={`/Sach/${id}`}>
              <span className="text-[#C92127]">đ</span>
            </Link>
          </div>
        ) : (
          <Skeleton variant="rectangular" />
        )}
      </div>
    </div>
  );
};

export default BookItem;
