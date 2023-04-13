import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ParticlesComponent from "../../components/ParticlesComponent";

import { StyledHeaderButton } from "./../../styled/StyledButton";

import homeBg from "../../assets/images/home-bg-4.jpg";

const Header = () => {
  return (
    <>
      <Box
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
              <Typography
                variant="p"
                color="white"
                sx={{ textTransform: "uppercase" }}
              >
                New Html Template Generation
              </Typography>
            </Box>

            <Box>
              <StyledHeaderButton size="small" endIcon={<ArrowDownwardIcon />}>
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
