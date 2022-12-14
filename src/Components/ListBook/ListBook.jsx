import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import Pagination from "../Pagination/Pagination";
import bookItem from "./../../data/BookItem";
const ListBook2 = (props) => {
  const { data, isLoad } = props;
  return (
    <div class="grid grid-cols-4 gap-4 bg-white">
      {data.map((item, index) => (
        <BookItem
          id={item.id}
          gia={item.gia}
          name={item.bookName.name}
          img={item.bookName.bookImg}
          isLoad={isLoad}
        />
      ))}
    </div>
  );
};

export default ListBook2;
