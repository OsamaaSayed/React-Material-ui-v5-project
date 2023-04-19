import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import { StyledTyporgraphy } from "../../styled/StyledTypography";
import { StyledTeamIconBox } from "../../styled/StyledBox";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import WhiteLogo from "../../assets/images/logo-white.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        paddingY="35px"
        bgcolor="#1d2124"
        position="relative"
      >
        <Container>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <Grid container>
              <Grid item md={8} margin="auto" textAlign="center">
                <Stack spacing={2}>
                  <Box>
                    <Box component="img" src={WhiteLogo} width="200px" />
                  </Box>
                  <Box>
                    <StyledTyporgraphy>
                      Copyright 2023, All rights reserved.
                    </StyledTyporgraphy>
                  </Box>
                  <Box>
                    <StyledTeamIconBox
                      sx={{
                        position: "static",
                        width: { xs: "70%", md: "30%" },
                        margin: "auto",
                        "& .MuiSvgIcon-root:hover": {
                          color: "#1ca7ec",
                          transition: "all 0.3s ease-in-out",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/OsamaSayedMohamed99"
                        sx={{ color: "#fff" }}
                      >
                        <FacebookIcon />
                      </Link>
                      <Link sx={{ color: "#fff" }}>
                        <TwitterIcon />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://github.com/OsamaaSayed"
                        sx={{ color: "#fff" }}
                      >
                        <GitHubIcon />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/osama-sayed-mohamed/"
                        sx={{ color: "#fff" }}
                      >
                        <LinkedInIcon />
                      </Link>
                    </StyledTeamIconBox>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </AnimationOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
