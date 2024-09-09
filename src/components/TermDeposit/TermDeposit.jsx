import React, { useState } from "react";
import { calculateTermDeposit, getMonths, getYears } from "../../helperFunctions";
import Label from "../Label/Label";

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

  const investmentTermChangeHandler = (e) => {
    setTotalMonths(+e.target.value);

    const years = getYears(+e.target.value);
    const months = getMonths(+e.target.value);

    setInputValues((prevState) => ({
      ...prevState,
      investmentTerm: `${years !== 0 ? years + " years, " : ""} ${
        months !== 0 ? months + " months " : ""
      }`,
    }));
  };

  const showFinalAmountHandler = (e) => {
    console.log('is THIS CALLED');
    const { startDepositAmount, interestRate } = inputValues;
    e.preventDefault();
    setFinalBalance(
      calculateTermDeposit(startDepositAmount, interestRate, totalMonths)
    );
  };

  return (
    <form className="termDepositForm" onSubmit={(e) => e.preventDefault()}>
      <p>
        <Label
          classes="labelText"
          labelFor="startDepositAmount"
          labelText="Start deposit Amount"
        />
        <span className="userValue">{inputValues.startDepositAmount}</span>
        <input
          className="rangeInput startDepositAmount"
          id="startDepositAmount"
          type="range"
          min="1000"
          max="1500000"
          defaultValue="10000"
          onChange={startDepositAmountHandler}
        />
      </p>
      <p>
        <Label
          classes="labelText"
          labelFor="interestRate"
          labelText="Interest Rate"
        />
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
        <Label
          classes="labelText"
          labelFor="investmentTerm"
          labelText="Investment Term"
        />
        <span className="userValue">{inputValues.investmentTerm}</span>
        <input
          className="rangeInput"
          id="investmentTerm"
          type="range"
          min="3"
          max="60"
          defaultValue="0"
          onChange={investmentTermChangeHandler}
        />
      </p>
      <p>
        <Label
          classes="labelText"
          labelFor="interestPaid"
          labelText="Interest Paid"
        />
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
      <button type="submit" className="submitButton" onClick={showFinalAmountHandler}>Show Final Amount</button>


      {finalBalance === 0 ? null : (
        <p className="finalStatement">
          The final balance is $
          <span className="finalBalance">{finalBalance}</span>
        </p>
      )}
    </form>
  );
};

export default TermDeposit;
