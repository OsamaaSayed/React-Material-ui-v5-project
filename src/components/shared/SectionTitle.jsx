import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionTitle = ({ data }) => {
  console.log(data);
  return (
    <>
      <Box marginBottom="30px">
        <Typography
          variant="h4"
          color="#1ca7ec"
          fontSize="18px"
          marginBottom="10px"
        >
          {data.h4}
        </Typography>
        <Typography
          variant="h1"
          color={data.color}
          fontSize="50px"
          fontWeight="800"
          marginY="10px"
        >
          {data.h1}
        </Typography>
        <Typography color="#888">{data.p}</Typography>
      </Box>
    </>
  );
};

export default SectionTitle;
