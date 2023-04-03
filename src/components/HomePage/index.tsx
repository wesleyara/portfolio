import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

import perfilImg from "../../assets/images/app_development_SVG.svg";
import { trackerRequest } from "../../utils";
import { Container } from "./style";

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

    // eslint-disable-next-line no-new
    new Typed("#title", options);
  }, []);
  return (
    <Container>
      <span className="profileImage">
        <Image layout="responsive" src={perfilImg} alt="foto" />
      </span>
      <div className="who" data-aos="fade-up">
        <h1 id="title"></h1>
        <br />
        <p className="paragraph">Desenvolvedor Web</p>
        <p className="paragraph">
          Bem-vindo ao meu portfólio, estou sempre em busca de conhecimento e
          novas experiências. Role para baixo e descubra mais sobre mim!
        </p>

        <div className="networksBx">
          <a
            onClick={async () => await trackerRequest("github-button")}
            href="https://github.com/wesleyara"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            onClick={async () => await trackerRequest("linkedin-button")}
            href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            onClick={async () => await trackerRequest("email-button")}
            href="mailto:wesleyara.contato@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </Container>
  );
}
