import styled from "styled-components";

export const Container = styled.section`
  max-width: 1100px;
  margin: 20px auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  text-align: center;

  div {
    width: max(300px, 29.28vw);
    border: 1px solid ${props => props.theme.colors.text};
    padding-bottom: 10px;
    min-width: 300px;

    img {
      width: 100%;
    }

    span {
      display: block;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    p {
      margin-top: 10px;
    }
  }
`;

export const ContainerRepos = styled.section`
  h2 {
    text-align: center;
  }

  .content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    color: ${props => props.theme.colors.card};

    div {
      border: 1px solid ${props => props.theme.colors.text};
      padding: 30px;
      width: 300px;
      height: 220px;
      transition: transform 0.3s ease-in-out;

      h3 {
        color: ${props => props.theme.colors.card};
        &:hover {
          text-decoration: underline;
        }
      }

      p {
        margin-top: 10px;
      }

      span {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }

      &:hover {
        background: ${props => props.theme.colors.card};
        color: ${props => props.theme.colors.cardBack};
        transform: scale(1.1);
      }

      &:hover h3 {
        color: ${props => props.theme.colors.cardBack};
      }
    }
  }
`;
