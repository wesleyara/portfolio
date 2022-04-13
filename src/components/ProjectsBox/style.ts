import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.cardBack};
  width: 350px;
  border-radius: 5px;
  border-bottom: 10px solid ${(props) => props.theme.colors.card};
  cursor: pointer;
  color: ${(props) => props.theme.colors.card};

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.cardBack};
    border-color: ${(props) => props.theme.colors.cardBack};
  }

  @media (max-width: 350px) {
    width: 300px;
  }
`;
