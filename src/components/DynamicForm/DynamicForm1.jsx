import React, { Fragment, useState } from "react";

const DynamicForm1 = () => {
  //i want to create dynamic form where user can create key and value using input field first there will be a + button first clicking this buton it will ask string or object to add key and vaule input field
  //all of those will be recursively added in the form and if object then it can onctain the nested object
  // submit output can be like const obj = {key: "value", key: "value", key: {key: "value", key: {key: "value", key: "value"}}}

  const [formData, setFormData] = useState([]);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState("");
  const [showObjectOptions, setShowObjectOptions] = useState(false);
  const [selecteNestedObject, setSelecteNestedObject] = useState("");
  const [isNestedObject, setIsNestedObject] = useState(false);
  const [showCheckBox, setShowCheckBox] = useState(false);

  const selectOption = (selectedOpt) => {
    setSelectedOpt(selectedOpt);
    if (selectedOpt === "string") {
      setFormData([...formData, { key: "", value: "" }]);
    }
    if (selectedOpt === "object") {
      setShowObjectOptions(true);
    }
  };

  const onSelectedParent = (e) => {
    const selectedParent = e.target.value;
    if (selectedParent === "new") {
      setFormData([...formData, { objectName: "", key: "", value: "" }]);
    } else {
      //////////////////////////////////////////seclect existing object////////////////////
      // setFormData([
      //   ...formData,
      //   { objectName: selectedParent, key: "", value: "" },
      // ]);
      if (isNestedObject) {
        setFormData([
          ...formData,
          {
            objectName: selectedParent,
            key: "",
            value: "",
            isNestedObject: true,
            parentObject: selecteNestedObject,
          },
        ]);
      } else {
        setFormData([
          ...formData,
          { objectName: selectedParent, key: "", value: "" },
        ]);
      }
    }

    setShowObjectOptions(false);
  };

  console.log(selecteNestedObject, "selecteNestedObject");
  console.log(selectedOpt);

  return (
    <div>
      <h1>Dynamic form</h1>
      <div>
        {formData.map((data, index) => {
          return selectedOpt === "string" ? (
            <InputsForString
              key={index}
              data={data}
              index={index}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <InputsForObject
              key={index}
              isObj={selectedOpt === "object" ? true : false}
              data={data}
              index={index}
              formData={formData}
              setFormData={setFormData}
            />
          );
        })}

        <button onClick={() => setShowOptions(true)}>+</button>

        {/* show options to select string or object */}
        {showOptions && (
          <ShowOptions
            setShowOptions={setShowOptions}
            selectOption={selectOption}
          />
        )}

        {/* if object is selected then show the select option to select the parent object or create new object */}
        {showObjectOptions && (
          <ShowObjectOptions
            formData={formData}
            onSelectedParent={onSelectedParent}
            setIsNestedObject={setIsNestedObject}
            isNestedObject={isNestedObject}
            setSelecteNestedObject={setSelecteNestedObject}
            setFormData={setFormData}
            setShowObjectOptions={setShowObjectOptions}
          />
        )}

        <button
          onClick={() => {
            console.log(formData, "formData");
            const dummyObject = convertArrayToObject(formData);
            // const restructured = restructureArray(formData);
            // console.log(restructured, "restructured");
            console.log(dummyObject);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DynamicForm1;

function convertArrayToObject(array) {
  const resultObject = {};

  array.forEach((item) => {
    const trimKey = (key) => key.trim();

    if (item.parentOrder) {
      const keys = item.parentOrder.split(".").filter(Boolean).map(trimKey);
      let currentLevel = resultObject;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          // Check if the key is in the form "parent.child"
          const nestedKeys = item.objectName
            ? item.objectName.split(".").filter(Boolean).map(trimKey)
            : [];
          if (nestedKeys.length > 1) {
            currentLevel[key] = currentLevel[key] || {};
            let nestedLevel = currentLevel[key];

            nestedKeys.forEach((nestedKey, nestedIndex) => {
              nestedLevel[nestedKey] = nestedLevel[nestedKey] || {};
              console.log(nestedLevel, "item.objectName");
              if (nestedIndex === nestedKeys.length - 1) {
                if (item.isNestedObject && item.childObjectName) {
                  nestedLevel[nestedKey][item.childObjectName] =
                    nestedLevel[nestedKey][item.childObjectName] || {};
                  nestedLevel[nestedKey][item.childObjectName][item.key] =
                    item.value;
                } else {
                  nestedLevel[nestedKey][item.key] = item.value;
                }
              }

              nestedLevel = nestedLevel[nestedKey];
            });
          } else {
            currentLevel[key] = currentLevel[key] || {};
            if (currentLevel[key][item.key]) {
              // If the key already exists, merge the properties
              Object.assign(currentLevel[key][item.key], {
                [item.key]: item.value,
              });
            } else {
              currentLevel[key][item.key] = item.value;
            }
          }
        }

        currentLevel = currentLevel[key];
      });
    } else {
      if (item.objectName) {
        // Check if the key is in the form "parent.child"
        const nestedKeys = item.objectName
          .split(".")
          .filter(Boolean)
          .map(trimKey);

        if (nestedKeys.length > 1) {
          let nestedLevel = resultObject;

          nestedKeys.forEach((nestedKey, nestedIndex) => {
            nestedLevel[nestedKey] = nestedLevel[nestedKey] || {};

            if (nestedIndex === nestedKeys.length - 1) {
              if (item.isNestedObject && item.childObjectName) {
                nestedLevel[nestedKey][item.childObjectName] =
                  nestedLevel[nestedKey][item.childObjectName] || {};
                nestedLevel[nestedKey][item.childObjectName][item.key] =
                  item.value;
              } else {
                nestedLevel[nestedKey][item.key] = item.value;
              }
            }

            nestedLevel = nestedLevel[nestedKey];
          });
        } else {
          resultObject[item.objectName] = resultObject[item.objectName] || {};
          if (resultObject[item.objectName][item.key]) {
            // If the key already exists, merge the properties
            Object.assign(resultObject[item.objectName][item.key], {
              [item.key]: item.value,
            });
          } else {
            resultObject[item.objectName][item.key] = item.value;
          }
        }
      } else {
        resultObject[item.key] = item.value;
      }
    }
  });

  return resultObject;
}

const ShowOptions = ({ setShowOptions, selectOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          selectOption("string");
          setShowOptions(false);
        }}
      >
        String
      </button>
      <button
        onClick={() => {
          selectOption("object");
          setShowOptions(false);
        }}
      >
        Object
      </button>
    </div>
  );
};

const ShowObjectOptions = ({
  formData,
  onSelectedParent,
  setIsNestedObject,
  isNestedObject,
  setSelecteNestedObject,
  setFormData,
  setShowObjectOptions,
}) => {
  const uniqueObjectNames = Array.from(
    new Set(formData.map((data) => data.objectName))
  ).filter(Boolean);

  function insertParentOrder(data) {
    const newData = [...data];

    newData.forEach((item, index) => {
      if (item.isNestedObject) {
        const parentOrder = item.childObjectName
          ? `${item.objectName}.${item.childObjectName}`
          : item.objectName;

        newData[index] = { ...item, parentOrder };
      }
    });

    return newData;
  }

  const withChildObjectNames = Array.from(
    new Set(formData.map((data) => data.childObjectName))
  ).filter(Boolean);
  const withParentOrder = Array.from(
    new Set(formData.map((data) => data.parentOrder))
  ).filter(Boolean);
  return (
    <div>
      {/* is nested object then select the parent object after select the parent object then it will store state like setSelecteNestedObject("card.button.bg")  */}
      {/* then it will store the nested object in the form data */}
      {/* yes and no checkbox for isNestedObject */}

      <input
        type="checkbox"
        name="isNestedObject"
        id="isNestedObject"
        checked={isNestedObject}
        onChange={(e) => setIsNestedObject(e.target.checked)}
      />
      <label htmlFor="isNestedObject">isNested</label>

      {/* selectBox for parent object for nested object */}
      {isNestedObject ? (
        <select
          name=""
          id=""
          onChange={(e) => {
            const selectedParent = e.target.value;
            setSelecteNestedObject(e.target.value);
            // here objectName is the parent object name like card.button.bg `${selectedParent}.${nestedObjectName}`

            // Construct parent order including childObjectName if present
            const parentOrder =
              selectedParent + (selectedParent ? "." : "") + "";

            // Add the new object to formData with parentOrder
            setFormData([
              ...formData,
              {
                objectName: selectedParent,
                childObjectName: "",
                key: "",
                value: "",
                isNestedObject: true,
                parentOrder: parentOrder,
              },
            ]);

            // setFormData([
            //   ...formData,
            //   {
            //     objectName: selectedParent,
            //     childObjectName: "",
            //     key: "",
            //     value: "",
            //     isNestedObject: true,
            //     parentOrder: parentOrder,
            //   },
            // ]);

            setIsNestedObject(false);
            setShowObjectOptions(false);
          }}
        >
          <option value="" selected>
            Select Parent Object
          </option>
          {[...uniqueObjectNames, ...withChildObjectNames].map(
            (objectName, index) => (
              <Fragment key={index}>
                <option value={objectName}>{objectName}</option>
              </Fragment>
            )
          )}
        </select>
      ) : (
        <select
          name=""
          id=""
          onChange={(e) => {
            // onSelectedParent(e);
            const selectedParent = e.target.value;
            if (selectedParent === "new") {
              setFormData([
                ...formData,
                { objectName: "", key: "", value: "" },
              ]);
            } else {
              //////////////////////////////////////////seclect existing object////////////////////
              setFormData([
                ...formData,
                { objectName: selectedParent, key: "", value: "" },
              ]);
              setIsNestedObject(false);
            }
            setShowObjectOptions(false);
            // setFormData([
            //   ...formData,
            //   { objectName: e.target.value, key: "", value: "" },
            // ]);
          }}
        >
          <option value="" selected>
            Select
          </option>
          <option value="new">New Object</option>
          {[...uniqueObjectNames, ...withParentOrder].map(
            (objectName, index) => (
              <Fragment key={index}>
                <option value={objectName}>{objectName}</option>
              </Fragment>
            )
          )}
        </select>
      )}
    </div>
  );
};

//Input for string with remove button
const InputsForString = ({ data, index, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const list = [...formData];

    // Check if data[index] exists, if not, initialize it
    if (!list[index]) {
      list[index] = {};
    }

    list[index][name] = value;
    setFormData(list);
  };

  const handleRemove = (index) => {
    const list = [...formData];
    list.splice(index, 1);
    setFormData(list);
  };

  return (
    <div>
      {Object.keys(formData[index]).map(
        (item, i) =>
          item == "objectName" && (
            <input
              key={i}
              type="text"
              name="objectName"
              value={data.objectName}
              onChange={handleChange}
              placeholder="objectName"
            />
          )
      )}

      <input
        type="text"
        name="key"
        value={data.key}
        onChange={handleChange}
        placeholder="key"
      />
      <input
        type="text"
        name="value"
        value={data.value}
        onChange={handleChange}
        placeholder="value"
      />
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};

//Input for object  input filed have 3 input filed like 1 is object name and 2nd is key and 3rd is value and a remove button
const InputsForObject = ({ data, index, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const list = [...formData];

    // Check if data[index] exists, if not, initialize it
    if (!list[index]) {
      list[index] = {};
    }

    // If the objectName is changed, reset the childObjectName
    if (name === "objectName") {
      list[index]["childObjectName"] = "";
    }

    //if childObjectName is changed then set the parentOrder like card.button.bg
    if (name === "childObjectName") {
      list[index]["parentOrder"] = `${list[index]["objectName"]}.${value}`;
    }

    list[index][name] = value;
    setFormData(list);
  };

  const handleRemove = (index) => {
    const list = [...formData];
    list.splice(index, 1);
    setFormData(list);
  };
  return (
    <div>
      {Object.keys(formData[index]).map(
        (item, i) =>
          item == "objectName" && (
            <input
              key={i}
              type="text"
              name="objectName"
              value={data.objectName}
              onChange={handleChange}
              placeholder="objectName"
            />
          )
      )}

      {/* if isNestedObject true and childObjectName then show another chield obj name input field */}
      {data.isNestedObject && (
        <input
          type="text"
          name="childObjectName"
          value={data.childObjectName}
          onChange={handleChange}
          placeholder="childObjectName"
        />
      )}

      <input
        type="text"
        name="key"
        value={data.key}
        onChange={handleChange}
        placeholder="key"
      />
      <input
        type="text"
        name="value"
        value={data.value}
        onChange={handleChange}
        placeholder="value"
      />
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};
