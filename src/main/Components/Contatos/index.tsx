import React from "react";
import style from "./index.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Contato() {
  return (
    <>
      <div className="clear"></div>

      <div id="contato" className={style.contato}>
        <h2 className="subTitleInicio">Contatos</h2>

        <div className={style.containerContact}>
          <div className="contact">
            <AiOutlineMail />
            <strong>
              <h1>E-mail</h1>
            </strong>
            Entre em contato comigo!
            <br />
            <strong>
              <a
                target="_blank"
                href="mailto:wesleyara.contat@gmail.com"
                rel="noreferrer"
              >
                wesleyara.contato@gmail.com
              </a>
            </strong>
          </div>

          <div className="contact1">
            <FaGithub />
            <strong>
              <h1>GitHub</h1>
            </strong>
            Veja meus repositórios no GitHub!
            <br />
            <strong>
              <a
                target="_blank"
                href="https://github.com/wesleyara"
                rel="noreferrer"
              >
                github.com/wesleyara
              </a>
            </strong>
          </div>

          <div className="contact2">
            <FaLinkedin />
            <strong>
              <h1>LinkedIn</h1>
            </strong>
            Acesse meu perfil no LinkedIn
            <br />
            <strong>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/wesley-gomes-de-ara%C3%BAjo-534a66221/"
                rel="noreferrer"
              >
                Wesley Gomes de Araújo
              </a>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
