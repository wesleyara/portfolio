import styled from "styled-components";

export const Container = styled.section`
  width: 95%;
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

  .contactContainer {
    margin: auto;
    width: 60%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 50px;

    svg {
      font-size: 50px;
      margin-top: 20px;
    }

    a {
      color: greenyellow;
    }

    a:hover {
      animation: neon 1s alternate infinite ease-in-out;
    }
  }

  @media (max-width: 500px) {
    .contactContainer {
      justify-content: flex-start;
    }
  }
`;
