import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { trackerRequest } from "../../utils";
import { Container } from "./style";

export default function Contacts() {
  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Contato</h2>

        <div className="contactContainer">
          <div>
            <AiOutlineMail />
            <strong>
              <h2>E-mail</h2>
            </strong>
            Entre em contato comigo!
            <br />
            <strong>
              <a
                onClick={async () => await trackerRequest("email-button")}
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
              <h2>GitHub</h2>
            </strong>
            Veja meus repositórios no GitHub!
            <br />
            <strong>
              <a
                onClick={async () => await trackerRequest("github-button")}
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
              <h2>LinkedIn</h2>
            </strong>
            Acesse meu perfil no LinkedIn
            <br />
            <strong>
              <a
                onClick={async () => await trackerRequest("linkedin-button")}
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
