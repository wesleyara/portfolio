import React from "react";
import style from "./index.module.scss";
import portfolio from "../../Assets/Images/portfolio.png";
import reactCRUD from "../../Assets/Images/reactCRUD.png";
import cpf from "../../Assets/Images/cpf.png";
import calculadora from "../../Assets/Images/calculadora.png";
import paginaCaptura from "../../Assets/Images/paginaCaptura.png";
import chilipeppers from "../../Assets/Images/chilipeppers.png";
import matpackage from "../../Assets/Images/matpackage.png";
import erem from "../../Assets/Images/erem.png";
import churras from "../../Assets/Images/churras.png";

export default function Projects() {
  return (
    <>
      <div id="projects"></div>
      <div className={style.projects} data-aos="fade-up">
        <h2 className="subTitle">Projects</h2>
        <div className={style.projectsContainer}>
          <a
            target="_blank"
            href="https://github.com/wesleyara/portfolio-v2"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={portfolio} alt="" />
              <h2>Portfólio</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/react-CRUD"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={reactCRUD} alt="" />
              <h2>React CRUD</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/calculadora-de-pm-alvo-para-acoes"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={calculadora} alt="" />
              <h2>Calculadora de Preço Médio Alvo</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/pagina-de-captura-para-curso"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={paginaCaptura} alt="" />
              <h2>Página de captura</h2>
              <div>
                <img
                  alt="Wesley-HTML"
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/chili-peppers-pizzaria"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={chilipeppers} alt="" />
              <h2>Chili Peppers Pizzaria</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/mat-package"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={matpackage} alt="" />
              <h2>Mat Package</h2>
              <div>
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-NODE"
                  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                />
              </div>
            </div>
          </a>

          <a target="_blank" href="https://eremcjf.com.br/" rel="noreferrer">
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={erem} alt="" />
              <h2>EREM Site</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/churrascometro"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={churras} alt="" />
              <h2>Churrascômetro</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-HTML"
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                />
                <img
                  alt="Wesley-CSS"
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                />
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://github.com/wesleyara/CPF-generator"
            rel="noreferrer"
          >
            {" "}
            <div className={style.projectsBx} data-aos="fade-up">
              <img className={style.img} src={cpf} alt="" />
              <h2>CPF generator</h2>
              <div>
                {" "}
                <img
                  alt="Wesley-TS"
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  alt="Wesley-REACT"
                  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                />
                <img
                  alt="Wesley-SASS"
                  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                />{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
