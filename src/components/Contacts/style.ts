import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 1rem;

  .contactContainer {
    margin: auto;
    width: 78%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;

    svg {
      font-size: 50px;
      margin-top: 20px;
    }

    div {
      font-size: 14px;
    }

    a {
      color: ${props => props.theme.colors.text};
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    .contactContainer {
      justify-content: flex-start;
    }
  }
`;
