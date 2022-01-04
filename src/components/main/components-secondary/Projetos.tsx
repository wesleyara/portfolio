import React from "react";
import githubImg from "../images/image-github.png";

export default function Projetos() {
  return (
    <>
      <div className="clear"></div>

      <div id="projetos" className="projetos">
        <h2 className="subTitleInicio">Projetos</h2>
        <div className="description-projetos">
          <p className="paragrafo">
            Aqui estão alguns dos projetos que eu já desenvolvi durante esse
            periodo que iniciei meus estudos em programação. Todos os projetos
            estão disponiveis em meu{" "}
            <a
              target="_blank"
              href="https://github.com/wesleyara"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <br />
          <p className="paragrafo">
            Tem projetos desde o desenvolvimento web, utilizando HTML, CSS e
            JavaScript, até scraping na web usando Puppeteer e Node.js para
            coletar informações de sites. Temos também automatização em um jogo
            online utilizando Python.
          </p>
        </div>

        <div className="project-list">
          <ul className="list-pro">
            <a
              target="_blank"
              href="https://github.com/wesleyara/loja-de-rpg-de-mesa"
              rel="noreferrer"
            >
              <li
                onMouseEnter={lojaenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={lojaenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  className="projects-img"
                  alt="github"
                />
                <span
                  onMouseEnter={lojaenter}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Loja de RPG
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/geobot-com-puppeteer"
              rel="noreferrer"
            >
              <li
                onMouseEnter={geoenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={geoenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={geoenter}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  GeoBot
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/churrascometro"
              rel="noreferrer"
            >
              <li
                onMouseEnter={churrasenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={churrasenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={churrasenter}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Churrascômetro
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/churrascometro"
              rel="noreferrer"
            >
              <li
                onMouseEnter={docuenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={docuenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={docuenter}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Documentação Dev
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/automatizando-atividades-no-jogo-narutox-usando-python"
              rel="noreferrer"
            >
              <li
                onMouseEnter={pyenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={pyenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={pyenter}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Pyautogui com jogos
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/API-de-cotacoes-de-moedas"
              rel="noreferrer"
            >
              <li
                onMouseEnter={coinenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={coinenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={coinenter}
                  onMouseOut={projectExit}
                >
                  Coin Converter
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/bot-para-consulta-de-cotacao-de-acao"
              rel="noreferrer"
            >
              <li
                onMouseEnter={codeenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={codeenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={codeenter}
                  onMouseOut={projectExit}
                >
                  CodeBot
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/GRU-generator"
              rel="noreferrer"
            >
              <li
                onMouseEnter={gruenter}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={gruenter}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={gruenter}
                  onMouseOut={projectExit}
                >
                  GRU generator
                </span>
              </li>
            </a>
          </ul>
        </div>

        <div className="description-project"></div>
      </div>
    </>
  );
}

// Início dos projetos.

const descriptionProjeto = document.querySelector(
  ".description-project",
) as HTMLDivElement;

function projectExit() {
  descriptionProjeto.style.cssText = `
    background-color: ;
    `;

  descriptionProjeto.innerHTML = "";
}

function lojaenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    </div>
    <br>
    <p>
    Esse projeto tem o intuito de elaborar uma loja virtual de RPG de mesa afim de simular uma loja dentro da própria narrativa do jogo.
    </p>
    `;
}

function geoenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
        <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    </div>
    <br>
    <p>
    Afim de acelerar o processo de coleta de informações geográficas acerca de cidades brasileiras, utilizei a biblioteca Puppeteer para fazer scraping no site do IBGE e coletar essas informações que eu desejava. O GeoBot coleta informações a partir do código HTML do site do IBGE, retornando no próprio console essas informações coletadas, usando o Node.js como back end para fazer essa ponte e possibilitar o scraping.
    </p>
    `;
}

function pyenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-PY" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
    </div>
    <br>
    <p>
    Com intuito de utilizar automação de tarefas utilizando Python, comecei a fazer uso da biblioteca Pyautogui para poder automatizar todo processo diário dentro de um jogo online, facilitando assim para que eu pudesse executar outras tarefas enquanto o programa fazia isso por mim.
    </p>
    `;
}

function codeenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
        <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    </div>
    <br>
    <p>
    Afim de acelerar o processo de coleta de informações sobre alguns indices de ações da Bolsa de Valores, utilizei a biblioteca Puppeteer para fazer scraping no site do Status Invest e coletar essas informações que eu desejava. O CodeBot coleta informações a partir do código HTML do site, retornando no próprio console essas informações coletadas, usando o Node.js como back end para fazer essa ponte e possibilitar o scraping.
    </p>
    `;
}

function churrasenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img target="_blank" align="center" alt="Wesley-TS" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
        <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    </div>
    <br>
    <p>
    O churrascômetro basicamente utiliza dos dados que o cliente coloca para calcular tudo que vai ser necessário em seu churrasco, desde a quantidade de cada item, até o valor do mesmo.
    </p>
    `;
}

function coinenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    </div>
    <br>
    <p>
    O Coin Converter é um conversor online que consume uma API de cotações de moeda, fazendo a conversão e retornando para o cliente o valor convertido.
    </p>
    `;
}

function gruenter() {
  descriptionProjeto.style.cssText = `
    background-color: rgb(85, 83, 83);
    `;

  descriptionProjeto.innerHTML = `
    <h2>Linguagens utilizadas:</h2>
    <br>
    <div style="display: inline_block;">
        <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
        <img align="center" alt="Wesley-PUPPE" src="https://img.shields.io/badge/Puppeteer-40B5A4?style=for-the-badge&logo=Puppeteer&logoColor=white">
        <img align="center" alt="Wesley-NODE" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    </div>
    <br>
    <p>
    Basicamente ele faz uso da biblioteca Puppeteer para acessar a página, preencher o formulário e informações importantes sobre o boleto e devolver um PDF pronto para realizar o pagamento, isso tudo de forma rápida e fácil.
    </p>
    `;
}

function docuenter() {
  descriptionProjeto.style.cssText = `
      background-color: rgb(85, 83, 83);
      `;

  descriptionProjeto.innerHTML = `
      <h2>Linguagens utilizadas:</h2>
      <br>
      <div style="display: inline_block;">
          <img align="center" alt="Wesley-JS" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
          <img align="center" alt="Wesley-HTML" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
          <img align="center" alt="Wesley-CSS" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
      </div>
      <br>
      <p>
      Documentation for developers é um projeto de documentação para as mais diversas linguagens, com intuito de guardar anotações e explicações de forma simplificada.
      </p>
      `;
}
