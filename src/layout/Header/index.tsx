import Link from "next/link";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";

import style from "./styles.module.scss";

export default function Header() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <header className={style.header} data-aos="fade-down">
      <div className={style.home}>
        <h2>&lt;Portfólio /&gt;</h2>
      </div>

      <nav className={active ? "active" : ""}>
        <button className={style.btnMenu} onClick={handleActive}>
          {!active ? <GiHamburgerMenu /> : <CgMenuMotion />}
        </button>

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
    </header>
  );
}
