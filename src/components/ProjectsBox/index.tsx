import Image from "next/image";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { IProject } from "../../@types";
import { Container, SecondContainer } from "./style";

export default function ProjectsBox({
  link,
  src,
  title,
  imgs,
  description,
}: IProject) {
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  return (
    <>
      {!infoIsOpen ? (
        <Container>
          <button onClick={() => setInfoIsOpen(true)}>
            <BsInfoCircle size={25} />
          </button>

          <Image
            width={350}
            height={180}
            className="img"
            src={src}
            alt="image"
            onClick={() => open(link)}
          />

          <h2>{title}</h2>

          <span>
            {imgs.map((item, index) => (
              <img key={index} src={item} alt="image" />
            ))}
          </span>
        </Container>
      ) : (
        <SecondContainer>
          <button onClick={() => setInfoIsOpen(false)}>
            <BsInfoCircle size={25} />
          </button>

          <h2>{title}</h2>
          <p>{description}</p>

          <span onClick={() => open(link)}>Repositório</span>
        </SecondContainer>
      )}
    </>
  );
}
