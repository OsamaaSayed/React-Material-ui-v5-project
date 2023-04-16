import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Styledh1Typography,
  Styledh4Typography,
} from "../../styled/StyledTypography";

const SectionTitle = ({ data }) => {
  return (
    <>
      <Box marginBottom="30px">
        <Styledh4Typography variant="h4">{data.h4}</Styledh4Typography>
        <Styledh1Typography variant="h1" color={data.color}>
          {data.h1}
        </Styledh1Typography>
        <Typography color="#888">{data.p}</Typography>
      </Box>
    </>
  );
};

export default SectionTitle;
