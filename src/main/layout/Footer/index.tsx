import React from "react";
import style from "./index.module.scss";

export default function Footer() {
  return (
    <div className={style.footer} data-aos="fade-up">
      <a className={style.copyright} href="mailto:wesleyara.contato@gmail.com">
        <p>Desenvolvido por Wesley Araújo</p>
      </a>
      <br />
      <p className={style.reserv}>
        Todos os direitos reservados - Wesley Araújo
      </p>
    </div>
  );
}
