import { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState([
    {
      key: "",
      value: "",
      type: "string",
    },
  ]);

  const [nestedFields, setNestedFields] = useState([]);

  const handleFormChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleNestedChange = (index, field, value) => {
    const updatedNestedFields = [...nestedFields];
    updatedNestedFields[index][field] = value;
    setNestedFields(updatedNestedFields);
  };

  const handleAddFormField = () => {
    setFormData([
      ...formData,
      {
        key: "",
        value: "",
        type: "string",
      },
    ]);
  };

  const handleRemoveFormField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleAddNestedField = () => {
    setNestedFields([
      ...nestedFields,
      {
        key: "",
        value: "",
        type: "string",
      },
    ]);
  };

  const handleRemoveNestedField = (index) => {
    const updatedNestedFields = [...nestedFields];
    updatedNestedFields.splice(index, 1);
    setNestedFields(updatedNestedFields);
  };

  const handleSubmit = () => {
    const finalObject = {};
    formData.forEach((field) => {
      if (field.type === "object") {
        finalObject[field.key] = {};
        nestedFields.forEach((nestedField) => {
          finalObject[field.key][nestedField.key] = nestedField.value;
        });
      } else {
        finalObject[field.key] = field.value;
      }
    });
    console.log(finalObject);
  };
  console.log(formData, "formDat", nestedFields, "nestedFields");

  return (
    <div>
      {formData.map((field, index) => (
        <div key={index}>
          <input
            value={field.key}
            onChange={(e) => handleFormChange(index, "key", e.target.value)}
          />
          <input
            type={field.value}
            value={field.value}
            onChange={(e) => handleFormChange(index, "value", e.target.value)}
          />
          <select
            value={field.type}
            onChange={(e) => handleFormChange(index, "type", e.target.value)}
          >
            <option value="string">String</option>
            <option value="object">Object</option>
          </select>

          {field.type === "object" && (
            <div>
              {nestedFields.map((f, i) => (
                <div key={i}>
                  <input
                    value={f.key}
                    onChange={(e) =>
                      handleNestedChange(i, "key", e.target.value)
                    }
                  />
                  <input
                    value={f.value}
                    onChange={(e) =>
                      handleNestedChange(i, "value", e.target.value)
                    }
                  />
                  <select
                    value={f.type}
                    onChange={(e) =>
                      handleNestedChange(i, "type", e.target.value)
                    }
                  >
                    <option value="string">String</option>
                    <option value="object">Object</option>
                  </select>
                </div>
              ))}

              <button onClick={handleAddNestedField}>+</button>

              <button onClick={handleRemoveNestedField}>-</button>
            </div>
          )}
        </div>
      ))}

      <button onClick={handleAddFormField}>+</button>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicForm;
