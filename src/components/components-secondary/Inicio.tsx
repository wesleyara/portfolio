import React from "react";
import style from "../components-style/Inicio.module.scss";
import linkedinImg from "../images/image-linkedin.png";
import perfilImg from "../images/image-perfil.jpg";
import githubImg from "../images/image-github.png";
import emailImg from "../images/image-email.png";
import scroll from "../images/mouse.png";

export default function Inicio() {
  return (
    <div className="perfil">
      <img className="perfil-image" src={perfilImg} alt="foto" />
      <div className="quemsou">
        <h2 className={style.subTitleInicio}>Olá! me chamo Wesley Araújo</h2>
        <br />
        <p className="paragrafo">Desenvolvedor Web</p>
        <br />
        <p className="paragrafo">
          Bem-vindo ao meu portfólio, estou sempre em busca de conhecimento e
          novas experiências. Role para baixo e descubra mais sobre mim!
        </p>
        <br />
        <br />
        <br />
        <br />
        <div className={style.redesInicio}>
          <a
            href="https://github.com/wesleyara"
            target="_blank"
            rel="noreferrer"
          >
            <img className="redes" width="40px" src={githubImg} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="redes"
              width="40px"
              src={linkedinImg}
              alt="linkedin"
            />
          </a>
          <a
            href="mailto:wesleyara.contato@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="redes"
              width="40px"
              src={emailImg}
              alt="image-email"
            />
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.scrollContainer}>
          <a href="#sobre" rel="noreferrer">
            <img
              className={style.mouseInicio}
              width="40px"
              src={scroll}
              alt="mouse"
            />{" "}
            <span className={style.spanInicio}>Role para baixo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
