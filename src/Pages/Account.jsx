import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Profile from "../Components/Profile/Profile";
import HistoryOrder from "../Components/HistoryOrder/HistoryOrder";
import Logout from "../Components/Logout/Logout";

const Account = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="max-w-[1230px] m-auto bg-white">
      <div className="flex flex-col justify-center">
        <Typography
          variant="h4"
          sx={{ alignItems: "center", margin: "auto", color: "#C92127" }}
        >
          Tài Khoản
        </Typography>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="Thông Tin Tài Khoản" value="1" />
              <Tab label="Đơn hàng của tôi" value="2" />
              <Tab label="Đăng Xuât" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Profile />
          </TabPanel>
          <TabPanel value="2">
            <HistoryOrder />{" "}
          </TabPanel>
          <TabPanel value="3">
            <Logout />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Account;
