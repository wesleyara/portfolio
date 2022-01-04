import React from "react";
import puppeteerImg from "../images/image-puppeteer.png";

export default function Habilidades() {
  return (
    <>
      <div id="habilidades" className="habilidades">
        <h2 className="subTitleInicio">Habilidades</h2>
        <div className="description-habilidade">
          <ul className="skill-list">
            <li
              onMouseEnter={htmlenter}
              onMouseOut={htmlexit}
              className="skill"
            >
              HTML
            </li>
            <li onMouseEnter={cssenter} onMouseOut={cssexit} className="skill">
              CSS
            </li>
            <li onMouseEnter={jsenter} onMouseOut={jsexit} className="skill">
              JavaScript
            </li>
            <li onMouseEnter={tsenter} onMouseOut={tsexit} className="skill">
              TypeScript
            </li>
            <li onMouseEnter={pupenter} onMouseOut={pupexit} className="skill">
              Puppeteer
            </li>
            <li onMouseEnter={nodenter} onMouseOut={nodexit} className="skill">
              Node.js
            </li>
            <li
              onMouseEnter={reactenter}
              onMouseOut={reactexit}
              className="skill"
            >
              React.js
            </li>
          </ul>
        </div>

        <div className="description-hab-images"></div>
        <div className="image-description"></div>
      </div>
    </>
  );
}

const images = document.querySelector(
  ".description-hab-images",
) as HTMLDivElement;
const descriptionImages = document.querySelector(
  ".image-description",
) as HTMLDivElement;

// Início das habilidades.

function htmlenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web.
        </p>
    `;
}

function htmlexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function cssenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        CSS ou Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.
        </p>
    `;
}

function cssexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function jsenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. O JavaSript manipula o comportamento de páginas web.
        </p>
    `;
}

function jsexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function pupenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src=${puppeteerImg}/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        O Puppeteer é uma biblioteca que fornece uma API de alto nível para controlar o Chrome ou o Chromium através do Protocolo DevTools.
        </p>
    `;
}

function pupexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function nodenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
        </p>
    `;
}

function nodexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function tsenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
        </p>
    `;
}

function tsexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

function reactenter() {
  images.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  descriptionImages.style.cssText = `
        background-color: rgb(85, 83, 83);
    `;

  images.innerHTML = `
        <img width="280px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
    `;

  descriptionImages.innerHTML = `
        <h2>O que é?</h2>
        <br>
        <p class="paragrafo">
        O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.
        </p>
    `;
}

function reactexit() {
  images.style.cssText = `
        background-color: ;
    `;

  descriptionImages.style.cssText = `
        background-color: ;
    `;

  images.innerHTML = "";

  descriptionImages.innerHTML = "";
}

// Final das habilidades.
