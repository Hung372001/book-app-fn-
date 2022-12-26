import React from "react";
import AuthApi from "../../api/auth.api";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const email = localStorage.getItem("user").slice(1);
  let emaiNew = email.slice(0, -1);
  const [data, setData] = useState([]);
  const loadBook = async () => {
    const response = await AuthApi.getUserEmail(emaiNew)
      .then((res) => {
        setData(res.data.user);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    loadBook();
  }, [0]);
  return (
    <div>
      <div className="flex flex-col">
        <div class="grid grid-cols-2 gap-4">
          <div>Họ</div>
          <div>{data.FirstName}</div>
          <div>Tên </div>
          <div>{data.LastName}</div>
          <div>Email </div>
          <div>{data.email}</div>
          <div>Số Điện Thoại </div>
          <div>{data.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
