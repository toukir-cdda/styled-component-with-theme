import React, { useState } from "react";
import DynamicForm from "./DynamicForm";

const Dform = () => {
  const [formData, setFormData] = useState([
    {
      key: "",
      value: "",
      type: "object",
      fields: [],
    },
  ]);

  const handleChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleAdd = (formIndex, newField) => {
    const updatedData = [...formData];
    updatedData[formIndex].fields.push(newField);
    setFormData(updatedData);
  };

  const handleRemove = (formIndex, fieldIndex) => {
    const updatedData = [...formData];
    updatedData[formIndex].fields.splice(fieldIndex, 1);
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    // Handle the final object submission
    const finalObject = {}; // Construct the final object based on the formData
    console.log(finalObject);
  };

  return (
    <>
      <h1>Dynamic Form</h1>
      <DynamicForm
        data={formData}
        onChange={handleChange}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Dform;
