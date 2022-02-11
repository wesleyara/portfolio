import React from "react";
import Contato from "./Components/Contatos/index";
import Footer from "./layout/Footer";
import Habilidades from "./Components/Habilidades/index";
import Header from "./layout/Header/index";
import Inicio from "./Components/Inicio/index";
import Projetos from "./Components/Projetos/index";
import Sobre from "./Components/Sobre/index";

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
