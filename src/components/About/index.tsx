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
              Meu nome é Wesley Gomes de Araújo, sou graduado em Licenciatura em
              Matemática pela Universidade de Pernambuco. Dei início aos meus
              estudos na programação em Setembro de 2021 e já atuo no mercado de
              desenvolvimento a mais de {currentDate}.
            </p>

            <p className="paragraph">
              Atualmente estou estudando e trabalhando com Desenvolvimento Web,
              utilizando stack como Node, React e Typescript. Sempre me
              dedicando em diversos projetos pessoais os quais compartilho em
              meu repositório no{" "}
              <a
                onClick={async () => await trackerRequest("github-button")}
                href="https://github.com/wesleyara"
              >
                GitHub
              </a>
              .
            </p>

            <p className="paragraph">
              Tenho como objetivo contribuir o máximo para a equipe e a empresa,
              estou sempre disposto a aprender mais e me adaptar as diversas
              situações as quais somos apresentados diariamente. Busco evoluir
              como profissional e crescer dentro da empresa.
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
