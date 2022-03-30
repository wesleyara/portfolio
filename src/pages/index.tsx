import type { NextPage } from "next";

import About from "../components/About";
import HomePage from "../components/HomePage";
import HardSkills from "../components/HardSkills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { Footer } from "../layout/Footer";
import { Form } from "../components/Form";

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
