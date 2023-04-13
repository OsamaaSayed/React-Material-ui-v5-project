import React from "react";
import Typography from "@mui/material/Typography";

import { StyledFeaturesBox } from "./../styled/StyledBox";
import { StyledFeaturesBoxTitle } from "./../styled/StyledTypography";

const FeaturesBox = ({ Icon, title }) => {
  console.log("FeaturesBox component rendering");

  return (
    <>
      <StyledFeaturesBox>
        {
          <Icon
            sx={{
              marginBottom: "20px",
              fontSize: "40px",
              color: "#1ca7ec",
              transition: "all .3s ease-in-out",
            }}
          />
        }

        <StyledFeaturesBoxTitle variant="h4">{title}</StyledFeaturesBoxTitle>

        <Typography color="#888" sx={{ transition: "all .3s ease-in-out" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        
      </StyledFeaturesBox>
    </>
  );
};

export default React.memo(FeaturesBox);
