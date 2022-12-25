import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./../style/style.css";
import AuthApi from "../api/auth.api";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Tab, Button, Skeleton } from "@mui/material/";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TacGia from "../Components/SliderCateGoRy/TacGia/TacGia";
import TheLoai from "../Components/SliderCateGoRy/TheLoai/TheLoai";
import NhaXuatBan from "../Components/SliderCateGoRy/NhaXuatBan/NhaXuatBan";
import { useDispatch } from "react-redux";
import { AddCard, changQuantity } from "../redux/cartSystem";
import Modal from "../Components/Modal/Modal";

const ChiTiet = () => {
  const [data, setData] = useState([]);
  const [valueNumber, setvalueNumber] = useState(1);
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();

  const [isLoad, setIsLoad] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handerUp = () => {
    let number = valueNumber;

    setvalueNumber(number + 1);
  };
  const handerDown = () => {
    let number;

    if (valueNumber < 1) {
      number = 1;
    } else {
      number = valueNumber;
    }

    setvalueNumber(number - 1);
  };
  const loadBook = async () => {
    const response = await AuthApi.getBookbyId(param.id)
      .then((res) => {
        console.log(res.data.findBookName);
        setData(res.data.findBookName);
        setIsLoad(true);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    loadBook();
  }, [param.id]);

  return (
    <div className="max-w-[1230px] m-auto mt-8 rounded-lg">
      <div className="w-full bg-white px-[16px] pt-[16px] pb-[25px]">
        <div className="flex">
          <div className=" w-2/5">
            {isLoad ? (
              <img
                src={`http://api-book-app-production.up.railway.app/book-name/img/${data.bookName.bookImg}`}
                className="m-auto"
              />
            ) : (
              <Skeleton
                variant="rectangular"
                height={366}
                width={232}
                animation="wave"
                sx={{
                  margin: "0 auto",
                }}
              />
            )}

            <div className="flex mx-auto justify-around mt-6">
              <Button
                variant="outlined"
                color="error"
                sx={{
                  width: "50%",
                }}
                startIcon={<ShoppingCartIcon />}
                onClick={() => {
                  setOpen(true);
                  dispatch(AddCard(data));
                }}
              >
                <span className="text-[12px] leading-[20px] font-bold">
                  Thêm vào giỏ hàng
                </span>
              </Button>

              <Button
                sx={{
                  width: "50%",
                  marginLeft: "10px",
                }}
                variant="contained"
                onClick={() => {
                  dispatch(AddCard(data));
                }}
              >
                <Link to="/cart">
                  <span className="text-[12px] leading-[20px] font-bold text-white">
                    Mua Ngay
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-3/5">
            <h1 className="font-semibold text-[#333] pb-4 text-[1.7em]">
              {data.name}
            </h1>
            <div className="w-4/5 flex justify-between">
              <div className="flex ">
                <span className="pr-[5px]">Nhà cung cấp:</span>
                {data.nhaCungCap && (
                  <p className="font-bold"> {data.nhaCungCap.name}</p>
                )}
              </div>
              <div className="flex">
                <span className="pr-[5px]">Tác giả:</span>
                {/*  */}
                {data.tacGia && (
                  <p className="font-bold"> {data.tacGia.name}</p>
                )}
              </div>
            </div>
            <div className="w-full flex">
              <div className="flex ">
                <span className="pr-[5px]">Hình thức bìa:</span>
                {/*  */}
                {data.bia && <p className="font-bold"> {data.bia.name}</p>}
              </div>
            </div>
            <div className="pt-2 pb-4">
              <span className="text-[32px] text-[#C92127] font-bold ">
                {data && <p className="font-bold"> {data.gia}đ</p>}
              </span>
            </div>
            <div className="pt-2 pb-4">
              <span className="inline-block m-w-[200px] min-w-[150px]">
                Chính sách đổi trả
              </span>
              <span>Đổi trả sản phẩm trong 30 ngày</span>
            </div>
            <div className="pt-2 pb-4 flex">
              <span className="inline-block m-w-[200px] min-w-[150px]">
                Số lượng:
              </span>
              <div className="flex items-center rounded h-8 border-[1px] border-[#c1c1c1] w-[155px]">
                <div
                  className="pl-[16px] pr-[16px] cursor-pointer"
                  onClick={handerUp}
                >
                  <AddIcon />
                </div>

                <input
                  className="w-[3em]  text-center font-extrabold text-[#0D0E0F] h-full"
                  type="number"
                  min="1"
                  value={valueNumber}
                  onChange={dispatch(changQuantity(valueNumber))}
                />
                <div className="pl-[16px] pr-[16px] cursor-pointer">
                  <RemoveIcon onClick={handerDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-[16px] pt-[16px] pb-[25px] mt-[15px] mb-8 rounded-lg">
        <h1 className="text-[17px] font-semibold "> Sản Phẩm Liên Quan</h1>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                justifyContent: "start !important",
              }}
            >
              <Tab label="Cùng Tác Giả" value="1" />
              <Tab label="Cùng Nhà Xuất Bản" value="2" />
              <Tab label="Cùng Thể Loại" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TacGia api={data.tacGia && data.tacGia.name} />
          </TabPanel>
          <TabPanel value="2">
            <NhaXuatBan api={data.nhaXuatBan && data.nhaXuatBan.name} />
          </TabPanel>
          <TabPanel value="3">
            <TheLoai api={data.theLoai && data.theLoai.name} />
          </TabPanel>
        </TabContext>
      </div>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default ChiTiet;
