import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/shared/Navbar";
import Home from "../pages/Home/Home";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <>
      <GlobalStyles styles={{ html: { scrollBehavior: "smooth" } }} />
      <CssBaseline />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default Layout;
