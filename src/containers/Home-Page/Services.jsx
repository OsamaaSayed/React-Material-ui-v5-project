import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import SectionTitle from "../../components/shared/SectionTitle";
import IconText from "../../components/shared/IconText";

import SettingsIcon from "@mui/icons-material/Settings";
import LaptopIcon from "@mui/icons-material/Laptop";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { StyledServicesAboutBox } from "./../../styled/StyledBox";
import { StyledServicesAboutGrid } from "../../styled/StyledGrid";

import bgServices from '../../assets/images/bg-left-img-2.jpg'

const Services = () => {
  const data = {
    h4: "We Create Awesome Stuff",
    h1: "Our Services",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you like with this Template, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "#000",
  };

  const IconTextData = [
    {
      id: 1,
      icon: SettingsIcon,
      title: "Powerful Options",
      subTitle: "We focus on the needs of small to middle market businesses.",
    },
    {
      id: 2,
      icon: LaptopIcon,
      title: "Responsive Design",
      subTitle:
        "A great business plan is a foundation of every successful business",
    },
    {
      id: 3,
      icon: SentimentSatisfiedAltIcon,
      title: "Happy Clients",
      subTitle:
        "We help our clients take advantage of any investment out in the world",
    },
  ];

  return (
    <>
      <Box bgcolor="#fff" position="relative">
        <Grid container>
          <StyledServicesAboutGrid
            sx={{ marginRight: { md: "50%" } }}
            item
            md={6}
          >
            <StyledServicesAboutBox
              sx={{
                backgroundImage: `url(${bgServices})`
              }}
            ></StyledServicesAboutBox>
          </StyledServicesAboutGrid>

          <Grid
            item
            md={6}
            sx={{
              marginLeft: { md: "50%" },
            }}
          >
            <Box padding="100px 50px">
              <Stack justifyContent="center" alignItems="start">
                <SectionTitle data={data} />

                {IconTextData.map((stack) => (
                  <IconText
                    key={stack.id}
                    Icon={stack.icon}
                    title={stack.title}
                    subTitle={stack.subTitle}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
