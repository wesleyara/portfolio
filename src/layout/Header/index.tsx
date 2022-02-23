import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="header" data-aos="fade-down">
      <input
        className="inputCheck"
        type="checkbox"
        name="checkbx"
        id="hamburguerid"
      ></input>
      <div className="home">
        <ul>
          <h2>&lt;Portfólio /&gt;</h2>
        </ul>
      </div>

      <label htmlFor="hamburguerid">
        <div className="container-hamburguer">
          <div className="hamburguer"></div>
        </div>
      </label>

      <h1 className="title-hamburguer">&lt;Meu Portfólio /&gt;</h1>

      <ul className="menu-hamburguer">
        <Link href="/blog" passHref>
          <li className="list-hamburguer">BLOG</li>
        </Link>
        <Link href="/" passHref>
          <li className="list-hamburguer">PORTFÓLIO</li>
        </Link>
        <Link href="/github" passHref>
          <li className="list-hamburguer">GITHUB</li>
        </Link>
      </ul>

      <div className="menu">
        <ul>
          <Link href="/blog" passHref>
            <li className="menu-list">Blog</li>
          </Link>
          <Link href="/" passHref>
            <li className="menu-list">Portfólio</li>
          </Link>
          <Link href="/github" passHref>
            <li className="menu-list">Github</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
