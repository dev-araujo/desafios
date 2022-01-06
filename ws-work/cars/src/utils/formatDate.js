export const formatDate = (timestamp) => {
  const dateObject = new Date(timestamp * 1000);
  return dateObject.toLocaleDateString("pt-BR", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};
