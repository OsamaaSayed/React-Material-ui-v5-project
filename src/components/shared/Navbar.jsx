import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from '../../assets/images/logo-white.png'

const pages = [
  "Home",
  "Features",
  "About",
  "Team",
  "Work",
  "Pricing",
  "Blog",
  "Contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        padding:"15px 0px"
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
              aria-label="logo"
              sx={{ ":hover": { backgroundColor: "transparent" }, p: "0px" }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{ width: 150 }}
              />
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
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                margin: "0px",
                padding: "0px",
              }}
            >
              {pages.map((page) => (
                <li
                  key={page}
                  style={{ position: "relative", padding: "0px 10px" }}
                >
                  <Link
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      cursor: "pointer",
                      ":after": {
                        position: "absolute",
                        bottom: "10px",
                        left: 0,
                        right: 0,
                        margin: "auto",
                        width: "0%",
                        content: '" "',
                        color: "transparent",
                        background: "black",
                        height: "2px",
                        transition: "all 0.3s ease-in-out"
                      },
                      "&:hover": {
                        ":after": {
                          width: "100%",
                        },
                      },
                    }}
                    href="#"
                    underline="none"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* Menu icon */}
          <Box sx={{ display: "flex" }}>
            <IconButton
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
