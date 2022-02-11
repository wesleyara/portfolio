import React from "react";
import matematicaImg from "../../Assets/Images/image-matematica.jpg";
import style from "./index.module.scss";

export default function Sobre() {
  return (
    <>
      <div id="sobre" className={style.sobre}>
        <h2 className="subTitleInicio">Sobre</h2>
        <div className={style.descriptionSobre}>
          <p className="paragrafo">
            Meu nome é Wesley Gomes de Araújo, sou graduado em Licenciatura em
            Matemática pela Universidade de Pernambuco (2017-2021). Já atuei
            como professor de matemática na rede pública de ensino. Sempre
            fissurado por números e programação, iniciei no ano de 2021 os
            estudos sobre programação, especificamente algumas linguagens como
            HTML, CSS e JavaScript.
          </p>
          <br />
          <p className="paragrafo">
            Recém formado em matemática, busco um dia poder ingressar em um
            mestrado e futuramente um doutorado, mas por enquanto estou muito
            entusiasmado com meus estudos e evolução na programação, uma área
            que tanto amo e quero muito poder trabalhar com isso em minha vida.
          </p>
          <br />
          <p className="paragrafo">
            Atualmente estou estudando sobre Desenvolvimento Web, me
            aprofundando em front-end para futuramente megulhar de cabeça no
            back-end e virar um programador FullStack. Venho trabalhando em
            diversos projetos pessoais que sempre compartilho cada coisa que
            faço em meu repositório no GitHub.
          </p>
          <br />
          <p className="paragrafo">
            Apaixonado por música, minha banda favorita é o Red Hot Chili
            Peppers, e como bom geek, gosto muito de RPG de mesa, séries, animes
            e HQ&apos;s. Enfim, isso é um pouco do que eu queria contar sobre
            mim.
          </p>
        </div>

        <div className={style.descriptionImage}>
          <img
            className={style.imgSobre}
            width="500px"
            src={matematicaImg}
            alt=""
          />
        </div>
      </div>

      <div className="clear"></div>
    </>
  );
}
