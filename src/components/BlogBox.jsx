import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { StyledBlogBoxTitle } from "../styled/StyledTypography";

const BlogBox = ({ src, title, caption }) => {
  return (
    <>
      <Box>
        <Stack spacing={1}>
          <Box>
            <Box
              component="img"
              src={src}
              width="100%"
              sx={{
                opacity: 0.5,
                transition: "all 0.3s ease-in-out",
                "&:hover": { opacity: 1 },
              }}
            />
          </Box>
          <Box>
            <StyledBlogBoxTitle component="a" variant="h3">
              {title}
            </StyledBlogBoxTitle>
            <Typography color="#888" fontSize="13px">
              {caption}
            </Typography>
            <Button
              component="a"
              size="small"
              endIcon={
                <KeyboardArrowRightRoundedIcon
                  sx={{
                    color: "#1CA7EC",
                  }}
                />
              }
              sx={{
                p: 0,
                color: "#fff",
                "& .MuiButton-endIcon": { marginLeft: "4px" },
                "&:hover": {
                  color: "#1CA7EC",
                  backgroundColor: "transparent",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default BlogBox;
