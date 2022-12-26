import { RepoTypes } from "../@types";

export const formatDate = (date: Date) => {
  const now = new Date();

  const diff = now.getTime() - date.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const monthsWithoutYears = months - years * 12;

  const formattedDate =
    months > 0
      ? years > 0
        ? `${years} anos e ${monthsWithoutYears} ${
            monthsWithoutYears > 1 ? "meses" : "mês"
          }`
        : `${months} ${months > 1 ? "meses" : "mês"}`
      : `${days} ${days > 1 ? "dias" : "dia"}`;

  return formattedDate;
};

export const filterRepos = (type: string, repos: RepoTypes[]) => {
  if (type === "date") {
    return repos.sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });
  }

  if (type === "stars") {
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  if (type === "name") {
    return repos.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  }

  return repos;
};
