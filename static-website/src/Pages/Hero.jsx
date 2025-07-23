import React from "react";
import "./Hero.css";
import Navbar from "../Components/Navbar/Navbar";
import Content from "../Components/Content/Content";
import About from "../Components/About/About";
import Demo from "../Components/Demo/Demo";

const Hero = () => {
  return (
    <>
      <Content />
      <About />
      <Demo />
    </>
  );
};

export default Hero;
