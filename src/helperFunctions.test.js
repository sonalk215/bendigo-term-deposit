import {
  getYears,
  getMonths,
  calculateTermDeposit,
  showInvestmentTerm,
} from "./helperFunctions";

it('should test getYears function', () => {
  expect(getYears(24)).toEqual(2);
})

it("should test getMonths function", () => {
  expect(getMonths(21)).toEqual(9);
});

it("should test calculateTermDeposit function", () => {
  expect(calculateTermDeposit(90249, 2.50, 28)).toEqual('95,514');
});

it("should test showInvestmentTerm function", () => {
  expect(showInvestmentTerm(28)).toEqual("2 years, 4 months");
});