import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import BlogBox from "../../components/BlogBox";
import SectionTitle from "../../components/shared/SectionTitle";

import Post1 from "../../assets/images/post-01.jpg";
import Post3 from "../../assets/images/post-03.jpg";
import Post5 from "../../assets/images/post-05.jpg";

const Blog = () => {
  const data = {
    h4: "Trending News",
    h1: "Our Blogs",
    p: "Responsive and Raw One-Page HTML5 Template. Build whatever you like with this Template, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    color: "#fff",
  };

  const blogBoxData = [
    {
      id: 1,
      src: Post1,
      title: "Best WordPress Themes",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      src: Post3,
      title: "Managing Their Own Websites",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      src: Post5,
      title: "Best Plugins You Need To Know About",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <Box
        component="section"
        id="blog"
        paddingY="120px"
        bgcolor="#1d2124"
        position="relative"
      >
        <Container>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <Grid container>
              <Grid item md={8} margin="auto" textAlign="center">
                <SectionTitle data={data} />
              </Grid>
            </Grid>
          </AnimationOnScroll>

          <Grid container marginTop="50px" spacing={3}>
            {blogBoxData.map((box) => (
              <Grid item key={box.id} sm={6} md={4}>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                  <BlogBox
                    src={box.src}
                    title={box.title}
                    caption={box.caption}
                  />
                </AnimationOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
