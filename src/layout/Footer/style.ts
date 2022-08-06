import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 1rem;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.background};

  .copyright:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.text};
  }

  ul {
    display: flex;

    li {
      padding: 20px;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
      }
    }
  }

  @media (max-width: 550px) {
    justify-content: flex-start;

    ul {
      gap: 20px;
      margin-top: 15px;

      li {
        padding: 0;
      }
    }
  }
`;
