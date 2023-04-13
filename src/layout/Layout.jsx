import React from "react";

import Navbar from "../components/shared/Navbar";
import Home from "../pages/Home/Home";
import Features from './../containers/Home-Page/Features';
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default Layout;
