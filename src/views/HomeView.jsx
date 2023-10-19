import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../components/Main";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomeView = () => {
  return (
    <>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomeView;
