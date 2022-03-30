import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  text-align: justify;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 1rem;

  .aboutContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .descriptionAbout {
      margin-top: 20px;
      flex: 1.5;
      min-width: 300px;

      a {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.text};
      }
    }

    .descriptionImage {
      margin-top: 20px;
      flex: 1;
      border-radius: 5px;
      min-width: 300px;

      img {
        border-radius: 5px;
      }
    }
  }
`;
