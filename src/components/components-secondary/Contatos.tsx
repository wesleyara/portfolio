import React from "react";
import emailImg from "../images/image-email.png";
import linkedinImg from "../images/image-linkedin.png";
import githubImg from "../images/image-github.png";

export default function Contato() {
  return (
    <>
      <div className="clear"></div>

      <div id="contato" className="contato">
        <h2 className="subTitleInicio">Contatos</h2>

        <div className="containerBody">
          <div className="containerContact">
            <div className="contact">
              <img className="img" width="50px" src={emailImg} alt="email" />
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
              <img className="img" src={githubImg} alt="github" />
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
              <img className="img" src={linkedinImg} alt="linkedin" />
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
      </div>
    </>
  );
}
