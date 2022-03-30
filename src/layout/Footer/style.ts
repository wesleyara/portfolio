import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  padding: 30px 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.text};

  .reserv {
    font-size: 20px;
  }

  .copyright {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
  }

  .copyright:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.text};
  }
`;
