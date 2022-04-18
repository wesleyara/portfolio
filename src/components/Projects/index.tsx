import countries from "../../assets/images/countries.png";
import expense from "../../assets/images/expense.png";
import letmeask from "../../assets/images/letmeask.png";
import portfolio from "../../assets/images/portfolio.png";
import reactCRUD from "../../assets/images/reactCRUD.png";
import cpf from "../../assets/images/cpf.png";
import calculadora from "../../assets/images/calculadora.png";
import paginaCaptura from "../../assets/images/paginaCaptura.png";
import chilipeppers from "../../assets/images/chilipeppers.png";
import matpackage from "../../assets/images/matpackage.png";
import erem from "../../assets/images/erem.png";
import churras from "../../assets/images/churras.png";
import ProjectsBox from "../ProjectsBox";
import { ProjectsStyle } from "./style";

export default function Projects() {
  return (
    <>
      <ProjectsStyle data-aos="fade-up">
        <h2 className="subTitle">Projetos</h2>
        <div className="projectsContainer">
          <ProjectsBox
            title="Expense"
            link="https://github.com/wesleyara/expense"
            src={expense}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Rest Countries API"
            link="https://github.com/wesleyara/rest-countries-api"
            src={countries}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Letmeask"
            link="https://github.com/wesleyara/letmeask-nlw-together"
            src={letmeask}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Portfólio"
            link="https://github.com/wesleyara/portfolio-v2"
            src={portfolio}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="React CRUD"
            link="https://github.com/wesleyara/react-CRUD"
            src={reactCRUD}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Calculadora de Preço Médio Alvo"
            link="https://github.com/wesleyara/calculadora-de-pm-alvo-para-acoes"
            src={calculadora}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Página de Captura"
            link="https://github.com/wesleyara/pagina-de-captura-para-curso"
            src={paginaCaptura}
            img1="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            img2="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
          />

          <ProjectsBox
            title="Chili Peppers Pizzaria"
            link="https://github.com/wesleyara/chili-peppers-pizzaria"
            src={chilipeppers}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Mat Package"
            link="https://github.com/wesleyara/mat-package"
            src={matpackage}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
          />

          <ProjectsBox
            title="EREM"
            link="https://eremcjf.com.br/"
            src={erem}
            img1="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            img2="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />

          <ProjectsBox
            title="Churrascômetro"
            link="https://github.com/wesleyara/churrascometro"
            src={churras}
            img2="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            img1="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          />

          <ProjectsBox
            title="CPF generator"
            link="https://github.com/wesleyara/CPF-generator"
            src={cpf}
            img2="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            img1="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          />
        </div>
      </ProjectsStyle>
    </>
  );
}
