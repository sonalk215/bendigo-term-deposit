export const calculateTermDeposit = (amount, interest, time) => {
  console.log(amount, interest, time);
  console.log(time/12);
  const finalBalance =
    +amount + +((amount * interest) / 100) * (time / 12);
  return Math.round(finalBalance).toLocaleString();
};

export const getYears = (totalMonths) => {
  let temp = +totalMonths;
  return Math.floor(temp / 12);
};

export const getMonths = (totalMonths) => {
  let temp = +totalMonths;
  return Math.round(temp % 12);
};

export const getComma = (years, month) => {
  const comma = years === 0 || month === 0 ? '' : ', ';
  return comma;
}