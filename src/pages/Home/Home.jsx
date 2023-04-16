import React from "react";
import Header from "../../containers/Home-Page/Header";
import Features from "../../containers/Home-Page/Features";
import Services from "../../containers/Home-Page/Services";
import About from "../../containers/Home-Page/About";
import Team from "../../containers/Home-Page/Team";
import Work from "../../containers/Home-Page/Work";

const Home = () => {
  return (
    <>
      <Header />
      <Features />
      <Services />
      <About />
      <Team />
      <Work />
    </>
  );
};

export default Home;
