import React, { useEffect, useState } from "react";
import NXP from "./../../data/NXP";
import AuthApi from "../../api/auth.api";
import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import ListBook2 from "../ListBook/ListBook";
import { useParams } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
const Search = () => {
  const [data, setData] = useState([]);
  const [bia, setBia] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [bookSearch, setBookSearch] = useState([]);
  const [nhaXuatBanValue, setNhaXuaBanValue] = useState(null);
  const [value, setValue] = useState([0, 700000]);
  const pageSize = 12;
  const stringSearch = useParams();
  const [BiaValue, setBiaValue] = useState(null);
  const handleChangeNhaXuatBan = (name) => setNhaXuaBanValue(name);
  const handleBia = (newValue) => {
    setBiaValue(newValue);
  };
  const getData = async () => {
    const response = await AuthApi.getNhaXuatBan()
      .then((res) => {
        setData(res.data.nhaXuatBan);
      })
      .catch((error) => {});
    const Bia = await AuthApi.getBia()
      .then((res) => {
        setBia(res.data.Bia);
      })
      .catch((error) => {});

    const responseData = await AuthApi.search(
      stringSearch.search,
      page,
      dataBook
    )
      .then((res) => {
        setBookSearch(res.data.findBookName);
        setIsLoad(true);
        console.log(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, [stringSearch, nhaXuatBanValue]);
  const dataBook = {
    nameNhaXuatBan: nhaXuatBanValue,
    minPrice: value[0],
    maxPrice: value[1],
  };
  return (
    <Helmet title={`Kết quả tìm kiếm với : ${stringSearch.search}`}>
      <div className="max-w-[1230px] m-auto flex mt-4 mb-4 ">
        <div className="w-3/12 bg-white pt-[10px] py-5 px-[10px] mr-[15px]">
          <div>
            <h2>Nhà Xuất Bản</h2>
            <ul className="pl-[10px] border-b-2 border-[#f6f6f6]">
              <li className={`flex items-center`}>
                <input
                  type="radio"
                  checked={nhaXuatBanValue === null}
                  onChange={() => {
                    handleChangeNhaXuatBan(null);
                  }}
                />
                <p className="pl-5 m-0">Tất cả</p>
              </li>
              {data.map((item, index) => (
                <li key={index} className={`flex items-center`}>
                  <input
                    type="radio"
                    checked={nhaXuatBanValue === item.name}
                    onChange={() => {
                      handleChangeNhaXuatBan(item.name);
                    }}
                  />
                  <p className="pl-5 m-0">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="py-[10px]">Bìa</h2>
            <ul className="pl-[10px] border-b-2 border-[#f6f6f6]">
              <li className={`flex items-center ml-[7px]  mb-[10px]`}>
                <input
                  type="radio"
                  checked={BiaValue === null}
                  onChange={() => {
                    handleBia(null);
                  }}
                />
                <p className="pl-5 m-0">Tất cả</p>
              </li>
              {bia.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center ml-[7px] mb-[10px]`}
                >
                  <input
                    type="radio"
                    checked={BiaValue === item.name}
                    onChange={() => {
                      handleBia(item.name);
                    }}
                  />
                  <p className="pl-5 m-0">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-9/12 ">
          {bookSearch && <ListBook2 data={bookSearch} isLoad={isLoad} />}
          <div className="bg-white flex justify-center py-[13px] px-[15px]">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(bookSearch.length / pageSize)}
                page={page}
                sx={{
                  "& button:hover": {
                    backgroundColor: "#C92127",
                    color: "#ffff",
                  },

                  "& button.Mui-selected": {
                    backgroundColor: "#C92127",
                    color: "#ffff",
                  },
                }}
                variant="outlined"
                shape="rounded"
                onChange={(event, value) => setPage(value)}
              />
            </Stack>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Search;
