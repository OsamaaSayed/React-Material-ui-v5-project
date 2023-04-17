import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import SectionTitle from "../../components/shared/SectionTitle";
import PackagesBox from "../../components/PackagesBox";

const Packages = () => {
  const data = {
    h4: "Pricing Plan",
    h1: "Our Packages",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you like with this Template, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    color: "#000",
  };

  const packagesBoxData = [
    { id: 1, title: "Basic" },
    { id: 2, title: "Standard" , color:"#1CA7EC"},
    { id: 3, title: "Premium" },
  ];

  return (
    <>
      <Box
        component="section"
        id="packages"
        paddingY="120px"
        bgcolor="#fff"
        position="relative"
      >
        <Container>
          <Grid container>
            <Grid item md={8} margin="auto" textAlign="center">
              <SectionTitle data={data} />
            </Grid>
          </Grid>

          <Grid container marginTop="50px" spacing={3}>
            {packagesBoxData.map((box) => (
              <Grid item key={box.id} xs={12} sm={6} md={4}>
                <PackagesBox title={box.title} color={box.color} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Packages;
