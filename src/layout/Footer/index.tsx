import Link from "next/link";

import { Container } from "./style";

export function Footer() {
  return (
    <Container>
      <div>
        <a className="copyright" href="mailto:wesleyara.contato@gmail.com">
          <p>Desenvolvido por Wesley Araújo</p>
        </a>
        <p className="reserv">
          {new Date().getFullYear()}&copy; Todos os direitos reservados - Wesley
          Araújo
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
