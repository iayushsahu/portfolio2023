import React from "react";
import "./components/static/styles/index.css";
import "./components/static/scripts/index.js";
import Navbar from "./components/navbar";
import MainSection from "./components/pages/mainSection";
import AboutSection from "./components/pages/aboutSection";
import ProjectSection from "./components/pages/projectSection";
import SkillSection from "./components/pages/skillSection";
import ContactSection from "./components/pages/contactSection";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </>
  );
};

export default App;
