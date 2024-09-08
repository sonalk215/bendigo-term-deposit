export const calculateTermDeposit = (amount, interest, time, interestPaid) => {
  const startingAmount = amount;
  const interestRate = interest;
  const investmentTerm = time;
  const interestPaidAt = interestPaid;

  console.log(startingAmount, interestRate, investmentTerm);

  const a = (startingAmount * interestRate) / 100;
  const b = time / 12;
  const c = a * b;
  // console.log("cccc   ", c);
  // console.log("aaaa   ", a);
  // console.log("bbbb   ", b);

  const finalBalance =
    +startingAmount + +((startingAmount * interestRate) / 100) * (time / 12);
  return finalBalance;
};
