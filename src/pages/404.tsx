import Image from "next/image";
import Link from "next/link";

import err from "../assets/images/Error_404_SVG.svg";
import { Meta } from "../layout";

export default function NotFound() {
  return (
    <>
      <Meta
        title="Wesley Araújo - 404"
        description="Portfólio de Wesley Araújo, desenvolvedor React, Node e Typescript."
      />
      <div className="containerError">
        <div className="bxImageError">
          <Image src={err} alt="" />
        </div>
        <br />
        <br />
        <p>
          Ooooops... a página que você está acessando não existe ou não terminou
          de ser produzida.
        </p>
        <p className="linkError">
          Retorne para <Link href="/">Home page</Link>.
        </p>
      </div>
    </>
  );
}
