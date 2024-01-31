import React from "react";
import { InputContainer } from "../styled-layout/StyledLayout";

const FromInput = ({ label, placeholder, type, name, error, icon }) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} />
        {icon && icon}
      </div>
      {error && <p>{error}</p>}
    </InputContainer>
  );
};

export default FromInput;
