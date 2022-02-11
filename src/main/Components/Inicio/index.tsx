import React from "react";
import style from "./index.module.scss";
import perfilImg from "../../Assets/Images/image-perfil.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";

export default function Inicio() {
  return (
    <div className={style.perfil}>
      <img className={style.perfilImage} src={perfilImg} alt="foto" />
      <div className={style.quemsou}>
        <h2 className="subTitleInicio">Olá! me chamo Wesley Araújo</h2>
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
            <FaGithub className={style.redes} />
          </a>
          <a
            href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={style.redes} />
          </a>
          <a
            href="mailto:wesleyara.contato@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className={style.redes} />
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.scrollContainer}>
          <a href="#sobre" rel="noreferrer">
            <BsMouse />
            <span className={style.spanInicio}>Role para baixo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
