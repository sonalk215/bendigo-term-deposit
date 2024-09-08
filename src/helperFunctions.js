export const calculateTermDeposit = (amount, interest, time) => {
  const finalBalance =
    +amount + +((amount * interest) / 100) * (time / 12);
  return Math.round(finalBalance);
};

export const getYears = (totalMonths) => {
  let temp = +totalMonths;
  return Math.floor(temp / 12);
};

export const getMonths = (totalMonths) => {
  let temp = +totalMonths;
  return Math.round(temp % 12);
};