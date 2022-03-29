/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import style from "./styles.module.scss";

interface ProjectsBoxProps {
  link: string;
  src: StaticImageData;
  title: string;
  img1: string;
  img2: string;
}

export default function ProjectsBox({
  link,
  src,
  title,
  img1,
  img2,
}: ProjectsBoxProps) {
  return (
    <a target="_blank" href={link} rel="noreferrer">
      {" "}
      <div className={style.projectsBx} data-aos="fade-up">
        <Image
          layout="responsive"
          className={style.img}
          src={src}
          alt="image"
        />
        <h2>{title}</h2>
        <div>
          {" "}
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
        </div>
      </div>
    </a>
  );
}
