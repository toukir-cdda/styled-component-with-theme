"use client";
import React, { useEffect, useMemo, useState } from "react";

function DataInputForm() {
  const [formData, setFormData] = useState([
    {
      name: "root",
      parentName: null,
      objectName: "",
      children: [],
    },
  ]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [parent, setParent] = useState("root");
  const [orgainzedObject, setOrgainzedObject] = useState({});
  const [selectedField, setSelectedField] = useState(null);
  const [previousSelectedValue, setPreviousSelectedValue] = useState(null);
  const [selectedObjectName, setSelectedObjectName] = useState(null);

  const handleChangeKey = (e) => {
    setKey(e.target.value);
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeParent = (e) => {
    setParent(e.target.value);
  };

  const handleAddObject = () => {
    //if key is already present in type of "object" the form data then return error in console
    const isKeyPresent = formData.find(
      (item) => item.name === key && item.type === "object"
    );
    if (isKeyPresent) {
      console.error("key is already present in type of object");
      return;
    }

    const newFormData = formData.concat({
      name: key,
      parentName: parent,
      type: "object",
      children: [],
    });
    const newData = newFormData.map((item) => {
      if (item.name === parent) {
        console.log(item, "item");
        return {
          ...item,
          children: [...item.children, key],
        };
      }
      return item;
    });
    setFormData(newData);
    // setFormData(newFormData);
    setKey("");
  };

  const handleAddArray = () => {
    const newFormData = formData.concat({
      name: key,
      parentName: null,
      type: "array",
      children: [],
      default: [],
    });
    const newData = newFormData.map((item) => {
      if (item.name === parent) {
        console.log(item, "item");
        return {
          ...item,
          children: [...item.children, key],
        };
      }
      return item;
    });
    setFormData(newData);
    // setFormData(newFormData);
    setKey("");
  };

  const handleAddString = () => {
    const newFormData = formData.concat({
      name: key,
      parentName: parent,
      type: "string",
      value: value,
    });
    const newData = newFormData.map((item) => {
      if (item.name === parent) {
        return {
          ...item,
          children: [...item.children, key],
        };
      }
      return item;
    });
    setFormData(newData);

    // setFormData(newFormData);
    setKey("");
    setValue("");
  };

  const handleResetForm = () => {
    setFormData([
      {
        name: "root",
        parentName: null,
        objectName: "",
        children: [],
      },
    ]);
  };

  const organizeDataIntoTree = (array, parent_id = "root") => {
    const parent = array.find((item) => item.name === parent_id);
    if (!parent) return null;

    const obj = {};

    parent.children.forEach((childName) => {
      const child = array.find(
        (item) => item.name === childName && item.parentName === parent.name
      );
      if (child) {
        if (child.type === "object" || child.type === "array") {
          obj[childName] = organizeDataIntoTree(array, child.name);
        } else {
          obj[childName] = child.value;
        }
      }
    });

    return obj;
  };

  const hanldeExpectedData = () => {
    const data = organizeDataIntoTree(formData);

    console.log(data, "data");
  };
  useEffect(() => {
    const organizedData = organizeDataIntoTree(formData);
    setOrgainzedObject(organizedData);
  }, [formData]);

  const handleSelectedField = (field) => {
    setSelectedField(field);
    setPreviousSelectedValue(field);
  };

  //update field
  const handleUpdateField = () => {
    const { key: newName, value, parent: newParent } = selectedField;
    const {
      key: previousKeyName,
      value: previousValue,
      parent: previousParent,
    } = previousSelectedValue;

    setFormData((prev) => {
      // Find index of target child
      const childIndex = prev.findIndex(
        (item) =>
          item.name === previousKeyName && item.parentName === previousParent
      );

      // Make copy and update target child
      const updated = [...prev];

      updated[childIndex] = {
        ...updated[childIndex],
        name: newName,
        value,
        parentName: newParent,
      };

      // If child name changed, update parent's children
      const parentIndex = prev.findIndex(
        (item) => item.name === previousParent
      );

      if (parentIndex !== -1) {
        updated[parentIndex].children = updated[parentIndex].children.map(
          (name) => (name === previousKeyName ? newName : name)
        );
      }

      return updated;
    });

    setSelectedField(null);
  };

  // remove field
  const handleRemoveField = () => {
    const { key: name, parent } = selectedField;

    setFormData((prev) => {
      // Find index of target child
      const childIndex = prev.findIndex(
        (item) => item.name === name && item.parentName === parent
      );

      // Make copy and remove target child
      const updated = [...prev];
      updated.splice(childIndex, 1);

      // If child name changed, update parent's children
      const parentIndex = prev.findIndex((item) => item.name === parent);

      if (parentIndex !== -1) {
        updated[parentIndex].children = updated[parentIndex].children.filter(
          (childName) => childName !== name
        );
      }

      return updated;
    });

    setSelectedField(null);
  };

  // remove object
  const handleRemoveObject = () => {
    // remove based on selectedObjectName
    //alse remove from parent children array

    const updated = formData.filter((item) => item.name !== selectedObjectName);
    const selectedObj = formData.find(
      (item) => item.name === selectedObjectName
    );

    const parentIndex = formData.findIndex(
      (item) => item.name === selectedObj.parentName
    );

    const parent = formData[parentIndex];
    console.log(parent, "parent");
    const updatedParent = {
      ...parent,
      children: parent.children.filter((child) => child !== selectedObjectName),
    };
    updated[parentIndex] = updatedParent;
    setFormData(updated);

    setSelectedObjectName(null);
  };

  console.log(selectedObjectName, "selectedObjectName");

  console.log(formData, "formData");

  return (
    <div style={styles.container}>
      <h2>Add Key-Value Pairs</h2>
      <div style={styles.inputContainer}>
        <label style={styles.label}>
          Key:
          <input
            type="text"
            value={key}
            onChange={handleChangeKey}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Value:
          <input
            type="text"
            value={value}
            onChange={handleChangeValue}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Parent:
          <select
            value={parent}
            onChange={handleChangeParent}
            style={styles.select}
          >
            {formData
              .filter((field) => field.type !== "string")
              .map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
        </label>
        {selectedField && <button>update</button>}
        <button onClick={handleAddObject} style={styles.button}>
          Add Object
        </button>
        {/* <button onClick={handleAddArray} style={styles.button}>
          Add Array
        </button> */}
        <button onClick={handleAddString} style={styles.button}>
          Add String
        </button>
        {selectedObjectName && (
          <button onClick={handleRemoveObject} style={styles.button}>
            Remove Object
          </button>
        )}

        <button onClick={handleResetForm} style={styles.button}>
          Reset
        </button>
      </div>

      {/* ************************************************************for update ****************************************************/}
      {selectedField && (
        <div>
          <label>
            Key:
            <input
              value={selectedField.key}
              onChange={(e) =>
                setSelectedField((prev) => ({ ...prev, key: e.target.value }))
              }
            />
          </label>
          <label>
            Value:
            <input
              value={selectedField.value}
              onChange={(e) =>
                setSelectedField((prev) => ({ ...prev, value: e.target.value }))
              }
            />
          </label>
          <label>
            Parent:
            <select
              value={selectedField.parent ? selectedField.parent : "root"}
              onChange={(e) =>
                setSelectedField((prev) => ({
                  ...prev,
                  parent: e.target.value,
                }))
              }
            >
              {formData
                .filter((field) => field.type !== "string")
                .map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </label>

          <button onClick={handleUpdateField}>Update</button>
          <button onClick={handleRemoveField}>remove</button>
        </div>
      )}
      <h2>Current Data</h2>
      <pre style={styles.data}>{JSON.stringify(formData, null, 2)}</pre>

      <button onClick={hanldeExpectedData} style={styles.button}>
        Show Expected Data
      </button>
      <NestedObjectRenderer
        data={orgainzedObject}
        key="root"
        handleSelectedField={handleSelectedField}
        setSelectedObjectName={setSelectedObjectName}
      />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  label: {
    marginRight: "10px",
  },
  input: {
    padding: "5px",
    marginRight: "10px",
  },
  select: {
    padding: "5px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  data: {
    padding: "10px",
    background: "#f4f4f4",
    borderRadius: "4px",
    whiteSpace: "pre-wrap",
    color: "#333",
    height: "100px",
    overflowY: "auto",
  },
};

export default DataInputForm;

function NestedObjectRenderer({
  data,
  title,
  handleSelectedField,
  setSelectedObjectName,
}) {
  const childObjs = [];
  const items = [];

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object") {
      childObjs.push(
        <NestedObjectRenderer
          data={value}
          title={key}
          key={key}
          handleSelectedField={handleSelectedField}
          setSelectedObjectName={setSelectedObjectName}
        />
      );
    } else {
      items.push(
        <Item
          key={key}
          title={title}
          itemKey={key}
          value={value}
          handleSelectedField={handleSelectedField}
        />
      );
    }
  });

  return (
    <div style={{ background: "gray" }}>
      <h3 onDoubleClick={() => setSelectedObjectName(title)}>{title}</h3>

      <div className="items">{items}</div>

      <div className="children">{childObjs}</div>
    </div>
  );
}

function Item({ title, itemKey, value, handleSelectedField }) {
  return (
    <div
      className="item"
      onClick={() =>
        handleSelectedField({
          key: itemKey,
          value: value,
          parent: title ? title : "root",
        })
      }
    >
      <span>{itemKey}</span> : <span>{value}</span>
    </div>
  );
}
