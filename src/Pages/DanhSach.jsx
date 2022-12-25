import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCurmb/BreadCrumb";
import ListBook2 from "../Components/ListBook/ListBook";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Slider } from "@mui/material";
import AuthApi from "../api/auth.api";
import Helmet from "../Components/Helmet/Helmet";

const DanhSach = () => {
  const ref = useRef(null);
  const params = new URLSearchParams(window.location.pathname);
  let { category, category1, category2 } = useParams();
  const [value, setValue] = useState([0, 700000]);
  const [dataAll, setDataAll] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [checkedNXP, setCheckedNXP] = useState([]);
  const [bia, setBia] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [nhaXuatBanValue, setNhaXuaBanValue] = useState(null);
  const [BiaValue, setBiaValue] = useState(null);
  const pageSize = 12;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadBook = async () => {
    const response = await AuthApi.getBookCateAndPrice(page, dataBook)
      .then((res) => {
        setData(res.data.find);
        setIsLoad(true);
      })
      .catch((error) => {});
    const responseAll = await AuthApi.getbook(dataBook)
      .then((res) => {
        setDataAll(res.data.find);
        setIsLoad(true);
      })
      .catch((error) => {});
    const responseCategory = await AuthApi.getNgonNguSach()
      .then((res) => {
        setDataCate(res.data.ngonNguSach);
      })
      .catch((error) => {});
    const responseNXP = await AuthApi.getNXP()
      .then((res) => {
        setCheckedNXP(res.data.nhaXuatBan);
      })
      .catch((error) => {});
    const responseBia = await AuthApi.getBia()
      .then((res) => {
        setBia(res.data.Bia);
      })
      .catch((error) => {});
  };

  const handleChangeNhaXuatBan = (name) => setNhaXuaBanValue(name);
  const handleBia = (newValue) => {
    setBiaValue(newValue);
  };
  useEffect(() => {
    loadBook();
  }, [category2, category1, value, nhaXuatBanValue, page]);
  const dataBook = {
    nameTheLoai: category2,
    nameloaiSach: category1,
    nameNhaXuatBan: nhaXuatBanValue,
    minPrice: value[0],
    maxPrice: value[1],
  };

  return (
    <Helmet title="Danh sách sản phẩm">
      <div className="max-w-[1230px] w-full mx-auto mt-4 mb-4">
        <div className="mt-2 mb-2">
          <BreadCrumb />
        </div>
        <div className="flex justify-between gap-4">
          <div className="bg-white w-3/12 py-5 px-[10px]">
            <div>
              <ul ref={ref}>
                {window.location.pathname.includes("DanhSach") ? (
                  <li>
                    Tất cả Sản Phẩm
                    {dataCate.map((item, index) => {
                      if (item.name == category) {
                        return (
                          <li>
                            <Link
                              to={`/DanhSach/${category}`}
                              className={`${
                                category1 == item.name
                                  ? "text-[#F7941E]  font-bold text-[14px]"
                                  : "text-[#333333] hover:text-[#333333]"
                              } "`}
                            >
                              {item.name}
                            </Link>

                            <ul className="ml-[10px]">
                              {item.loaiSach.map((dt, index) => (
                                <li>
                                  <Link
                                    to={`/DanhSach/${category}/${dt.name}`}
                                    className={`${
                                      category1 == dt.name
                                        ? "text-[#F7941E]  font-bold text-[14px]"
                                        : "text-[#333333] hover:text-[#333333]"
                                    } "`}
                                  >
                                    {dt.name}
                                  </Link>
                                  <ul>
                                    {dt.name == category1 ? (
                                      <ul className="ml-[15px]">
                                        {dt.theLoai.map((data) => (
                                          <li>
                                            <Link
                                              to={`/DanhSach/${category}/${dt.name}/${data.name}`}
                                              className={`${
                                                category2 == data.name
                                                  ? "text-[#F7941E]  font-bold text-[14px]"
                                                  : "text-[#333333] hover:text-[#333333]"
                                              } "`}
                                            >
                                              {data.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <div></div>
                                    )}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      } else {
                        // return (
                        //   // <li>
                        //   //   <Link
                        //   //     to={`/DanhSach/${item.cate}`}
                        //   //     className={`${
                        //   //       item.cate == item.name
                        //   //         ? "text-[#F7941E]  font-bold text-[14px]"
                        //   //         : "text-[#333333] hover:text-[#333333]"
                        //   //     } "`}
                        //   //   >
                        //   //     {item.cate}
                        //   //   </Link>
                        //   // </li>
                        // );
                      }
                    })}
                  </li>
                ) : (
                  <div></div>
                )}
              </ul>
              <div onClick={() => setToggle(!toggle)}>Xem Them</div>
            </div>
            <div className="border-[1px] border-[#f6f6f6]"></div>
            <div>
              <div>
                <h2>Giá</h2>
                <Slider
                  size="small"
                  getAriaLabel={() => "Temperature range"}
                  max="700000"
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  disableSwap
                />
              </div>
              <div>
                <h2>Nhà Xuất Bản</h2>
                <ul className="pl-[10px]">
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
                  {checkedNXP.map((item, index) => (
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
                <h2>Bìa</h2>
                <ul className="pl-[10px]">
                  <li className={`flex items-center`}>
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
                    <li key={index} className={`flex items-center`}>
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
          </div>
          <div className="w-9/12 ">
            {data && <ListBook2 data={data} isLoad={isLoad} />}
            <div className="bg-white flex justify-center py-[13px] px-[15px]">
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(dataAll.length / pageSize)}
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
      </div>
    </Helmet>
  );
};

export default DanhSach;
