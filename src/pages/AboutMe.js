import React from "react";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Plea from "../components/Plea";
import Skillset from "../components/Skillset";
import Socials from "../components/Socials";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <Info />
      <Skillset />
      <ContactMe />
      <Socials />
      <Plea />
      <Footer />
    </div>
  );
};

export default AboutMe;
