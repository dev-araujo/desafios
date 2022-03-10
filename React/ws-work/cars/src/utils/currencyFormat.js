export const currencyFormat = (num) => {
  let formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(parseInt(num * 1000)).slice(0, 9);
};
