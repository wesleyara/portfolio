import Image from "next/image";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { IProject } from "../../@types";
import { trackerRequest } from "../../utils";
import { Container, SecondContainer } from "./style";

export default function ProjectsBox({
  link,
  src,
  title,
  imgs,
  description,
}: IProject) {
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  const handleProjectOpen = async (link: string) => {
    await trackerRequest("project-button");
    open(link);
  };

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
            onClick={() => handleProjectOpen(link)}
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
