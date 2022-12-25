import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <div id="Account">
      <Link to="/account">
        <div className="flex flex-col justify-center items-center text-2xl cursor-pointer ">
          <ion-icon name="person-outline"></ion-icon>
          <span className="hidden md:block text-xs">Tài Khoản</span>
        </div>
      </Link>
    </div>
  );
};

export default Account;
