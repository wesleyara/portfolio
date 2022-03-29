import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: gray;
  width: 350px;
  border-radius: 5px;
  border-bottom: 10px solid greenyellow;
  cursor: pointer;

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: greenyellow;
    color: black;
    border-color: gray;

    animation: neon 2s alternate infinite;
  }

  @media (max-width: 350px) {
    width: 300px;
  }
`;
