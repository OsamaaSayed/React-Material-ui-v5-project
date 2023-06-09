import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import SectionTitle from "../../components/shared/SectionTitle";

import { StyledAboutUsButton } from "../../styled/StyledButton";
import { StyledServicesAboutBox } from "./../../styled/StyledBox";
import { StyledServicesAboutGrid } from "./../../styled/StyledGrid";
import { StyledTyporgraphy } from "../../styled/StyledTypography";

import bgAbout from '../../assets/images/bg-left-img.jpg'

const About = () => {
  const data = {
    h4: "Our Mission",
    h1: "About Us",
    color: "#000",
  };

  return (
    <>
      <Box component="section" id="about" bgcolor="#fff" position="relative">
        <Grid
          container
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <AnimationOnScroll animateIn="animate__fadeIn">
          <Grid
            item
            md={6}
            sx={{
              marginRight: { md: "50%" },
            }}
          >
            <Box padding="100px 50px">
              <Stack>
                <SectionTitle data={data} />
                <StyledTyporgraphy >
                  Vivamus enim metus, varius et nunc quis, elementum pharetra
                  turpis. Proin vel massa sed turpis auctor consectetur. Proin
                  rhoncus eleifend pulvinar.
                </StyledTyporgraphy>
                <StyledTyporgraphy>
                  Nam suscipit, enim eu semper porta, est magna facilisis lorem,
                  sagittis sollicitudin ipsum ipsum at tortor. Proin diam massa,
                  fermentum eget nisl consequat, viverra accumsan turpis.
                  Maecenas non nunc quis odio dignissim efficitur eget eu leo.
                  Donec ut accumsan metus, sit amet efficitur diam.
                </StyledTyporgraphy>
                <Box>
                  <StyledAboutUsButton>Buy Template</StyledAboutUsButton>
                </Box>
              </Stack>
            </Box>
          </Grid>
          </AnimationOnScroll>
          <StyledServicesAboutGrid
            item
            md={6}
            sx={{
              marginLeft: { md: "50%" },
            }}
          >
            <StyledServicesAboutBox
              sx={{
                backgroundImage: `url(${bgAbout})`
              }}
            ></StyledServicesAboutBox>
          </StyledServicesAboutGrid>

          
        </Grid>
      </Box>
    </>
  );
};

export default About;
