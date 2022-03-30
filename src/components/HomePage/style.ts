import styled from "styled-components";

export const Container = styled.main`
  max-width: 1100px;
  margin: 70px auto;
  width: 95%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 1rem;
  z-index: 0;

  .profileImage {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
  }

  .who {
    position: relative;
    flex: 1.5;
    min-width: 300px;

    h1 {
      font-size: calc(max(25px, 3.29vw));
      display: inline;
    }
  }

  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }

  .typed-cursor {
    font-size: calc(max(30px, 4vw));
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
  }

  svg {
    margin-left: 10px;
    font-size: 40px;
    padding: 2px;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }

  svg:hover {
    color: red;
  }

  .networksBx {
    text-align: center;
    margin-top: 60px;
  }

  .scroll {
    color: white;
  }

  .scrollContainer {
    margin: 50px auto;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.text};

      svg {
        font-size: 40px;
        color: ${(props) => props.theme.colors.text};
      }

      span {
        margin-top: 10px;
      }
    }
  }

  .scrollContainer:hover {
    animation: neon 2s alternate infinite ease-in-out;
  }

  @keyframes rot {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .bxAnimation {
    position: absolute;
    top: 75%;
    left: 85%;
    transform: translate(-85%, -75%);
    width: calc(max(5.49vw, 50px));
    height: calc(max(5.49vw, 50px));
    margin-top: 15px;
    background-color: ${(props) => props.theme.colors.text};
    animation: rot 3s ease-in-out infinite;
  }
`;
