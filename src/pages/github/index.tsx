import { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";

import { DataTypes, RepoTypes } from "../../@types";
import { Meta } from "../../layout";
import { Container, ContainerRepos } from "../../styles/github";
import { filterRepos, trackerRequest } from "../../utils";

const URL_USER = "https://api.github.com/users/wesleyara";
const URL_REPOS = "https://api.github.com/users/wesleyara/repos";

export default function Github() {
  const [data, setData] = useState<DataTypes>();
  const [repos, setRepos] = useState<RepoTypes[]>([]);
  const [countStars, setCountStars] = useState(0);

  const userRequest = async () => {
    const response = await fetch(URL_USER);
    const json = await response.json();
    setData(json);
  };

  const reposRequest = async () => {
    let page = 1;

    while (true) {
      const response = await fetch(URL_REPOS + "?per_page=100&page=" + page);
      const json = await response.json();

      if (json.length === 0) {
        break;
      }

      setRepos(prevState => [...prevState, ...json] || []);
      page++;
    }
  };

  useEffect(() => {
    userRequest();
    reposRequest();
    trackerRequest("github");
  }, []);

  useEffect(() => {
    repos.map(item => {
      setCountStars(prevState => prevState + item.stargazers_count);
    });
  }, [repos]);

  const [filter, setFilter] = useState<string>("date");

  return (
    <>
      <Meta
        title="Wesley Araújo - Github"
        description="Portfólio de Wesley Araújo, desenvolvedor React, Node e Typescript."
      />
      <Container>
        {data && (
          <div>
            <img src={data.avatar_url} alt="" />
            <h2>{data.login}</h2>
            <a target="_blank" href={data.html_url} rel="noreferrer">
              <AiFillGithub size={30} />
            </a>
            <section>
              <span>{data.bio}</span>
              <span>
                Stars received: <b>{countStars}</b>
              </span>
              <span>
                Followers: <b>{data.followers}</b>
              </span>
              <span>
                Following: <b>{data.following}</b>
              </span>
            </section>
          </div>
        )}
      </Container>
      {repos && (
        <ContainerRepos>
          <h2>Todos repositórios</h2>

          <section>
            Ordenar por:
            <select onChange={e => setFilter(e.target.value)}>
              <option value="date">Data</option>
              <option value="stars">Estrelas</option>
              <option value="name">Nome</option>
            </select>
          </section>
          <div className="content">
            {filterRepos(filter, repos).map((item, index) => (
              <div key={index}>
                <a target="_blank" href={item.html_url} rel="noreferrer">
                  <h4>{item.name}</h4>
                </a>
                <p>{item.description}</p>
                <b>{item.language}</b>
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
