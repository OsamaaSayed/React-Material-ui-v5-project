import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import  TextField  from "@mui/material/TextField";

import IconText from "../../components/shared/IconText";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

import {
  Styledh2Typography,
  Styledh4Typography,
} from "../../styled/StyledTypography";
import { StyledAboutUsButton } from "../../styled/StyledButton";

const Contact = () => {
  const IconTextData = [
    {
      id: 1,
      icon: LocationOnRoundedIcon,
      title: "Our Office",
      subTitle: "201 Oak Street Building 27, Manchester, USA",
    },
    {
      id: 2,
      icon: PhoneIphoneRoundedIcon,
      title: "Call Us",
      subTitle: "+1 719-338-4628",
    },
    {
      id: 3,
      icon: MailRoundedIcon,
      title: "Email Us",
      subTitle: "support@envato.com",
    },
  ];

  return (
    <>
      <Box
        component="section"
        id="contact"
        paddingY="80px"
        bgcolor="#fff"
        position="relative"
      >
        <Container>
          <Grid container marginTop="50px" spacing={3}>
            <Grid item md={6}>
              <Box>
                <Styledh4Typography>Get in touch</Styledh4Typography>
                <Styledh2Typography sx={{ color: "#000", marginTop: 0 }}>
                  Contact Us
                </Styledh2Typography>

                <Box marginTop="50px">
                  <Stack justifyContent="center" alignItems="start">
                    {IconTextData.map((stack) => (
                      <IconText
                        key={stack.id}
                        Icon={stack.icon}
                        title={stack.title}
                        subTitle={stack.subTitle}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box marginTop="50px">

                <Stack rowGap={3} >

                  <Grid container spacing={2} >
                    <Grid item sm={12} md={6}>
                      <TextField fullWidth
                        label="Name"
                        variant="outlined"
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <TextField fullWidth label="Email" variant="outlined" required />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item sm={12} md={6}>
                      <TextField fullWidth label="Phone" variant="outlined" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <TextField fullWidth label="Subject" variant="outlined" />
                    </Grid>
                  </Grid>

                  <Box>
                    <TextField
                      multiline
                      label="Your Message"
                      required
                      fullWidth
                      rows={5}
                    />
                  </Box>

                  <Box>
                    <StyledAboutUsButton sx={{marginTop:0}}>Send</StyledAboutUsButton>
                  </Box>

                </Stack>

              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
