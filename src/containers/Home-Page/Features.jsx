import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";

import FeaturesBox from "./../../components/FeaturesBox";
import SectionTitle from "../../components/shared/SectionTitle";

const Features = () => {
  const data = {
    h4: "The Best Business Template",
    h1: "Our Features",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you likewith this Template, when an unknown printer took a galley of type andscrambled it to make a type specimen book.",
    color: "#fff",
  };

  const featuresBoxData = [
    { id: 1, icon: CodeRoundedIcon, title: "Friendly Codes" },
    { id: 2, icon: AllInclusiveIcon, title: "SEO Optimized" },
    { id: 3, icon: RocketLaunchIcon, title: "Fast Support" },
    { id: 4, icon: PhoneIphoneRoundedIcon, title: "Fully Responsive" },
  ];

  return (
    <>
      <Box component="section" id="features" paddingY="120px" bgcolor="#1d2124" position="relative">
        <Container>
          <Grid container>
            <Grid item md={8} margin="auto" textAlign="center">
              <SectionTitle data={data} />
            </Grid>
          </Grid>

          <Grid container marginTop="50px" spacing={3}>
            {featuresBoxData.map((box) => (
              <Grid key={box.id} item sm={6} md={3}>
                <FeaturesBox Icon={box.icon} title={box.title} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Features;
