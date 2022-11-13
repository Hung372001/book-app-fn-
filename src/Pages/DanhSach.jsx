import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCurmb/BreadCrumb";
import ListBook from "./../data/ListNavBook";
import ListBook2 from "../Components/ListBook/ListBook";
import Gia from "./../data/Gia";
import NXP from "./../data/NXP";
import ListItemBook from "../Components/List/ListItemBook";
import bookItem from "../data/BookItem";
import Pagination from "../Components/Pagination/Pagination";
const DanhSach = () => {
  const ref = useRef(null);
  const params = new URLSearchParams(window.location.pathname);
  let { category, category1, category2 } = useParams();
  console.log(window.location.pathname)
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState([]);
  const [listbook,setListBook]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  let a;
  bookItem.map(item=>{
    
    item.listItem.map(data=>{
       
    a=data.item;

    })
})
useEffect(() => {

  setListBook(a)
},[0] );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listbook.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleCheck = (id) => {
    setChecked((pre) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };
  console.log();
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  }, []);
  return (
    <div className="max-w-[1230px] w-full mx-auto">
      <div>
        <BreadCrumb />
      </div>
<div className="flex justify-between gap-4">
<div className="bg-white w-3/12 py-5 px-[10px]">
        <div>
          <ul ref={ref}>
            {window.location.pathname.includes( "DanhSach") ? (
              <li>
                Tất cả Sản Phẩm
                {ListBook.map((item, index) => {
                  if (item.cate == category) {
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
                          {category}
                        </Link>

                        <ul className="ml-[10px]">
                          {item.list.map((dt, index) => (
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
                                    {dt.list.map((data) => (
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
                    return (
                      <li>
                        <Link
                          to={`/DanhSach/${item.cate}`}
                          className={`${
                            item.cate == item.name
                              ? "text-[#F7941E]  font-bold text-[14px]"
                              : "text-[#333333] hover:text-[#333333]"
                          } "`}
                        >
                          {item.cate}
                        </Link>
                      </li>
                    );
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
            <ul className="pl-[10px]">
              {Gia.map((item, index) => (
                <li key={index} className="flex items-center ">
                  <input
                    type="checkbox"
                    checked={checked.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                  />
                  <p className="pl-5 m-0">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Thể Loại</h2>
            <ul className="pl-[10px]">
              {NXP.map((item, index) => (
                <li key={index} className="flex items-center ">
                  <input
                    type="checkbox"
                    checked={checked.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                  />
                  <p className="pl-5 m-0">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
      <div className="w-9/12">
      <ListBook2 data={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={listbook.length}
        paginate={paginate}
      />
      </div>
</div>
     
    </div>
  );
};

export default DanhSach;

