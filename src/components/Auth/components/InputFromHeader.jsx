import React from "react";
import { FormHeader } from "../styled-layout/StyledLayout";

const InputFromHeader = ({ title, subtitle }) => {
  return (
    <FormHeader>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </FormHeader>
  );
};

export default InputFromHeader;
