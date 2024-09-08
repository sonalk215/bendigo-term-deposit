import React, { useState } from "react";
import { calculateTermDeposit } from "../../helperFunctions";

const TermDeposit = () => {
  const initialState = {
    startDepositAmount: 0,
    interestRate: 0.0,
    investmentTerm: "",
    interestPaid: "",
  };
  const [inputValues, setInputValues] = useState(initialState);
  const [finalBalance, setFinalBalance] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  const inputChangeHandler = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const startDepositAmountHandler = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      startDepositAmount: e.target.value,
    }));
  };

  const sliderFunction = (e) => {
    setTotalMonths(+e.target.value);
    let temp = +e.target.value;
    let years = Math.floor(temp / 12);
    let months = Math.round(temp % 12);

    setInputValues((prevState) => ({
      ...prevState,
      investmentTerm: `${years !== 0 ? years + " years, " : ""} ${
        months !== 0 ? months + " months " : ""
      }`,
    }));
  };

  const showFinalAmountHandler = (e) => {
    const { startDepositAmount, interestRate } = inputValues;
    e.preventDefault();
    setFinalBalance(
      calculateTermDeposit(startDepositAmount, interestRate, totalMonths)
    );
  };

  return (
    <form className="termDepositForm" onSubmit={showFinalAmountHandler}>
      <p>
        <label className="labelText" htmlFor="startDepositAmount">
          Start deposit Amount
        </label>
        <span className="userValue">{inputValues.startDepositAmount}</span>
        <input
          className="rangeInput"
          id="startDepositAmount"
          type="range"
          min="1000"
          max="1500000"
          defaultValue="10000"
          onChange={startDepositAmountHandler}
        />
      </p>
      <p>
        <label className="labelText" htmlFor="interestRate">
          Interest Rate
        </label>
        <span className="userValue"></span>
        <input
          className="enterValueField"
          id="interestRate"
          type="number"
          onChange={inputChangeHandler}
          step="0.10"
          min="0.00"
          value={inputValues.interestRate}
        />
      </p>
      <p>
        <label className="labelText" htmlFor="investmentTerm">
          Investment Term
        </label>
        <span className="userValue">{inputValues.investmentTerm}</span>
        <input
          className="rangeInput"
          id="investmentTerm"
          type="range"
          min="3"
          max="60"
          defaultValue="0"
          onChange={sliderFunction}
        />
      </p>
      <p>
        <label className="labelText" htmlFor="interestPaid">
          Interest Paid
        </label>
        <span className="userValue"></span>
        <select
          className="enterValueField"
          name="interestPaid"
          id="interestPaid"
          onChange={inputChangeHandler}
          value={inputValues.interestPaid}
        >
          <option value="">None</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Annually">Annually</option>
          <option value="At Maturity">At Maturity</option>
        </select>
      </p>
      <div className="submitButtonDiv">
        <input
          type="submit"
          value="Show Final Amount"
          className="submitButton"
        />
      </div>

      <p className="finalStatement">
        The final balance is $
        <span className="finalBalance">{finalBalance}</span>
      </p>
    </form>
  );
};

export default TermDeposit;
