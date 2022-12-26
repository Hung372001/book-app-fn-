import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import LabTabs from "../Components/Tabs/Tabs";

import Helmet from "../Components/Helmet/Helmet";
import AuthApi from "../api/auth.api";
const Home = () => {
  const [data, setData] = useState([]);
  const loadBook = async () => {
    const responseBia = await AuthApi.getLoaiSach()
      .then((res) => {
        setData(res.data.loaiSach);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    loadBook();
  }, [0]);
  console.log(data);
  return (
    <Helmet title="Trang Chủ">
      <div className="bg-[#f0f0f0]">
        <Slider />
        {data.map((dt) => (
          <LabTabs data={dt} />
        ))}
      </div>
    </Helmet>
  );
};

export default Home;
