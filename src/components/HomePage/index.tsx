import style from "./index.module.scss";
import perfilImg from "../../assets/images/app_development_SVG.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import Image from "next/image";

import Typed from "typed.js";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const options = {
      strings: [
        "&lt;Olá! me chamo Wesley Araújo /&gt;",
        "Sou desenvolvedor Front-End",
        "Seja bem vindo ao meu portfólio!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    new Typed("#title", options);
  }, []);
  return (
    <div className={style.profile} data-aos="fade-down">
      <span className={style.profileImage}>
        <Image layout="responsive" src={perfilImg} alt="foto" />
      </span>
      <div className={style.who} data-aos="fade-up">
        <h1 id="title"></h1>
        <br />
        <p className="paragraph">Desenvolvedor Web</p>
        <br />
        <p className="paragraph">
          Bem-vindo ao meu portfólio, estou sempre em busca de conhecimento e
          novas experiências. Role para baixo e descubra mais sobre mim!
        </p>

        <div className={style.networksBx}>
          <a
            href="https://github.com/wesleyara"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={style.networks} />
          </a>
          <a
            href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={style.networks} />
          </a>
          <a
            href="mailto:wesleyara.contato@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className={style.networks} />
          </a>
        </div>

        <div className={style.scrollContainer}>
          <a href="#about" rel="noreferrer">
            <BsMouse />
            <span>Role para baixo</span>
          </a>
        </div>
        <div className={style.bxAnimation}></div>
      </div>
    </div>
  );
}
