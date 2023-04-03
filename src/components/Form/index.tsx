import { FormEvent } from "react";

import { trackerRequest } from "../../utils";
import { Container } from "./style";

export function Form() {
  const handleMessageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await trackerRequest("form-button");
  };

  return (
    <Container data-aos="fade-up" onSubmit={handleMessageSubmit}>
      <h2>Entre em contato comigo!</h2>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" placeholder="Seu Nome" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Seu Email" />
      <label htmlFor="message">Mensagem:</label>
      <textarea
        id="message"
        placeholder="Escreva uma mensagem"
        cols={30}
        rows={10}
      ></textarea>
      <button type="submit">Enviar</button>
    </Container>
  );
}
