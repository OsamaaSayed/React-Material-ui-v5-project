import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import SectionTitle from "./../../components/shared/SectionTitle";
import TeamBox from "./../../components/TeamBox";
import ProgressBar from "../../components/ProgressBar";

import {
  Styledh2Typography,
  StyledTyporgraphy,
  Styledh4Typography,
} from "../../styled/StyledTypography";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import team1Img from "../../assets/images/team-01.jpg";
import team2Img from "../../assets/images/team-02.jpg";
import team3Img from "../../assets/images/team-03.jpg";
import team4Img from "../../assets/images/team-04.jpg";

const Team = () => {
  // ---------- State --------
  const [open, setOpen] = useState(false);

  // --------- handlers ---------
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = {
    h4: "Who We Are",
    h1: "Creative Team",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you like with this Template, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    color: "#fff",
  };

  const teamBoxData = [
    { id: 1, src: team1Img, name: "Bobby Castro", title: "Project Manager" },
    { id: 2, src: team2Img, name: "Luara Prior", title: "Marketing Manager" },
    { id: 3, src: team3Img, name: "Mike Jones", title: "Graphics Designer" },
    { id: 4, src: team4Img, name: "Heather Doe", title: "CEO Company" },
  ];

  const progressBarData = [
    { id: 1, title: "Content Writer", value: 98 },
    { id: 2, title: "Design", value: 66 },
    { id: 3, title: "Apps", value: 85 },
    { id: 4, title: "Development", value: 30 },
  ];

  return (
    <>
      <Box paddingY="120px" bgcolor="#1d2124" position="relative">
        <Container>


          <Grid container>
            <Grid item md={8} margin="auto" textAlign="center">
              <SectionTitle data={data} />
            </Grid>
          </Grid>



          <Grid container marginTop="50px" spacing={3}>
            {teamBoxData.map((box) => (
              <Grid item key={box.id} sm={6} md={3}>
                <TeamBox src={box.src} name={box.name} title={box.title} />
              </Grid>
            ))}
          </Grid>



          <Grid container marginTop="50px" spacing={3}>



            <Grid item md={6}>

              <Box>
                <Styledh2Typography>Who We Are</Styledh2Typography>
                <StyledTyporgraphy marginTop="40px">
                  The integration of web fonts has always been one of the
                  largest contributing factors to diversity in the overall look
                  and feel of websites today vs. yesterday. Fonts, just like
                  images, play an important role in helping a websites overall
                  design stand out from the competition.
                </StyledTyporgraphy>
                <StyledTyporgraphy>
                  Bottom line is we want you to succeed at Faculty Were full
                  service which means weve got you covered on design and content
                  right through to digital.
                </StyledTyporgraphy>

                <Stack direction="row" alignItems="center" spacing={2} marginTop="30px">
                    
                  {/* Button to open dialog */}
                  <IconButton
                    onClick={handleClickOpen}
                    sx={{
                      borderRadius: "50px",
                      border: "2px solid #fff",
                      color: "#fff",
                    }}
                  >
                    <PlayArrowRoundedIcon color="inherit" />
                  </IconButton>

                  {/* The Dialog */}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        width: { xs: "80%", sm: "70%", md: "50%" },
                        height: { xs: "50%", sm: "70%", md: "50%" },
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/sU3FkzUKHXU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </Dialog>

                  <Box>
                    <Styledh4Typography sx={{ marginBottom: "0px" }}>
                      See Our Work
                    </Styledh4Typography>
                  </Box>

                </Stack>
              </Box>


            </Grid>

            <Grid item xs={12} md={6}>
              {progressBarData.map((item) => (
                <ProgressBar
                  key={item.id}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </Grid>


          </Grid>



        </Container>
      </Box>
    </>
  );
};

export default Team;
