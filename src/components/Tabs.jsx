import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Img9 from "../assets/images/9.jpg";
import Img10 from "../assets/images/10.jpg";
import Img11 from "../assets/images/11.jpg";
import Img12 from "../assets/images/12.jpg";
import Img13 from "../assets/images/13.jpg";
import Img14 from "../assets/images/14.jpg";
import Img15 from "../assets/images/15.jpg";

const Tabs = () => {
  // ----------- States -------------
  const [value, setValue] = useState("1");

  // ----------- handlers -------------
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // --------- Hooks ------------
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const gridTemplateAreasMd = `
  "nine nine nine nine ten ten eleven eleven twelve twelve twelve twelve" 
  "nine nine nine nine thirteen thirteen thirteen thirteen fourteen fourteen fourteen fourteen"
  "nine nine nine nine thirteen thirteen thirteen thirteen fourteen fourteen fourteen fourteen"
  "fifteen fifteen fifteen fifteen thirteen thirteen thirteen thirteen fourteen fourteen fourteen fourteen"
  `;

  const gridTemplateAreasXs = `
  "nine " 
  "ten "
  "eleven "
  "twelve"
  "thirteen"
  "fourteen"
  "fifteen"
  `;

  return (
    <>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            color: "#1ca7ec",
          }}
        >
          <TabList
            sx={{
              ".MuiTabs-flexContainer": {
                display: "block",
                textAlign: "center",
              },
            }}
            aria-label="Tabs"
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            onChange={handleChange}
            TabIndicatorProps={{
              sx: {
                backgroundColor: "currentcolor",
              },
            }}
          >
            <Tab label="All" value="1" />
            <Tab label="Branding" value="2" />
            <Tab label="Print Design" value="3" />
            <Tab label="Web Design" value="4" />
            <Tab label="Advertising" value="5" />
            <Tab label="Photography" value="6" />
          </TabList>
        </Box>

        <TabPanel value="1" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoRows="auto"
          >
            <Box gridArea="nine" height="auto">
              <Box component="img" src={Img9} width="100%" height="100%" />
            </Box>

            <Box gridArea="ten" height="auto">
              <Box component="img" src={Img10} width="100%" height="100%" />
            </Box>

            <Box gridArea="eleven" height="auto">
              <Box component="img" src={Img11} width="100%" height="100%" />
            </Box>

            <Box gridArea="twelve" height="auto">
              <Box component="img" src={Img12} width="100%" height="100%" />
            </Box>

            <Box gridArea="fifteen" height="auto">
              <Box component="img" src={Img15} width="100%" height="100%" />
            </Box>

            <Box gridArea="thirteen" height="auto">
              <Box component="img" src={Img13} width="100%" height="100%" />
            </Box>

            <Box gridArea="fourteen" height="auto">
              <Box component="img" src={Img14} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="2" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoRows="auto"
            gridAutoColumns="1fr"
          >
            <Box gridArea="nine" height="auto">
              <Box component="img" src={Img9} width="100%" height="100%" />
            </Box>

            <Box gridArea="ten" height="auto">
              <Box component="img" src={Img10} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="3" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoRows="auto"
            gridAutoColumns="1fr"
          >
            <Box gridArea="eleven" height="auto" gridColumn="1/3">
              <Box component="img" src={Img11} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="4" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoRows="auto"
            gridAutoColumns="1fr"
          >
            <Box gridArea="ten" height="auto" gridColumn="1/3" gridRow="1">
              <Box component="img" src={Img10} width="100%" height="100%" />
            </Box>

            <Box gridArea="eleven" height="auto" gridColumn="3/5" gridRow="1">
              <Box component="img" src={Img11} width="100%" height="100%" />
            </Box>

            <Box gridArea="twelve" height="auto" gridColumn="5/9" gridRow="1">
              <Box component="img" src={Img12} width="100%" height="100%" />
            </Box>

            <Box
              gridArea="fourteen"
              height="auto"
              gridColumn="9/13"
              gridRow="1/3"
            >
              <Box component="img" src={Img14} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="5" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoColumns="1fr"
            gridTemplateRows="200px"
          >
            <Box gridArea="fifteen" height="auto" gridColumn="1/5" gridRow="1">
              <Box component="img" src={Img15} width="100%" height="100%" />
            </Box>

            <Box gridArea="fourteen" height="auto" gridColumn="5/9" gridRow="1">
              <Box component="img" src={Img14} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value="6" sx={{ p: "24px 0 0 0" }}>
          <Box
            display="grid"
            gridTemplateAreas={`${
              isMd ? gridTemplateAreasMd : gridTemplateAreasXs
            }`}
            gridAutoRows="auto"
            gridAutoColumns="1fr"
          >
            <Box
              gridArea="fifteen"
              height="auto"
              gridColumn="1/5"
              gridRow="1/3"
            >
              <Box component="img" src={Img13} width="100%" height="100%" />
            </Box>

            <Box gridArea="thirteen" height="auto" gridColumn="5/9" gridRow="1">
              <Box component="img" src={Img15} width="100%" height="100%" />
            </Box>
          </Box>
        </TabPanel>

      </TabContext>
    </>
  );
};

export default Tabs;
