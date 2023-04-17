import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const PackagesBox = ({ title, color }) => {
  return (
    <>
      <Paper elevation={4} sx={{ backgroundColor: `${color}` }}>
        <Box padding="40px">
          <Stack>
            <Box
              paddingBottom="30px"
              borderBottom={1}
              borderColor={`${color ? "#fff" : "divider"}`}
            >
              <Typography
                variant="h3"
                fontSize="30px"
                fontWeight="800"
                color={`${color ? "#fff" : ""}`}
              >
                {title}
              </Typography>
            </Box>

            <Box
              paddingY="30px"
              borderBottom={1}
              borderColor={`${color ? "#fff" : "divider"}`}
            >
              <Stack direction="row" alignItems="end" spacing={1}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography
                    variant="h3"
                    fontSize="60px"
                    fontWeight="800"
                    color={`${color ? "#fff" : ""}`}
                  >
                    10
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontSize="20px"
                    color={`${color ? "#fff" : ""}`}
                  >
                    $
                  </Typography>
                </Stack>

                <Box>
                  <Typography
                    variant="subtitle2"
                    color={`${color ? "#fff" : "#777"}`}
                  >
                    Per Month
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Box marginY="20px">
              <List sx={{ color: `${color ? "#fff" : "#777"}` }}>
                <ListItem>Mobile-Optimized Website</ListItem>
                <ListItem>Powerful Website Metrics</ListItem>
                <ListItem>Free Custom Domain</ListItem>
                <ListItem>24/7 Customer Support</ListItem>
                <ListItem>Fully Integrated E-Commerce</ListItem>
                <ListItem>Sell Unlimited Products & Accept Donations</ListItem>
              </List>
            </Box>

            <Box marginTop="40px">
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#1d2124",
                  p: "10px 25px",
                  fontSize: "12px",
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default PackagesBox;
