import styled from "styled-components";

export const Container = styled.header`
  background-color: black;
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
    transition: 0.3s ease-in-out;
  }

  ul {
    display: flex;

    li {
      padding: 20px;
      font-size: 15pt;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: greenyellow;
        color: black;
        transform: scale(1.1);
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
      background-color: black;
      color: greenyellow;
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
      transition: 1s;
      visibility: hidden;
      overflow: hidden;

      li {
        padding: 15px 2rem;
      }
    }

    nav.active ul {
      height: calc(100vh - 80px);
      background: black;
      visibility: visible;
      overflow: auto;
    }
  }
`;
