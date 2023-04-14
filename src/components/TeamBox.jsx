import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { StyledTeamImgBox } from "./../styled/StyledBox";
import { StyledTeamIconBox } from "../styled/StyledBox";
import { StyledTeamBoxName } from "../styled/StyledTypography";

const TeamBox = ({ src, name, title }) => {
  return (
    <>
      <Box
        sx={{
          "&:hover": {
            ".css-qtzi1p": { opacity: 0.5, transform: "scale(1.1)" },
            ".css-1fefefz": { bottom: "20px" },
          },
        }}
      >
        <Box
          display="flex"
          position="relative"
          overflow="hidden"
          borderRadius="4px"
        >
          <StyledTeamImgBox component="img" src={src} />

          <StyledTeamIconBox>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </StyledTeamIconBox>
        </Box>

        <Box textAlign="center">
          <StyledTeamBoxName variant="h3">{name}</StyledTeamBoxName>
          <Typography variant="body2" color="#1ca7ec">
            {title}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TeamBox;
