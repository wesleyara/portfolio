import styled from "styled-components";

export const Container = styled.section`
  max-width: 500px;
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
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    position: relative;

    img {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }

    a {
      position: absolute;
      right: 5px;
      bottom: 3px;
    }

    section {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 10px;
    }
  }
`;

export const ContainerRepos = styled.section`
  max-width: 1100px;
  margin: 20px auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 10px;

    select {
      padding: 5px;
      border: 1px solid ${props => props.theme.colors.text};
      border-radius: 5px;
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};

      &:focus {
        outline: none;
      }
    }
  }

  h2 {
    text-align: center;
  }

  .content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    color: ${props => props.theme.colors.card};

    div {
      border: 1px solid ${props => props.theme.colors.text};
      padding: 10px 20px;
      width: 250px;
      height: 180px;
      transition: transform 0.3s ease-in-out;
      border-radius: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;

      h3 {
        color: ${props => props.theme.colors.card};
        &:hover {
          text-decoration: underline;
        }
      }

      p {
        text-align: justify;
        font-size: 14px;
        height: 68px;
        padding-right: 5px;
        overflow-y: auto;
      }

      span {
        display: flex;
        align-items: center;
        gap: 2px;
        position: absolute;
        right: 10px;
        bottom: 10px;
      }

      b {
        position: absolute;
        left: 10px;
        bottom: 10px;
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
