import React from "react";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <ContactMe />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
