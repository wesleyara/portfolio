import styled from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 0 1rem;

  .btnMenu {
    display: none;
  }

  h2 {
    padding: 20px;
    font-size: 20pt;
    cursor: pointer;
  }

  ul {
    display: flex;

    li {
      padding: 20px;
      font-size: 15pt;
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
      }
    }

    .theme {
      transition: 0ms;

      &:hover {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
      }
    }
  }

  @media (max-width: 550px) {
    padding: 15px 2rem;

    h2 {
      padding: 0;
    }

    .btnMenu {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      border: none;
      cursor: pointer;
      padding: 5px;

      font-size: 30px;
    }

    ul {
      display: block;
      position: absolute;
      width: 100%;
      top: 80px;
      right: 0px;
      height: 0px;
      z-index: 999;
      visibility: hidden;
      overflow: hidden;
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};

      li {
        padding: 15px 2rem;
        transition: 0ms;
      }
    }

    nav.active ul {
      height: calc(100vh - 80px);
      visibility: visible;
      overflow: auto;
    }
  }
`;
