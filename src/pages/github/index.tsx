import { useEffect, useState } from "react";
import { Container, ContainerRepos } from "../../styles/github";

import { AiOutlineStar } from "react-icons/ai";

interface DataTypes {
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
  login: string;
  html_url: string;
}

interface RepoTypes {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

const URL_USER = "https://api.github.com/users/wesleyara";
const URL_REPOS = "https://api.github.com/users/wesleyara/repos";
export default function Github() {
  const [data, setData] = useState<DataTypes>();
  const [repos, setRepos] = useState<RepoTypes[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL_USER);
      const json = await response.json();
      setData(json);

      const responseRepos = await fetch(URL_REPOS);
      const jsonRepos = await responseRepos.json();
      setRepos(jsonRepos);
    }

    getData();
  }, []);
  return (
    <>
      <Container>
        {data && (
          <div>
            <img src={data.avatar_url} alt="" />
            <h2>{data.login}</h2>
            <a target="_blank" href={data.html_url} rel="noreferrer">
              <span>Github</span>
            </a>
            <p>{data.bio}</p>
          </div>
        )}
      </Container>
      {repos && (
        <ContainerRepos>
          <h2>Todos repositórios</h2>
          <div className="content">
            {repos.map((item, index) => (
              <div key={index}>
                <a target="_blank" href={item.html_url} rel="noreferrer">
                  <h3>{item.name}</h3>
                </a>
                <p>{item.description}</p>
                <span>
                  <AiOutlineStar /> {item.stargazers_count}
                </span>
              </div>
            ))}
          </div>
        </ContainerRepos>
      )}
    </>
  );
}
