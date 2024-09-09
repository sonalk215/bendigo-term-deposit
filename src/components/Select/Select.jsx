import React from "react";

const Select = ({ classes, onChangeHandler, value, id}) => {
  return (
    <select
      className={classes}
      onChange={onChangeHandler}
      value={value}
      id={id}
    >
      <option value="At Maturity">At Maturity</option>
    </select>
  );
};

export default Select;
