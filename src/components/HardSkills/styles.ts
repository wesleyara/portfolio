import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
  overflow: hidden;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 1rem;

  @keyframes neon {
    from {
      filter: drop-shadow(0 0 0 greenyellow);
    }
    to {
      filter: drop-shadow(0 0 10px greenyellow);
    }
  }

  .skillsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    div {
      width: 200px;
      height: 150px;
      margin-top: 20px;
      background-color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border-bottom: 10px solid greenyellow;
      transition: 0.3s ease-in-out;
      cursor: pointer;

      svg {
        font-size: 80px;
      }
    }

    div:hover {
      border-color: gray;
      background-color: greenyellow;
      transform: scale(1.1);
      animation: neon 1s alternate infinite ease-in-out;

      svg {
        color: gray;
      }
    }
  }
`;
