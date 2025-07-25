import React from "react";
import "./Hero.css";
import Navbar from "../Components/Navbar/Navbar";
import Content from "../Components/Content/Content";
import About from "../Components/About/About";
import Demo from "../Components/Demo/Demo";
import Whyus from "../Components/Whyus/Whyus";
import Modules from "../Components/Modules/Modules";
import Goals from "../Components/Goals/Goals";

const Hero = () => {
  return (
    <>
      <Content />
      <About />
      <Demo />
      <Whyus />
      <Modules />
      <Goals />
    </>
  );
};

export default Hero;
