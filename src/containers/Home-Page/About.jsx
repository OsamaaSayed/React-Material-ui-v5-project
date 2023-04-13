import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import SectionTitle from "../../components/shared/SectionTitle";

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
                  <Button
                    sx={{
                      color: "#fff",
                      marginTop: "30px",
                      backgroundColor: "#1ca7ec",
                      padding:"12px 35px",
                      fontSize:"12px",
                      opacity:"0.7",
                      transition:"all .3s ease-in-out",
                      "&:hover":{opacity:"1",backgroundColor:"#1ca7ec"}
                    }}
                  >
                    Buy Template
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid
            item
            md={6}
            sx={{
              position: { md: "absolute" },
              marginLeft: { md: "50%" },
              height: { xs: "500px", md: "100%" },
            }}
            top={0}
            width="100%"
          >
            <Box
              height="100%"
              width="100%"
              sx={{
                backgroundImage: "url(/src/assets/images/bg-left-img.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
