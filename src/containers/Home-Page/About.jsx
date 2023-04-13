import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SectionTitle from "../../components/shared/SectionTitle";

import { StyledAboutUsButton } from "../../styled/StyledButton";
import { StyledServicesAboutBox } from "./../../styled/StyledBox";
import { StyledServicesAboutGrid } from "./../../styled/StyledGrid";

import bgAbout from '../../assets/images/bg-left-img.jpg'

const About = () => {
  const data = {
    h4: "Our Mission",
    h1: "About Us",
    color: "#000",
  };

  return (
    <>
      <Box bgcolor="#fff" position="relative">
        <Grid
          container
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
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
                <Typography marginBottom="10px" color="#888">
                  Vivamus enim metus, varius et nunc quis, elementum pharetra
                  turpis. Proin vel massa sed turpis auctor consectetur. Proin
                  rhoncus eleifend pulvinar.
                </Typography>
                <Typography marginBottom="10px" color="#888">
                  Nam suscipit, enim eu semper porta, est magna facilisis lorem,
                  sagittis sollicitudin ipsum ipsum at tortor. Proin diam massa,
                  fermentum eget nisl consequat, viverra accumsan turpis.
                  Maecenas non nunc quis odio dignissim efficitur eget eu leo.
                  Donec ut accumsan metus, sit amet efficitur diam.
                </Typography>
                <Box>
                  <StyledAboutUsButton>Buy Template</StyledAboutUsButton>
                </Box>
              </Stack>
            </Box>
          </Grid>

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
