import React from "react";
import Contato from "./components-secondary/Contatos";
import Footer from "./components-secondary/Footer";
import Habilidades from "./components-secondary/Habilidades";
import Header from "./components-secondary/Header";
import Inicio from "./components-secondary/Inicio";
import Projetos from "./components-secondary/Projetos";
import Sobre from "./components-secondary/Sobre";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
