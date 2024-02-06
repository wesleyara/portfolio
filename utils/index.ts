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
        ? `${years} ano${years > 1 ? "s" : ""}${
            monthsWithoutYears > 0
              ? ` e ${monthsWithoutYears} ${
                  monthsWithoutYears > 1 ? "meses" : "mês"
                }`
              : ""
          }`
        : `${months} ${months > 1 ? "meses" : "mês"}`
      : `${days} ${days > 1 ? "dias" : "dia"}`;

  return formattedDate;
};
