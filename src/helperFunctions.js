export const calculateTermDeposit = (amount, interest, time) => {
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
  const comma = years === 0 || month === 0 ? '' : ',';
  return comma;
}

export const showInvestmentTerm = (value) => {
  const years = getYears(+value);
  const months = getMonths(+value);

  const investmentTermString = `${years !== 0 ? years + " years" : ""}${getComma(years, months)} ${months !== 0 ? months + " months" : ""}`;

  return investmentTermString;
}