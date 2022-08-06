import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 350px;
  height: 250px;
  margin-top: 10px;

  border-radius: 5px;
  border-bottom: 10px solid ${props => props.theme.colors.card};
  background-color: ${props => props.theme.colors.cardBack};
  color: ${props => props.theme.colors.card};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;

    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.cardBack};
    background-color: ${props => props.theme.colors.card};
    border-radius: 50%;
  }

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .img {
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.card};
    color: ${props => props.theme.colors.cardBack};
    border-color: ${props => props.theme.colors.cardBack};
  }

  @media (max-width: 350px) {
    width: 300px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  position: relative;
  text-align: center;
  text-shadow: 1px 1px 1px black;
  margin-top: 10px;

  width: 350px;
  height: 250px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.card};
  color: ${props => props.theme.colors.cardBack};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;

    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.card};
    background-color: ${props => props.theme.colors.cardBack};
    border-radius: 50%;
  }

  span {
    padding: 5px 20px 5px 20px;
    border: 1px solid ${props => props.theme.colors.cardBack};
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;

    &:hover {
      background-color: ${props => props.theme.colors.cardBack};
      color: ${props => props.theme.colors.card};
      text-shadow: none;
    }
  }
`;
