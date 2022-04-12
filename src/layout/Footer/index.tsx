import { Container } from "./style";
import Link from "next/link";

export function Footer() {
  return (
    <Container>
      <div>
        <a className="copyright" href="mailto:wesleyara.contato@gmail.com">
          <p>Desenvolvido por Wesley Araújo</p>
        </a>
        <br />
        <p className="reserv">
          2022&copy; Todos os direitos reservados - Wesley Araújo
        </p>
      </div>
      <nav>
        <ul>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/">
            <li>Portfólio</li>
          </Link>
          <Link href="/github">
            <li>Github</li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
}
