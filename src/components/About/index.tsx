import Image from "next/image";
import matematicaImg from "../../assets/images/image-matematica.jpg";
import style from "./styles.module.scss";

export default function About() {
  return (
    <>
      <div id="about"></div>
      <div className={style.about} data-aos="fade-up">
        <h2 className="subTitle">About</h2>
        <div className={style.aboutContainer}>
          <div className={style.descriptionAbout}>
            <p className="paragraph">
              Meu nome é Wesley Gomes de Araújo, sou graduado em Licenciatura em
              Matemática pela Universidade de Pernambuco. Atraído pela
              programação, iniciei no ano de 2021 os estudos nessa área,
              especificamente algumas linguagens como HTML, CSS e JavaScript.
            </p>
            <br />
            <p className="paragraph">
              Atualmente estou estudando sobre Desenvolvimento Web, me
              aprofundando em front-end para futuramente avançar no back-end e
              virar um programador FullStack. Venho me dedicando em diversos
              projetos pessoais os quais sempre compartilho em meu repositório
              no
              <a href="https://github.com/wesleyara">GitHub</a> .
            </p>
            <br />
            <p className="paragraph">
              Tenho como objetivo contribuir o máximo para a equipe e a empresa,
              estou sempre disposto a aprender mais e me adaptar as diversas
              situações as quais somos apresentados diariamente. Busco evoluir
              como profissional e crescer dentro da empresa.
            </p>
            <br />
            <p className="paragraph">
              Apaixonado por música, minha banda favorita é o Red Hot Chili
              Peppers, e como bom geek, gosto muito de RPG de mesa, séries,
              animes e HQ&apos;s. Enfim, isso é um pouco do que eu queria contar
              sobre mim.
            </p>
          </div>

          <div className={style.descriptionImage}>
            <Image className={style.imgAbout} src={matematicaImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
