import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "./Login";
import Register from "./Register";
// import "./accountNoAuth.css";
const AccountNoAuth = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="max-w-[1230px] m-auto bg-[white]">
      <Box
        sx={{
          maxWidth: "100%",
          typography: "body1",
          maxWidth: "calc(100vw - 20px)",
          margin: "0 auto",
          background: "white",
          padding: "24px",
        }}
      >
        <TabContext value={value} sx={{ with: "450px" }}>
          <Tabs
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ display: "flex", width: "100%" }}
            centered
          >
            <Tab label="Đăng Nhập" value="1" />
            <Tab label="Đăng Ký" value="2" />
          </Tabs>

          <TabPanel value="1">
            <Login />
          </TabPanel>
          <TabPanel value="2">
            <Register />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default AccountNoAuth;
