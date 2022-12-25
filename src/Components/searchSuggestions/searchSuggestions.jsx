import React, { useState, useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AuthApi from "../../api/auth.api";
import { Link } from "react-router-dom";

const SearchSuggestions = (props) => {
  const { check } = props;
  const [data, setData] = useState([]);

  const getDataHotSearch = async () => {
    const response = await AuthApi.getbook()
      .then((res) => {
        setData(res.data.book);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getDataHotSearch();
  }, 0);

  return (
    <div
      className={`absolute -bottom-24 left-1/2 z-999 max-w-[100vw] text-[#7a7e7e] cursor-default bg-white whitespace-nowrap p-[6px] rounded-lg z-[9999] translate-x-[-58%] translate-y-[50%] ${
        check ? "" : "hidden"
      }`}
    >
      <div>
        <div className="px-3 py-[8px]">
          <TrendingUpIcon />
          <span>Từ khóa hot</span>
        </div>
        <div className="flex flex-wrap px-3 py-4 gap-x-[5px] gap-y-5 ">
          {data.map(
            (el) =>
              el.isHotSearch == true && (
                <Link to={`/Sach/${el.id}`} key={el.id} className="w-full ">
                  <div className="flex h-[57px] w-full hover:shadow-2xl  rounded-md">
                    <img
                      className="w-[47px] h-[57px]"
                      src={`http://api-book-app-production.up.railway.app/book-name/img/${el.bookName.bookImg}`}
                    />
                    <div className="text-sm text-[#7a7e7e] max-h-9 min-h-9 text-ellipsis overflow-hidden pl-3 ">
                      {el.bookName.name}
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
