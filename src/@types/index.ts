export interface IProject {
  title: string;
  link: string;
  src: string;
  imgs: string[];
  description: string;
}
export interface DataTypes {
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
  login: string;
  html_url: string;
  followers: number;
  following: number;
}

export interface RepoTypes {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  created_at: string;
  language: string;
  languages_url: string;
}
