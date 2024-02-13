import React, { useState } from "react";

const Dynamic2 = ({ data, onChange }) => {
  const [formData, setFormData] = useState({
    key: "",
    value: "",
    parent: data ? data.name : null,
    child: "",
    parentOrder: data ? data.parentOrder : "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddChild = () => {
    const newChild = {
      name: formData.child,
      root: [{ key: "", value: "" }],
      parent: formData.key,
      parentOrder: `${formData.parentOrder}.${formData.key}`,
      children: [],
    };

    onChange(newChild);
    setFormData({
      key: "",
      value: "",
      parent: data ? data.name : null,
      child: "",
      parentOrder: data ? data.parentOrder : "",
    });
  };

  // Dynamically generate options for parent and child select boxes
  const parentOptions = [null, ...data.children.map((child) => child.name)];
  const childOptions = data ? data.children.map((child) => child.name) : [];

  console.log(formData);
  return (
    <div>
      <label>
        Key:
        <input
          type="text"
          name="key"
          value={formData.key}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Value:
        <input
          type="text"
          name="value"
          value={formData.value}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Parent:
        <select
          name="parent"
          value={formData.parent}
          onChange={handleInputChange}
        >
          {parentOptions.map((option) => (
            <option key={option} value={option}>
              {option || "None"}
            </option>
          ))}
        </select>
      </label>
      <label>
        Child:
        <select
          name="child"
          value={formData.child}
          onChange={handleInputChange}
        >
          {childOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Parent Order:
        <input
          type="text"
          name="parentOrder"
          value={formData.parentOrder}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleAddChild}>Add Child</button>
      {data &&
        data.children.map((child) => (
          <Dynamic2 key={child.name} data={child} onChange={onChange} />
        ))}
    </div>
  );
};

export default Dynamic2;
