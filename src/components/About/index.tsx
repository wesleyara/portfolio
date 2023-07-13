import Image from "next/image";
import { useEffect, useState } from "react";

import matematicaImg from "../../assets/images/image-matematica.jpg";
import { formatDate, trackerRequest } from "../../utils";
import { Container } from "./style";

const date = new Date("2022-04-21");

export default function About() {
  const [currentDate, setCurrentDate] = useState("0");

  useEffect(() => {
    const formattedDate = formatDate(date);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Sobre</h2>
        <div className="aboutContainer">
          <div className="descriptionAbout">
            <p className="paragraph">
              Me chamo Wesley Gomes de Araújo, sou graduado em Licenciatura em
              Matemática pela Universidade de Pernambuco. Iniciei meus estudos
              na área de programação em Setembro de 2021 e atuo no mercado de
              desenvolvimento a mais de {currentDate}.
            </p>

            <p className="paragraph">
              Atualmente estudo e trabalho com Desenvolvimento Web, utilizando
              stack como Node, React e Typescript. Sempre me dedico em diversos
              projetos pessoais os quais compartilho em meu repositório no{" "}
              <a
                onClick={async () => await trackerRequest("github-button")}
                href="https://github.com/wesleyara"
              >
                GitHub
              </a>
              .
            </p>

            <p className="paragraph">
              Procuro contribuir o máximo para o crescimento e melhora da equipe
              e empresa que faço/farei parte, estou sempre disposto a aprender e
              me adaptar as diversas situações e desafios propostos. Busco
              evoluir como profissional e ampliar minhas experiências e
              conhecimentos
            </p>
          </div>

          <div className="descriptionImage">
            <Image layout="responsive" src={matematicaImg} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}
