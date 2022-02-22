import type { NextPage } from "next";

import Header from "../layout/Header";
import About from "../Components/About";
import HomePage from "../Components/HomePage";
import HardSkills from "../Components/HardSkills";
import Projects from "../Components/Projects";
import Contacts from "../Components/Contacts";
import Footer from "../layout/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <HardSkills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
