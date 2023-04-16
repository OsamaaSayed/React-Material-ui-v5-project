import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import SectionTitle from "../../components/shared/SectionTitle";
import Tabs from "../../components/Tabs";



const Work = () => {
  const data = {
    h4: "Creative Showcase",
    h1: "Our Works",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you like with this Template, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "#fff",
  };

  return (
    <>
      <Box
        component="section"
        id="work"
        paddingBottom="120px"
        bgcolor="#1d2124"
        position="relative"
      >
        <Container>
          <Grid container>
            <Grid item md={8} margin="auto" textAlign="center">
              <SectionTitle data={data} />
            </Grid>
          </Grid>
        </Container>

        {/* Tabs */}
        <Grid container marginTop="50px">
          <Grid item xs={12}>
            <Tabs/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Work;
