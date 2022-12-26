import React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import AuthApi from "../../api/auth.api";

const HistoryOrder = () => {
  const email = localStorage.getItem("user").slice(1);
  let emaiNew = email.slice(0, -1);
  const [data, setData] = useState([]);
  const loadBook = async () => {
    const response = await AuthApi.getOrder(emaiNew)
      .then((res) => {
        setData(res.data.order);
        console.log(res.data);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    loadBook();
  }, [0]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Đơn hàng</TableCell>
            <TableCell align="right">Ngày</TableCell>
            <TableCell align="right">Người Nhận</TableCell>
            <TableCell align="right">Số tiền</TableCell>
            <TableCell align="right">Trạng Thai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">27/12/2022</TableCell>
              <TableCell align="right">{row.nameNguoiNhan}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.trangThai}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HistoryOrder;
