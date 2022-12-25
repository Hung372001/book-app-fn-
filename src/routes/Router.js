import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import DanhSach from "../Pages/DanhSach";
import Home from "../Pages/Home";
import accountNoAuth from "../Pages/accountNoAuth";
import Cart from "../Pages/Cart";
import Order from "../Pages/Order";
import ThanhToanHoanTat from "../Pages/ThanhToanHoanTat";
import Account from "../Pages/Account";
import Search from "../Components/Search/Search";
import AccountNoAuth from "../Pages/accountNoAuth";

// import ChiTiet from "../Pages/ChiTiet";
const LazyChiTiet = lazy(() => import("../Pages/ChiTiet"));
console.log(1234);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "DanhSach",
//         element: <DanhSach />,
//         children: [
//           {
//             path: ":category",
//             element: <DanhSach />,
//             children: [
//               {
//                 path: ":category2",
//                 element: <DanhSach />,
//                 children: [
//                   {
//                     path: ":category3",
//                     element: <DanhSach />,
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },

//       {
//         path: "account",
//         element: localStorage.getItem("user") ? <Account /> : <AccountNoAuth />,
//       },
//     ],
//   },

//   {
//     path: "*",
//     element: <div> Trang khong tim thay </div>,
//   },
// ]);
// DanhSach/phim/anh/hanhdong/ => {category: phim }
const Router = () => {
  const storedData = localStorage.getItem("user");

  return (
    <Switch>
      <Route path="/" exact component={Home} />{" "}
      <Route
        path="/DanhSach/:category/:category1/"
        exact
        component={DanhSach}
      />{" "}
      <Route
        path="/DanhSach/:category/:category1/:category2"
        exact
        component={DanhSach}
      />{" "}
      <Route path="/DanhSach/:category/:category1" exact component={DanhSach} />{" "}
      <Route path="/DanhSach/:category" exact component={DanhSach} />{" "}
      <Route path="/DanhSach/" exact component={DanhSach} />{" "}
      <Route path="/Sach/:id">
        <Suspense fallback="loading">
          <LazyChiTiet />
        </Suspense>{" "}
      </Route>{" "}
      <Route
        path="/account/"
        exact
        component={storedData ? Account : accountNoAuth}
      />{" "}
      <Route path="/cart/" exact component={Cart} />{" "}
      <Route path="/order/" exact component={Order} />{" "}
      <Route path="/thanh-toan-hoan-tat/" exact component={ThanhToanHoanTat} />{" "}
      <Route path="/search/:search" exact component={Search} />{" "}
    </Switch>
  );
};

export default Router;
