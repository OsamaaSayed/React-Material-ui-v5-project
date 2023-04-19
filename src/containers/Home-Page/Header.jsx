import React from "react";
import Typewriter from "typewriter-effect";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ParticlesComponent from "../../components/ParticlesComponent";

import { StyledHeaderButton } from "./../../styled/StyledButton";

import homeBg from "../../assets/images/home-bg-4.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Header = () => {
  return (
    <>
      <Box
        component="section"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width="100%"
          sx={{ backgroundColor: "rgba(0, 38, 59,0.2)" }}
        >
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Typography
                variant="h2"
                color="white"
                sx={{ textTransform: "uppercase" }}
              >
                Spyder Digital
              </Typography>
              <Typography
                variant="h2"
                color="white"
                sx={{ textTransform: "uppercase" }}
              >
                Studio
              </Typography>
            </Box>

            <Box>
              <Typography color="white" sx={{ textTransform: "uppercase" }}>
                <Typewriter
                  options={{
                    strings: "New Html Template Generation",
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Box>

            <Box>
              <StyledHeaderButton
                href="#features"
                size="small"
                endIcon={<ArrowDownwardIcon />}
              >
                Keep Reading
              </StyledHeaderButton>
            </Box>
          </Stack>
          
        </Box>
        <ParticlesComponent id="tsparticles" />
      </Box>
    </>
  );
};

export default Header;
