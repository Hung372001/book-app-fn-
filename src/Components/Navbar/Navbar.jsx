import React, { useRef, useState } from "react";
import { Link, Link as Links } from "react-router-dom";
import Account from "./Account";
import Cart from "./Cart";
import NavLinks from "./NavLink";
import Notification from "./notification";
import SearchSuggestions from "../searchSuggestions/searchSuggestions";
import { Typography } from "@mui/material";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const ref = useRef();
  const focusInput = () => {
    setCheck(!check);
  };

  return (
    <div className="w-full  bg-white">
      <div class=" max-w-[1230px] mx-auto bg-white">
        <div className=" hidden md:flex items-center w-full mr-0 relative flex-row justify-between">
          <div className=" flex ">
            <h1>
              <Links to="/">
                {" "}
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: "#C92127",
                  }}
                >
                  Book 11
                </Typography>
              </Links>
            </h1>
          </div>
          <div className="ml-[24px] w-24">
            <NavLinks />
          </div>

          <div className="relative  w-[585px] float-left ">
            <input
              type="text"
              name=""
              id=""
              class="border-[1px] border-black  h-10 w-full rounded-lg pl-4 search"
              onChange={(e) => setValueSearch(e.target.value)}
              onFocus={focusInput}
              onBlur={focusInput}
              placeholder="Tìm kiếm sản phẩm bạn mong muốn"
            />
            <Link to={`/search/${valueSearch}`}>
              <button
                className="absolute top-[50%] h-[30px] w-[72px] text-white right-1 z-[3] w-[72px]  bg-[#C92127] rounded-lg"
                style={{ transform: "translate(0, -50% )" }}
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </Link>
          </div>
          <SearchSuggestions check={check} />
          <div className="flex pl-[24px] justify-around w-80">
            <Account />
            <Link to="/cart">
              <Cart />
            </Link>

            <Notification />
          </div>
        </div>
        <div className=" block md:hidden">
          <div className="max-w-full text-center">
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: "#C92127",
              }}
            >
              Book 11
            </Typography>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl">
              <ion-icon
                name="menu-outline"
                onClick={() => setOpen(!open)}
              ></ion-icon>
            </div>
            <div class="w-[calc(100%-104px)]">
              <input
                type="text"
                className="border-[1px] border-black w-full rounded-lg pl-4"
                placeholder="Tìm kiếm sản phẩm bạn mong muôn"
              />
            </div>
            <div className="flex">
              <Account />
              <Cart />
            </div>
            <ul
              className={`
        md:hidden bg-white  absolute w-full h-full bottom-0 z-50 pb-24 pl-4
duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <li className="flex items-center justify-between">
                <a to="/" className="py-7 px-3 inline-block">
                  Trang Chủ
                </a>
                <div class="text-2xl">
                  <ion-icon
                    name={`${open ? "close" : "menu"}`}
                    onClick={() => setOpen(!open)}
                  ></ion-icon>
                </div>
              </li>
              <NavLinks />
              <div className="py-5"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
