import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ImgCart from './../../img/imgCart/image_195509_1_29993.jpg'
import ListItemBook from '../List/ListItemBook';
import bookItem from './../../data/BookItem'
import { Typography } from '@mui/material';


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[1230px] mx-auto bg-white rounded-lg">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Typography variant="h5">{namelist}</Typography>
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
              <Tab label={namelistItem} value="1" />
              <Tab label={namelistItem} value="2" />
              <Tab label={namelistItem} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ListItemBook />
          </TabPanel>
          <TabPanel value="2">
            <ListItemBook item/>
          </TabPanel>
          <TabPanel value="3">
            <ListItemBook />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}



