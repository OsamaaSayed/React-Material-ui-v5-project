import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

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
            <Typography
              component="a"
              variant="h3"
              underline="none"
              color="#fff"
              fontSize="18px"
              fontWeight="600"
              marginY="5px"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#1CA7EC" },
                transition: "all 0.2s ease-in-out",
              }}
            >
              {title}
            </Typography>
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
