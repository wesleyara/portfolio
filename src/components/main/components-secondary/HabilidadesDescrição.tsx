import React from "react";
import puppeteerImg from "../images/image-puppeteer.png";

export default function HabilidadesDescrição() {
  return <h2>default</h2>;
}

export function HabilidadesHTML() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          HTML abreviação para a expressão inglesa HyperText Markup Language,
          que significa: &quot;Linguagem de Marcação de Hipertexto&quot; é uma
          linguagem de marcação utilizada na construção de páginas na Web.
        </p>
      </div>
    </>
  );
}

export function HabilidadesCSS() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          CSS ou Cascading Style Sheets é um mecanismo para adicionar estilo a
          um documento web.
        </p>
      </div>
    </>
  );
}

export function HabilidadesJS() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          JavaScript é uma linguagem de programação interpretada estruturada, de
          script em alto nível com tipagem dinâmica e multiparadigma. Juntamente
          com HTML e CSS, o JavaScript é uma das três principais tecnologias da
          World Wide Web. O JavaSript manipula o comportamento de páginas web.
        </p>
      </div>
    </>
  );
}

export function HabilidadesTS() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          TypeScript é uma linguagem de programação de código aberto
          desenvolvida pela Microsoft. É um superconjunto sintático estrito de
          JavaScript e adiciona tipagem estática opcional à linguagem.
        </p>
      </div>
    </>
  );
}

export function HabilidadesPuppe() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img width="280px" src={puppeteerImg} />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          O Puppeteer é uma biblioteca que fornece uma API de alto nível para
          controlar o Chrome ou o Chromium através do Protocolo DevTools.
        </p>
      </div>
    </>
  );
}

export function HabilidadesNODE() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          Node.js é um software de código aberto, multiplataforma, baseado no
          interpretador V8 do Google e que permite a execução de códigos
          JavaScript fora de um navegador web.
        </p>
      </div>
    </>
  );
}

export function HabilidadesReact() {
  return (
    <>
      <div id="description-hab-images" className="description-hab-images">
        <img
          width="280px"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
      </div>
      <div id="image-description" className="image-description">
        <h2>O que é?</h2>
        <br />
        <p className="paragrafo">
          O React é uma biblioteca JavaScript de código aberto com foco em criar
          interfaces de usuário em páginas web. É mantido pelo Facebook,
          Instagram, outras empresas e uma comunidade de desenvolvedores
          individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb,
          SeatGeek, HelloSign, Walmart e outros.
        </p>
      </div>
    </>
  );
}
