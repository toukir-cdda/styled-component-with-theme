"use client";
import React, { useEffect, useMemo, useState } from "react";
import InputForm from "./components/InputForm";
import UpdatePreset from "./components/UpdatePreset";
import {
  ArrayPreview,
  PreHeader,
  PresetContainer,
  PreviewContainer,
} from "./Styled-element";
import NestedObjectRenderer from "./components/NestedObjectRenderer";

function GeneratePreset() {
  const [formData, setFormData] = useState([
    {
      name: "root",
      parentName: null,
      objectName: "",
      children: [],
    },
  ]);
  const [themeName, setThemeName] = useState("");

  const [orgainzedObject, setOrgainzedObject] = useState({});
  const [selectedField, setSelectedField] = useState(null);
  const [previousSelectedValue, setPreviousSelectedValue] = useState(null);
  const [selectedObjectName, setSelectedObjectName] = useState(null);

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
    const presets = organizeDataIntoTree(formData);

    if (themeName === "" || Object.keys(presets).length === 0) {
      alert("Please enter theme name and presets");
    } else {
      const expectedData = {
        themeName: themeName,
        themePresets: presets,
      };
      console.log(expectedData, "presets");
    }
  };

  useEffect(() => {
    const organizedData = organizeDataIntoTree(formData);
    setOrgainzedObject(organizedData);
  }, [formData]);

  const handleSelectedField = (field) => {
    setSelectedField(field);
    setPreviousSelectedValue(field);
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

  return (
    <PresetContainer>
      <PreHeader>Build Your Theme Presets</PreHeader>

      <div>
        <h2>Theme Name</h2>
        <input
          type="text"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        />
      </div>
      {/* ************************************************************Create Presets ****************************************************/}
      <InputForm
        selectedObjectName={selectedObjectName}
        formData={formData}
        setFormData={setFormData}
        handleRemoveObject={handleRemoveObject}
      />

      {/* ************************************************************for update ****************************************************/}
      {selectedField && (
        <div style={{ padding: "20px 0px", position: "relative" }}>
          <UpdatePreset
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            formData={formData}
            setFormData={setFormData}
            previousSelectedValue={previousSelectedValue}
          />
          <button
            style={{
              position: "absolute",
              top: "0",
              right: "-5px",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              height: "20px",
              width: "20px",
              borderRadius: "100%",
              border: "1px solid white",
            }}
            onClick={() => setSelectedField(null)}
          >
            X
          </button>
        </div>
      )}
      <h2>Current Data</h2>

      <button onClick={hanldeExpectedData}>Show Expected Data</button>

      {/* PreviewContainer  */}
      <PreviewContainer>
        <ArrayPreview>{JSON.stringify(formData, null, 2)}</ArrayPreview>
        {/* render nested object */}
        <NestedObjectRenderer
          data={orgainzedObject}
          key="root"
          handleSelectedField={handleSelectedField}
          setSelectedObjectName={setSelectedObjectName}
        />
      </PreviewContainer>
    </PresetContainer>
  );
}

export default GeneratePreset;
