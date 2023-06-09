import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import { StyledServicesIconBox } from "../../styled/StyledBox";

const IconText = ({ Icon, title, subTitle }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        marginBottom="30px"
      >
        <StyledServicesIconBox>
          <Icon sx={{ fontSize: "30px" }} />
        </StyledServicesIconBox>

        <Box>
          <Typography
            variant="h3"
            fontSize="18px"
            marginBottom="7px"
            fontWeight="600"
          >
            {title}
          </Typography>
          <Typography color="#888">{subTitle}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default IconText;
