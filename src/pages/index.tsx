import type { NextPage } from "next";

import { Header } from "../layout/Header";
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
      <Header />
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
