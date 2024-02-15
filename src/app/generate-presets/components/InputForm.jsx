import React, { useState } from "react";
import { addObject, addString, handleAddObject } from "../utils/addPresets";
import { resetAllPresets } from "../utils/removePresets";
import { ButtonContainer, InputContainer, Wrapper } from "../Styled-element";

const InputForm = ({
  newVarient,
  selectedObjectName,
  formData,
  setFormData,
  handleRemoveObject,
}) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [parent, setParent] = useState("root");

  const handleChangeKey = (e) => {
    setKey(e.target.value);
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeParent = (e) => {
    setParent(e.target.value);
  };

  return (
    <Wrapper>
      <InputContainer>
        <div>
          <span>Key:</span>
          <input type="text" value={key} onChange={handleChangeKey} />
        </div>
        <div>
          <span>Value:</span>
          <input type="color" value={value} onChange={handleChangeValue} />
        </div>
        <div>
          <span>Parent:</span>
          <select value={parent} onChange={handleChangeParent}>
            {formData
              .filter((field) => field.type !== "string")
              .map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </InputContainer>

      {!newVarient && (
        <ButtonContainer>
          <button
            onClick={() =>
              addObject({ formData, setFormData, setKey, key, parent })
            }
          >
            Add Object
          </button>
          <button
            onClick={() =>
              addString({
                formData,
                setFormData,
                setKey,
                key,
                parent,
                value,
                setValue,
              })
            }
          >
            Add String
          </button>
          {selectedObjectName && (
            <button onClick={handleRemoveObject}>Remove Object</button>
          )}

          <button onClick={() => resetAllPresets({ setFormData })}>
            Reset
          </button>
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

export default InputForm;
