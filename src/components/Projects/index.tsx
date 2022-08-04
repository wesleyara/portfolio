import ProjectsBox from "../ProjectsBox";
import { projects } from "./data";
import { ProjectsStyle } from "./style";

export default function Projects() {
  return (
    <>
      <ProjectsStyle data-aos="fade-up">
        <h2 className="subTitle">Projetos</h2>
        <div className="projectsContainer">
          {projects.map((item, index) => (
            <ProjectsBox
              key={index}
              title={item.title}
              link={item.link}
              src={item.src}
              imgs={item.imgs}
              description={item.description}
            />
          ))}
        </div>
      </ProjectsStyle>
    </>
  );
}
