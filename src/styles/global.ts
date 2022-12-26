import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
  }

  ul {
    list-style: none;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  .paragraph {
    font-size: clamp(16px, 1.31vw, 20px);
  }

  .subTitle {
    font-size: 26pt;
  }

  .containerError {
    width: 90%;
    margin: auto;
    text-align: center;
    margin-top: 150px;
    font-size: 20px;

    a {
      color: #da0afd;
      text-decoration: underline;
    }
  }

*::-webkit-scrollbar {
  width: 12px !important;
  -webkit-transform: translate3d(0, 0, 0) !important;
  transform: translate3d(0, 0, 0) !important;
}

*::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.background};
  border-radius: 4px;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

*::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.text};
  border-radius: 20px;
  border: 1px solid black;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 768px;

    .esc {
      position: absolute;
      right: 5px;
      top: 5px;
      transform: translate(-5px, -5px);
      padding: 5px;
      font-size: 24px;
      background-color: transparent;
      border: none;
      color: ${props => props.theme.colors.background};
      font-weight: 700;
    }

    .content {
      margin-top: 30px;
    }
  }
`;
