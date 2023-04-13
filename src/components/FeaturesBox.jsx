import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FeaturesBox = ({ Icon, title }) => {
  console.log("FeaturesBox component rendering");

  return (
    <>
      <Box
        padding="50px 30px"
        bgcolor="transparent"
        overflow="hidden"
        position="relative"
        border="solid 1px #313131"
        borderRadius="4px"
        textAlign="center"
        sx={{
          ":hover": {
            backgroundColor: "#1ca7ec",
            ".MuiSvgIcon-root": { color: "#fff",transform:"translateY(-10px)" },
            ".MuiTypography-root": { color: "#fff" },
            transition: "all .3s ease-in-out",
          },
        }}
      >
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

        <Typography
          variant="h4"
          marginBottom="10px"
          color="white"
          fontSize="20px"
          fontWeight="600"
        >
          {title}
        </Typography>

        <Typography color="#888" sx={{ transition: "all .3s ease-in-out" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        
      </Box>
    </>
  );
};

export default React.memo(FeaturesBox);
