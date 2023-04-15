import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { StyledList } from "../../styled/StyledList";
import { StyledLink } from "../../styled/StyledLink";

import Logo from "../../assets/images/logo-white.png";

const Links = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  // -------- State ---------
  const [drawerOpen, setDrawerOpen] = useState(false);

  // -------- handlers ----------

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        padding: "15px 0px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              href="#"
              aria-label="logo"
              sx={{ ":hover": { backgroundColor: "transparent" }, p: "0px" }}
            >
              <img src={Logo} alt="Logo" style={{ width: 130 }} />
            </IconButton>
          </Box>

          {/* Nav links Shows only in md */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              columnGap: "20px",
            }}
          >
            <StyledList>
              {Links.map((link) => (
                <ListItem key={link.label} style={{ padding: "0px 10px" }}>
                  <StyledLink href={link.href} underline="none">
                    {link.label}
                  </StyledLink>
                </ListItem>
              ))}
            </StyledList>
          </Box>

          {/* Menu icon to open Drawer */}
          <Box sx={{ display: "flex" }}>
            <IconButton
              onClick={handleDrawerOpen}
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ "&:hover": { backgroundColor: "transparent" }, p: "0px" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            transitionDuration={500}
            disableScrollLock
            PaperProps={{
              sx: {
                backgroundColor: "#1d2124",
                padding: "20px",
                minWidth: "40%",
              },
            }}
          >
            <Stack spacing={5}>
              <Container>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link href="#" sx={{ cursor: "pointer" }}>
                    <img src={Logo} alt="Logo" style={{ width: 130 }} />
                  </Link>

                  <CloseIcon
                    onClick={handleDrawerClose}
                    sx={{
                      color: "#fff",
                      cursor: "pointer",
                      transition: "all .2s ease",
                      "&:hover": { color: "#1ca7ec" },
                    }}
                  />
                </Stack>

                <Box>
                  <List sx={{ paddingX: "8px" }}>
                    {Links.map((link) => (
                      <ListItem
                        key={link.label}
                        style={{ width: "fit-content" }}
                      >
                        <StyledLink
                          href={link.href}
                          underline="none"
                          sx={{
                            "&:hover": {
                              ":after": { width: "0%" },
                              color: "#1ca7ec",
                            },
                          }}
                        >
                          {link.label}
                        </StyledLink>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Container>
            </Stack>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
