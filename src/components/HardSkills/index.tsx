import { skill } from "./data";
import { Container } from "./styles";

export default function HardSkills() {
  return (
    <>
      <Container data-aos="fade-up">
        <h2 className="subTitle">Habilidades</h2>
        <div className="skillsContainer">
          {skill.map(item => item.component)}
        </div>
      </Container>
    </>
  );
}
