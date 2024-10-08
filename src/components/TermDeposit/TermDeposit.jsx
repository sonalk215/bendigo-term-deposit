import React, { useState } from "react";
import {
  calculateTermDeposit,
  showInvestmentTerm,
} from "../../helperFunctions";
import Label from "../Label/Label";
import Select from "../Select/Select";

const TermDeposit = () => {
  const initialState = {
    startDepositAmount: '10000',
    interestRate: 1.10,
    interestPaid: "",
  };
  const [inputValues, setInputValues] = useState(initialState);
  const [finalBalance, setFinalBalance] = useState(0);
  const [totalMonths, setTotalMonths] = useState(36);

  const inputChangeHandler = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const investmentTermChangeHandler = (e) => {
    setTotalMonths(+e.target.value);
  };

  const submitButtonHandler = (e) => {
    const { startDepositAmount, interestRate } = inputValues;
    e.preventDefault();
    setFinalBalance(
      calculateTermDeposit(startDepositAmount, interestRate, totalMonths)
    );
  };

  return (
    <div className="termDeposit">
      <h1>Calculate Term Deposit</h1>
      <form className="termDepositForm" onSubmit={(e) => e.preventDefault()}>
        <p>
          <Label
            classes="labelText"
            labelFor="startDepositAmount"
            labelText="Start deposit Amount"
          />
          <span className="userValue">
           ${Number(inputValues.startDepositAmount).toLocaleString()}
          </span>
          <input
            className="rangeInput startDepositAmount"
            id="startDepositAmount"
            type="range"
            min="1000"
            max="1500000"
            defaultValue="10000"
            onChange={inputChangeHandler}
            onBlur={submitButtonHandler}
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
            onBlur={submitButtonHandler}
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
          
          <span className="userValue">{showInvestmentTerm(totalMonths)}</span>
          <input
            className="rangeInput"
            id="investmentTerm"
            type="range"
            min="3"
            max="60"
            defaultValue="0"
            onChange={investmentTermChangeHandler}
            onBlur={submitButtonHandler}
          />
        </p>
        <p>
          <Label
            classes="labelText"
            labelFor="interestPaid"
            labelText="Interest Paid"
          />
          <span className="userValue"></span>
          <Select
            classes="enterValueField"
            id="interestPaid"
            onChangeHandler={inputChangeHandler}
            value={inputValues.interestPaid}
          />
        </p>
        <button
          type="submit"
          className="submitButton"
          onClick={submitButtonHandler}
        >
          Show Final Amount
        </button>

        {finalBalance === 0 ? null : (
          <p className="finalStatement">
            The final balance is $
            <span id="finalBalance" className="finalBalance">{finalBalance}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default TermDeposit;
