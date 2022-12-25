import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ImgCart from "./../../img/imgCart/image_195509_1_29993.jpg";
import ListItemBook from "../List/ListItemBook";

import { Typography } from "@mui/material";

const LabTabs = (props) => {
  const { nameList, listItem } = props;
  const [value, setValue] = React.useState("1");
  const [listTab, setlistTab] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(listItem);
  return (
    <div className="max-w-[1230px] mx-auto bg-white rounded-lg mt-4">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Typography
          variant="h5"
          sx={{
            paddingTop: "12px",
            paddingLeft: "20px",
            paddingBottom: "5px",
          }}
        >
          {nameList}
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              TabIndicatorProps={{
                hidden: true,
              }}
              sx={{
                paddingLeft: "1.5rem",
                "& button:focus": {
                  borderRadius: 1,
                  border: "1px solid #F7931E",
                  color: "#F7931E",
                },

                "& button.Mui-selected": {
                  borderRadius: 1,
                  border: "1px solid #F7931E",
                  color: "#F7931E",
                },
                "& button ": {
                  margin: "10px 5px 5px 5px",
                  padding: "8px 16px",
                  fontSize: "14px",
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {listItem.map((dt) => (
                <Tab label={dt.nameListItem} value={dt.id} />
              ))}
            </TabList>
          </Box>
          {listItem.map((dt) => (
            <TabPanel value={dt.id}>
              <ListItemBook item={dt.item} />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
};

export default LabTabs;
