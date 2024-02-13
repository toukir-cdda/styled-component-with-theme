import React, { useState } from "react";

const TestColors = ({ colors, parentKey, isOpen, onToggle }) => {
  const [childColorsOpen, setChildColorsOpen] = useState({});

  const handleColorClick = (key) => {
    console.log(`Parent: ${parentKey}.${key} - ${colors[key]}`);
  };

  const handleToggle = () => {
    onToggle(parentKey);
  };

  const handleChildToggle = (key) => {
    setChildColorsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div>
      <p onClick={handleToggle} style={{ cursor: "pointer" }}>
        {parentKey} {isOpen ? "-" : "+"}
      </p>
      {isOpen &&
        Object.keys(colors).map((key) => {
          const colorValue = colors[key];

          if (typeof colorValue === "object") {
            return (
              <div key={key}>
                <p
                  onClick={() => handleChildToggle(key)}
                  style={{ cursor: "pointer" }}
                >
                  {`${parentKey}.${key}`} {childColorsOpen[key] ? "-" : "+"}
                </p>
                {childColorsOpen[key] && (
                  <TestColors
                    colors={colorValue}
                    parentKey={`${parentKey}.${key}`}
                    isOpen={false}
                    onToggle={onToggle}
                  />
                )}
              </div>
            );
          }

          return (
            <div
              key={key}
              style={{
                backgroundColor: colorValue,
                padding: "10px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleColorClick(key)}
            >
              {`${parentKey}.${key} - ${colorValue}`}
            </div>
          );
        })}
    </div>
  );
};

export default TestColors;
