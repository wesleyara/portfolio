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
          <a href="#">
            <li className="menu-list">Home</li>
          </a>
        </ul>
      </div>

      <label htmlFor="hamburguerid">
        <div className="container-hamburguer">
          <div className="hamburguer"></div>
        </div>
      </label>

      <h1 className="title-hamburguer">Meu Portfólio</h1>

      <ul className="menu-hamburguer">
        <label htmlFor="hamburguerid">
          <a href="#about">
            <li className="list-hamburguer">ABOUT</li>
          </a>
        </label>
        <a href="#hardskills">
          <li className="list-hamburguer">HARD SKILLS</li>
        </a>
        <a href="#projects">
          <li className="list-hamburguer">PROJECTS</li>
        </a>
        <a href="#contacts">
          <li className="list-hamburguer">CONTACTS</li>
        </a>
      </ul>

      <div className="menu">
        <ul>
          <a href="#about">
            <li className="menu-list">About</li>
          </a>
          <a href="#hardskills">
            <li className="menu-list">Hard Skills</li>
          </a>
          <a href="#projects">
            <li className="menu-list">Projects</li>
          </a>
          <a href="#contacts">
            <li className="menu-list">Contacts</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
