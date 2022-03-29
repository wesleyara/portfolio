import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import { Container } from "./style";

export default function Contacts() {
  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Contacts</h2>

        <div className="contactContainer">
          <div>
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

          <div>
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

          <div>
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
      </Container>
    </>
  );
}
