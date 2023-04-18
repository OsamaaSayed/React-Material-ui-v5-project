import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


import Parallax from "../../assets/images/parallax-bg-3.jpg";
import Avatar1 from "../../assets/images/avatar-1.jpg";
import Avatar2 from "../../assets/images/avatar-2.jpg";
import Avatar3 from "../../assets/images/avatar-3.jpg";

const CarouselSection = () => {
  const carouselData = [
    {
      id: 1,
      caption:
        "“Very much satisfied with the service. Delivered on time and responded to request for modifications within few hours.",
      name: "- David Levine -",
      src: Avatar1,
    },
    {
      id: 2,
      caption:
        "“I’m very happy with the results! They went above and beyond for me and that is always appreciated! I would highly recommend SH to anybody!”",
      name: "- Kevin Scher -",
      src: Avatar2,
    },
    {
      id: 3,
      caption:
        "“Great work I got a lot more than what I ordered, they are very legítimas and catchy. I went for one of them for my brand but is always better to have more options.”",
      name: "- Sam Wander -",
      src: Avatar3,
    },
  ];


  return (
    <>
      {/* <Box
        component="section"
        position="relative"
        sx={
          {
            backgroundImage: `url(${Parallax})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }
        }
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item></Grid>
          </Grid>
        </Container>


          <Box>
            <Stack spacing={2} textAlign="center">
              <Box component="img" src={Avatar1} width="120px" margin="auto" />
              <Typography variant="h3">Caption</Typography>
              <Typography variant="h5">- Name -</Typography>
            </Stack>
          </Box>

          <Box>
            <Stack spacing={2} textAlign="center">
              <Box component="img" src={Avatar2} width="120px" margin="auto" />
              <Typography variant="h3">Caption</Typography>
              <Typography variant="h5">- Name -</Typography>
            </Stack>
          </Box>

          <Box>
            <Stack spacing={2} textAlign="center">
              <Box component="img" src={Avatar3} width="120px" margin="auto" />
              <Typography variant="h3">Caption</Typography>
              <Typography variant="h5">- Name -</Typography>
            </Stack>
          </Box>
 
      </Box> */}
    </>
  );
};

export default CarouselSection;
