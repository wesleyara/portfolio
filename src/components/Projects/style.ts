import styled from "styled-components";

export const ProjectsStyle = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 1rem;

  .projectsContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 300px;

    @media screen and (max-width: 814px) {
      justify-content: center;
    }
  }
`;
