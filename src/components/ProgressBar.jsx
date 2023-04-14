import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { StyledProgressBar } from "./../styled/StyledProgressBar";

const ProgressBar = ({ title, value }) => {
  return (
    <>
      <Box marginTop="40px">
        <Stack
          marginBottom="5px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" color="#fff">
            {title}
          </Typography>
          <Typography variant="body1" color="#fff">
            {value}%
          </Typography>
        </Stack>

        <StyledProgressBar variant="determinate" value={value} />
      </Box>
    </>
  );
};

export default ProgressBar;
