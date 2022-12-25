import React, { useState, useEffect } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { OrderSchema } from "../utils/yupGlobal";
import { useForm } from "react-hook-form";
import { data as dataThanhToan } from "./../data/imgOrder";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import AuthApi from "../api/auth.api";
const Order = () => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(OrderSchema),
    criteriaMode: "all",
  });

  const [province, setProvince] = useState([]);
  const [provinceId, setProvinceId] = useState();
  const [provinceName, setProvinceName] = useState("");
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState();
  const [districtName, setDistrictName] = useState("");
  const [ward, setWard] = useState([]);
  const [wardId, setWardId] = useState();
  const [wardName, setWardName] = useState("");
  const [value, setValue1] = React.useState("female");
  const order = useSelector((data) => data.user.product);
  const [products, setProduct] = useState({ order });
  const prices = useSelector((data) => data.user.PriceChange);
  console.log(prices);
  const getProvince = () => {
    let sum = 0;
    order.map((el) => {
      sum += el.book.gia;
    });
    console.log(sum);
    return axios
      .get("https://provinces.open-api.vn/api/p/?depth=2")
      .then((response) => {
        const persons = response.data;
        setProvince(persons);
      });
  };
  const getThaPho = () => {
    return axios
      .get(`https://provinces.open-api.vn/api/p/${provinceId}`)
      .then((response) => {
        const persons = response.data.name;
        setProvinceName(persons);
      });
  };
  const getHuyen = () => {
    return axios
      .get(`https://provinces.open-api.vn/api/d/${districtId}`)
      .then((response) => {
        const persons = response.data.name;
        setDistrictName(persons);
      });
  };
  const Xa = () => {
    return axios
      .get(`https://provinces.open-api.vn/api/w/${wardId}`)
      .then((response) => {
        const persons = response.data.name;
        console.log(persons);
        setWardName(persons);
      });
  };

  const getDistrict = () => {
    return axios
      .get(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`)
      .then((response) => {
        const persons = response.data.districts;
        setDistrict(persons);
      });
  };

  const getWard = () => {
    return axios
      .get(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
      .then((response) => {
        const persons = response.data.wards;
        setWard(persons);
      });
  };
  useEffect(() => {
    getProvince();
    getDistrict();
    getWard();
    getThaPho();
    getHuyen();
    Xa();
  }, [provinceId, districtId, wardId]);
  const handleChange = (event) => {
    setValue1(event.target.value);
  };
  const price = {
    price: `${prices + 20000}`,
  };
  const diaChi = {
    ThanhPho: `${provinceName}`,
    QuanHuyen: `${districtName}`,
    XaPhuong: `${wardName}`,
  };

  const handGetOrder = async (data) => {
    data = Object.assign(data, diaChi, order, price);
    console.log(data);
    const response = await AuthApi.createOrder(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1230px] m-auto mt-4">
      <div className="py-2 px-4 bg-white mb-4 ">
        <div className="py-2 font-bold text-base border-b-[1px] border-[#ced4da]">
          Địa chỉ giao hàng
        </div>
        <div className="flex flex-col max-w-[650px]">
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Họ và tên người nhận</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <input
                type="text"
                className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full"
                placeholder="Nhập họ và tên người nhận"
                name="nameNguoiNhan"
                onChange={(e) => {
                  setValue("nameNguoiNhan", e.target.value, {
                    shouldValidate: true,
                  });
                }}
              />
              {errors.nameNguoiNhan && (
                <Typography component="subtitle1" sx={{ color: "red" }}>
                  {errors.nameNguoiNhan.message}
                </Typography>
              )}
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Email</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <input
                type="text"
                className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full"
                placeholder="Nhập họ và tên người nhận"
                name="name"
                onChange={(e) => {
                  setValue("email", e.target.value, { shouldValidate: true });
                }}
              />
              {errors.email && (
                <Typography component="subtitle1" sx={{ color: "red" }}>
                  {errors.email.message}
                </Typography>
              )}
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Số điện thoại</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <input
                type="text"
                className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full"
                placeholder="Nhập họ và tên người nhận"
                name="SoDienThoai"
                onChange={(e) => {
                  setValue("SoDienThoai", e.target.value, {
                    shouldValidate: true,
                  });
                }}
              />
              {errors.SoDienThoai && (
                <Typography component="subtitle1" sx={{ color: "red" }}>
                  {errors.SoDienThoai.message}
                </Typography>
              )}
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Tỉnh Thành Phố</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <select className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full bg-white">
                <option disabled="" value="">
                  Chọn tỉnh / thành phố
                </option>
                {province.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                    onClick={(e) => setProvinceId(e.target.value)}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Quận / Huyện</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <select className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full bg-white">
                <option disabled="" value="">
                  Chọn Quận / Huyện
                </option>
                {district.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                    onClick={(e) => setDistrictId(e.target.value)}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Phường / Xã</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <select className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full bg-white">
                <option disabled="" value="">
                  Chọn Phường / Xã
                </option>
                {ward.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                    onClick={(e) => setWardId(e.target.value)}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex py-4 w-full text-sm justify-between items-center">
            <label className="w-[150px]">Địa chỉ nhận hàng</label>
            <div className="h-[30px]  w-[calc(100%-154px)] ">
              <input
                type="text"
                className="border-[1px] boder-[#ced4da] px-4 py-1 rounded-sm w-full"
                placeholder="Nhập địa chỉ nhận hàng"
                name="DiaChi"
                onChange={(e) => {
                  setValue("DiaChi", e.target.value, {
                    shouldValidate: true,
                  });
                }}
              />
              {errors.DiaChi && (
                <Typography component="subtitle1" sx={{ color: "red" }}>
                  {errors.DiaChi.message}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-4 bg-white mb-4 ">
        <div className="py-2 font-bold text-base border-b-[1px] border-[#ced4da]">
          Phương thức vận chuyển
        </div>
        <div className="py-4">
          {!errors.diaChi && !errors.phoneNumber && !errors.name && (
            <div>
              <FormControlLabel
                checked={true}
                value="giaoHang"
                control={<Radio />}
              />
              <Typography component="body1">
                Giao hàng tiêu chuẩn: 20.000 đ
              </Typography>
            </div>
          )}
        </div>
      </div>
      <div className="py-2 px-4 bg-white mb-4 ">
        <div className="py-2 font-bold text-base border-b-[1px] border-[#ced4da]">
          Phương thức thanh toán
        </div>
        <div className="py-4">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {dataThanhToan.map((el) => (
              <div key={el.id} className="flex items-center">
                <FormControlLabel value={el.name} control={<Radio />} />
                <div
                  style={{
                    background: `url(${el.img})`,
                    backgroundRepeat: "no-repeat",

                    width: "40px",
                    height: "24px",
                  }}
                ></div>
                <span>{el.name}</span>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="py-2 px-4 bg-white mb-4 ">
        <div className="py-2 font-bold text-base border-b-[1px] border-[#ced4da]">
          KIỂM TRA LẠI ĐƠN HÀNG
        </div>
        {order.map((item) => (
          <div className="flex w-full py-5">
            <div className="basis-[16%] items-center justify-center p-0 flex ">
              <img
                src={`http://api-book-app-production.up.railway.app/book-name/img/${item.bookImg}`}
                className="max-h-[119px] w-auto object-contain"
              />
            </div>
            <div className="flex  basis-[68%]">
              <div className="flex flex-col justify-between basis-[60%] py-0 px-[10px]">
                <span className="w-full">{item.name}</span>
                <span>{item.book.gia}</span>
              </div>
              <div className="flex basis-[40%] justify-center items-center ">
                <span>{item.quantity}</span>
                <div className="text-center flex flex-col flex-[3] justify-center items-center">
                  <span className="font-bold text-[#C92127] text-[17px]">
                    {item.book.gia * item.quantity}đ
                  </span>
                </div>
              </div>
              <div className="flex  justify-center items-center"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-2 px-4 bg-white mb-4 ">
        <div className="flex flex-col items-start">
          <div className="w-full flex">
            <div className="w-[calc(100%-150px)] text-right font-extrabold">
              Thành Tiền
            </div>
            <span className="w-[150px] text-right">{prices} đ</span>
          </div>
          <div className="w-full flex">
            <div className="w-[calc(100%-150px)] text-right font-extrabold">
              Phí Vận Chuyển
            </div>
            <span className="w-[150px] text-right">20000 đ</span>
          </div>
          <div className="w-full flex">
            <span className="w-[calc(100%-150px)] text-right font-extrabold text-[#C92127] text-[21px]">
              Tổng Tiền{" "}
            </span>
            <span className="w-[150px] text-right font-extrabold text-[21px]">
              {prices + 20000} đ
            </span>
          </div>
          <div className="flex justify-end w-full my-4">
            <Button
              variant="contained"
              sx={{}}
              onClick={handleSubmit(handGetOrder)}
            >
              Xác Thanh Toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
