import { Button, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { DELETE_ITEM, addPrice } from "../redux/cartSystem";
import NoItem from "../img/ico_emptycart.svg";
import { Link } from "react-router-dom";
import { removeItem } from "../utils/removeItem";

const Cart = () => {
  const [valueNumber, setvalueNumber] = useState(1);
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((data) => data.user.product);
  useEffect(() => {
    setCars(cart);
  }, [cart]);

  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    setCars(cart);
  }, [cart]);

  const handleCarClick = (id) => {
    const carsCopy = [...cars];
    const carToUpdate = carsCopy.find((car) => car.id === id);

    carToUpdate.active = !carToUpdate.active;

    if (!carToUpdate.active && selectAll) {
      handleSelectAll();
    }

    // Set the state
    setCars(carsCopy);

    let flag = true;
    for (let i = 0; i < cars.length; i++) {
      flag = flag && cars[i].active;
    }

    if (flag && !selectAll) {
      handleSelectAll();
    }
  };
  console.log(cart);
  const handleSelectAll = () => {
    // Toggling selectAll state
    setSelectAll((prevState) => !prevState);

    // selectAll is NOT the latest
    setCars(cart.map((car) => ({ ...car, active: !selectAll })));
  };

  let sum = 0;
  cars.map((item) => {
    if (item.active === true) {
      sum += item.book.gia * item.quantity;
    }
  });
  const handDeleteItem = (item, state) => {
    const data = state.filter((i) => i.id !== item.id);
    setCars(data);
  };

  return (
    <div className="max-w-[1230px] w-full m-auto  mt-4 mb-4">
      <div className="mb-3">
        <span className="text-[#333333] font-bold text-[20px] ">
          Giỏ hàng ({cars.length} sản phẩm)
        </span>
      </div>
      {cart.length == 0 ? (
        <div className="bg-white p-5 flex flex-col items-center">
          <img src={NoItem} />
          <div className="my-5">
            <span>Chưa có sản phẩm trong giỏ hàng của bạn.</span>
          </div>
          <Link to="/">
            <Button variant="contained">Mua sắm ngay</Button>
          </Link>
        </div>
      ) : (
        <div className="flex mb-4">
          <div className="flex flex-col w-3/5">
            <div className="w-full flex bg-white rounded-lg items-center">
              <Checkbox
                // checked={!users.some((user) => user?.isChecked !== true)}
                checked={selectAll}
                onChange={handleSelectAll}
                sx={{
                  flexBasis: "8%",
                }}
              />
              <p className="mb-0 basis-[68%]">
                Chọn tất cả ({cars.length} sản phẩm)
              </p>
              <div className="basis-[13%]">
                <span>Số lượng</span>
              </div>
              <div className="basis-[21%]">
                <span>Thành tiền</span>
              </div>
            </div>
            <div className="w-full flex flex-col bg-white rounded-lg items-center mt-2">
              {cars.map((item, index) => (
                <div className="flex w-full py-5">
                  <Checkbox
                    checked={item.active}
                    onChange={() => handleCarClick(item.id)}
                    sx={{
                      flexBasis: "8%",
                    }}
                  />
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
                    <div className="flex  justify-center items-center">
                      <DeleteIcon
                        sx={{ justifyContent: "center" }}
                        onClick={() => {
                          dispatch(DELETE_ITEM(item));
                          handDeleteItem(item, cars);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-2/5 flex flex-col bg-white h-[160px] rounded-lg items-center  px-[40px] ml-2">
            <div className=" flex justify-between w-full items-center py-[10px] px-[16px]">
              <div className="basis-[65%]">
                <span className="font-extrabold text-[16px]">Tổng Số Tiền</span>
              </div>
              <div className="basis-[35%]">
                <span className="font-extrabold text-[21px] text-[#C92127]">
                  {sum}đ
                </span>
              </div>
            </div>
            <div className="w-full">
              <Link to="/order">
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                  }}
                  onClick={() => {
                    dispatch(addPrice(sum));
                  }}
                >
                  Thanh Toan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
