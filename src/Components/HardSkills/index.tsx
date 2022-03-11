import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { SiPuppeteer, SiTypescript } from "react-icons/si";
import style from "./index.module.scss";

export default function HardSkills() {
  return (
    <>
      <div id="hardskills"></div>
      <div className={style.skills} data-aos="fade-up">
        <h2 className="subTitle">Hard Skills</h2>
        <div className={style.skillsContainer}>
          <div className={style.skillsBx} data-aos="fade-up">
            <AiFillHtml5 />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <DiCss3 />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <DiJavascript1 />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <SiTypescript />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <FaReact />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <FaNodeJs />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <SiPuppeteer />
          </div>
          <div className={style.skillsBx} data-aos="fade-up">
            <FaSass />
          </div>
        </div>
      </div>
    </>
  );
}
