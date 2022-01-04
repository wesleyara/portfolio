import React from "react";
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
    </>
  );
}

export default App;
