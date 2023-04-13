import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        <Box
          bgcolor="#1ca7ec"
          padding="20px"
          borderRadius="50%"
          color="#fff"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon sx={{ fontSize: "30px" }} />
        </Box>

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
