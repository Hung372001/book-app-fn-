import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ImgCart from './../../img/imgCart/image_195509_1_29993.jpg'
import ListItemBook from '../List/ListItemBook';
import bookItem from './../../data/BookItem'


export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[1230px] mx-auto bg-white rounded-lg">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList

              TabIndicatorProps={{
                hidden: true,
              }}
              sx={{
                paddingLeft: "1.5rem",
                "& button:focus": {
                  borderRadius: 1,
                  border: "1px solid #F7931E",
                  color: "#F7931E"
                },
              
                
                "& button.Mui-selected": {
                  borderRadius: 1,
                  border: "1px solid #F7931E",
                  color: "#F7931E"

                },
                "& button ": {
                  margin: "10px 5px 5px 5px",
                  padding: "8px 16px",
                  fontSize: "14px",

                }
                
              }
              }
              onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Item One" value="1" />
              <Tab
                label="Item Two" value="2" />
              <Tab
                label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
           <ListItemBook/>
             
          </TabPanel>
          <TabPanel value="2">
          <ListItemBook/>
          </TabPanel>
          <TabPanel value="3">
          <ListItemBook/>
          </TabPanel>
        </TabContext>
      </Box>
    </div>

  );
}



