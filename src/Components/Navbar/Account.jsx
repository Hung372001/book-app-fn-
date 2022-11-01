import React, { useState } from "react";
import './style.css'
const Account = () => {
  const [Open, setOpen] = useState(false);
  console.log(Open)
  return (
    <div  id="Account" onc>
      <div className="flex flex-col justify-center items-center text-2xl cursor-pointer " onClick={()=>setOpen(!Open)}>
        <ion-icon name="person-outline"></ion-icon>
        <span className="hidden md:block text-xs">Tài Khoản</span>
      </div>
      <div className={`${Open===true ? "flex":""}hidden flex-col absolute pt-4 bg-white  rounded-lg top-[89px] right-[208px] `} > 
        <div className=" px-3 pb-1">
          <button className="bg-[#C92127] px-[10px] font-bold text-sm h-10 max-w-full max-full text-white rounded-lg" >
            {" "}
            Đăng Nhập Tài Khoản
          </button>
        </div>

        <div className="px-3 pb-4">
          <button className="bg-[white] px-[10px] font-bold text-sm border-2 border-[#C92127] mt-1 h-10 max-w-full w-full text-[#C92127] rounded-lg">
            {" "}
            Đăng Ký Tài Khoản
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
