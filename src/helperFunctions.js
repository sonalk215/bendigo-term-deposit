export const calculateTermDeposit = (amount, interest, time) => {
  const finalBalance =
    +amount + +((amount * interest) / 100) * (time / 12);
  return Math.round(finalBalance);
};
