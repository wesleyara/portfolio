import React from "react";
import { useState } from "react";
import {
  HabilidadesHTML,
  HabilidadesCSS,
  HabilidadesJS,
  HabilidadesTS,
  HabilidadesPuppe,
  HabilidadesNODE,
  HabilidadesReact,
  HabilidadesSass,
} from "../HabilidadesDescrição/index";

export default function Habilidades() {
  const [html, setHtml] = useState(false);
  const [CSS, setCSS] = useState(false);
  const [JS, setJS] = useState(false);
  const [TS, setTS] = useState(false);
  const [Puppe, setPuppe] = useState(false);
  const [NODE, setNODE] = useState(false);
  const [REACT, setReact] = useState(false);
  const [sass, setSass] = useState(false);

  function skillExit() {
    setHtml(false);
    setCSS(false);
    setJS(false);
    setTS(false);
    setPuppe(false);
    setNODE(false);
    setReact(false);
    setSass(false);
  }

  return (
    <>
      <div id="habilidades" className="habilidades">
        <h2 className="subTitleInicio">Habilidades</h2>
        <div className="description-habilidade">
          <ul className="skill-list">
            <li
              onMouseEnter={() => setHtml(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              HTML
            </li>
            <li
              onMouseEnter={() => setCSS(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              CSS
            </li>
            <li
              onMouseEnter={() => setJS(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              JavaScript
            </li>
            <li
              onMouseEnter={() => setTS(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              TypeScript
            </li>
            <li
              onMouseEnter={() => setPuppe(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              Puppeteer
            </li>
            <li
              onMouseEnter={() => setNODE(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              Node.js
            </li>
            <li
              onMouseEnter={() => setReact(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              React.js
            </li>
            <li
              onMouseEnter={() => setSass(true)}
              onMouseOut={skillExit}
              className="skill"
            >
              Sass
            </li>
          </ul>
        </div>
        {html == true && <HabilidadesHTML />}
        {CSS == true && <HabilidadesCSS />}
        {JS == true && <HabilidadesJS />}
        {TS == true && <HabilidadesTS />}
        {Puppe == true && <HabilidadesPuppe />}
        {NODE == true && <HabilidadesNODE />}
        {REACT == true && <HabilidadesReact />}
        {sass == true && <HabilidadesSass />}
      </div>
    </>
  );
}
