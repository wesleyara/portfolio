import Image from "next/image";

import matematicaImg from "../../assets/images/image-matematica.jpg";
import { Container } from "./style";

export default function About() {
  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Sobre</h2>
        <div className="aboutContainer">
          <div className="descriptionAbout">
            <p className="paragraph">
              Meu nome é Wesley Gomes de Araújo, sou graduado em Licenciatura em
              Matemática pela Universidade de Pernambuco. Atraído pela
              tecnologia, em Setembro de 2021 iniciei meus estudos como
              desenvolvedor.
            </p>
            <br />
            <p className="paragraph">
              Atualmente estou estudando sobre Desenvolvimento Web, me
              aprofundando em front-end para futuramente avançar no back-end e
              virar um programador FullStack. Venho me dedicando em diversos
              projetos pessoais os quais sempre compartilho em meu repositório
              no <a href="https://github.com/wesleyara">GitHub</a>.
            </p>
            <br />
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
