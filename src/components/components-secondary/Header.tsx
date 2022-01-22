import React from "react";

export default function Header() {
  return (
    <div className="header">
      <ul className="home">
        <a href="#">
          <li className="menu-list">Início</li>
        </a>
      </ul>

      <ul className="menu">
        <a href="#sobre">
          <li className="menu-list">Sobre</li>
        </a>
        <a href="#habilidades">
          <li className="menu-list">Habilidades</li>
        </a>
        <a href="#projetos">
          <li className="menu-list">Projetos</li>
        </a>
        <a href="#contato">
          <li className="menu-list">Contato</li>
        </a>
      </ul>
    </div>
  );
}
