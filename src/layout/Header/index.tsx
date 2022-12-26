import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { CgMenuMotion } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

import { Container } from "./style";

interface HeaderProps {
  eventFunction: MouseEventHandler;
}

export function Header({ eventFunction }: HeaderProps) {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  const router = useRouter();

  return (
    <Container>
      <div>
        <h2
          onClick={() => {
            handleActive();
            router.push("/");
          }}
        >
          &lt;Portfólio /&gt;
        </h2>
      </div>

      <nav className={active ? "active" : ""}>
        <button className="btnMenu" onClick={handleActive}>
          {!active ? <GiHamburgerMenu /> : <CgMenuMotion />}
        </button>

        <ul>
          <Link href="/blog">
            <li onClick={handleActive}>Blog</li>
          </Link>
          <Link href="/">
            <li onClick={handleActive}>Portfólio</li>
          </Link>
          <Link href="/github">
            <li onClick={handleActive}>Github</li>
          </Link>
          <li className="theme" onClick={eventFunction}>
            <BiMoon />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
