import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import LabTabs from "../Components/Tabs/Tabs";
import bookItems from "./../data/BookItem";
const Home = () => {
  // import alias react
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [dataTest, setDataTest] = useState([]);
  const [code, setCode] = useState(0);
  const [dis, setDis] = useState([]);
  const [listDis, setListDis] = useState([]);

  return (
    <div className="bg-[#f0f0f0]">
      <Slider />
      {bookItems.map((dt) => (
        <LabTabs {...dt} />
      ))}
    </div>
  );
};

export default Home;
