import React from "react";

const Label = ({ classes, labelFor, labelText, }) => {
  return (
    <label className={classes} htmlFor={labelFor}>
      {labelText}
    </label>
  );
}

export default Label;