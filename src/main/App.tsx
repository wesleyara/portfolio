import React from "react";
import About from "./Components/About";
import Contacts from "./Components/Contacts/index";
import HardSkills from "./Components/HardSkills";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <HardSkills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
