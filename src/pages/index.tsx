import type { NextPage } from "next";
import { useEffect } from "react";

import About from "../components/About";
import Contacts from "../components/Contacts";
import { Form } from "../components/Form";
import HardSkills from "../components/HardSkills";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import { Footer } from "../layout/Footer";
import { trackerRequest } from "../utils";

const Home: NextPage = () => {
  useEffect(() => {
    trackerRequest("home").then();
  }, []);

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
