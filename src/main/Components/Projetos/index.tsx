import React from "react";
import { useState } from "react";
import style from "./index.module.scss";
import githubImg from "../../Assets/Images/image-github.png";
import {
  ProjetoLoja,
  ProjetoGeo,
  ProjetoChurras,
  ProjetoDocume,
  ProjetoPy,
  ProjetoCoin,
  ProjetoCode,
  ProjetoGRU,
  ProjetoPreco,
  ProjetoCpf,
  ProjetoPagina,
} from "../ProjetosDescrição";

export default function Projetos() {
  const [preco, setPreco] = useState(false);
  const [cpf, setCpf] = useState(false);
  const [pagina, setPagina] = useState(false);
  const [Loja, setLoja] = useState(false);
  const [Geo, setGeo] = useState(false);
  const [Churras, setChurras] = useState(false);
  const [Docume, setDocume] = useState(false);
  const [Py, setPy] = useState(false);
  const [Coin, setCoin] = useState(false);
  const [Code, setCode] = useState(false);
  const [GRU, setGRU] = useState(false);

  function projectExit() {
    setPreco(false);
    setCpf(false);
    setPagina(false);
    setLoja(false);
    setGeo(false);
    setChurras(false);
    setDocume(false);
    setPy(false);
    setCoin(false);
    setCode(false);
    setGRU(false);
  }

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
              className={style.link}
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
              href="https://github.com/wesleyara/calculadora-de-pm-alvo-para-acoes"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setPreco(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setPreco(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  className="projects-img"
                  alt="github"
                />
                <span
                  onMouseEnter={() => setPreco(true)}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Preço médio alvo
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/CPF-generator"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setPagina(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setPagina(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  className="projects-img"
                  alt="github"
                />
                <span
                  onMouseEnter={() => setPagina(true)}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Página de captura
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/CPF-generator"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setCpf(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setCpf(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  className="projects-img"
                  alt="github"
                />
                <span
                  onMouseEnter={() => setCpf(true)}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  CPF generator
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/loja-de-rpg-de-mesa"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setLoja(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setLoja(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  className="projects-img"
                  alt="github"
                />
                <span
                  onMouseEnter={() => setLoja(true)}
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
                onMouseEnter={() => setGeo(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setGeo(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={() => setGeo(true)}
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
                onMouseEnter={() => setChurras(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setChurras(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={() => setChurras(true)}
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
                onMouseEnter={() => setDocume(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setDocume(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={() => setDocume(true)}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Documentação Dev
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/API-de-cotacoes-de-moedas"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setCoin(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setCoin(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={() => setCoin(true)}
                  onMouseOut={projectExit}
                >
                  Coin Converter
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/automatizando-atividades-no-jogo-narutox-usando-python"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setPy(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setPy(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  onMouseEnter={() => setPy(true)}
                  onMouseOut={projectExit}
                  className="projects"
                >
                  Pyautogui com jogos
                </span>
              </li>
            </a>

            <a
              target="_blank"
              href="https://github.com/wesleyara/bot-para-consulta-de-cotacao-de-acao"
              rel="noreferrer"
            >
              <li
                onMouseEnter={() => setCode(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setCode(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={() => setCode(true)}
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
                onMouseEnter={() => setGRU(true)}
                onMouseOut={projectExit}
                className="rede"
              >
                <img
                  onMouseEnter={() => setGRU(true)}
                  onMouseOut={projectExit}
                  height="30px"
                  src={githubImg}
                  alt="github"
                />
                <span
                  className="projects"
                  onMouseEnter={() => setGRU(true)}
                  onMouseOut={projectExit}
                >
                  GRU generator
                </span>
              </li>
            </a>
          </ul>
        </div>
        {preco == true && <ProjetoPreco />}
        {cpf == true && <ProjetoCpf />}
        {pagina == true && <ProjetoPagina />}
        {Loja == true && <ProjetoLoja />}
        {Geo == true && <ProjetoGeo />}
        {Churras == true && <ProjetoChurras />}
        {Docume == true && <ProjetoDocume />}
        {Coin == true && <ProjetoCoin />}
        {Py == true && <ProjetoPy />}
        {Code == true && <ProjetoCode />}
        {GRU == true && <ProjetoGRU />}
      </div>
    </>
  );
}
