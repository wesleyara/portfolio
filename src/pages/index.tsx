import type { NextPage } from "next";

import About from "../components/About";
import Contacts from "../components/Contacts";
import { Form } from "../components/Form";
import HardSkills from "../components/HardSkills";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import { Footer } from "../layout/Footer";

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
      <About />
      <HardSkills />
      <Projects />
      <Contacts />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
