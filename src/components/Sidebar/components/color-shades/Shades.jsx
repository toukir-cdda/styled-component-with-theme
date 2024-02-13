import React, { useState } from "react";
import { getColorShades, getBrightness } from "@/utils/getColors";
import { ShadeWrapper } from "./Styled-elements";

const Shades = () => {
  const defaultColors = {
    background: "#f8fafc",
    text: "#1e293b",
    title: "#1e293b",
    subtitle: "#64748b",
    textMuted: "#64748b",
    card: {
      background: "#fff",
      text: "#1e293b",
      border: "#edf2f7",
    },
    primaryButton: {
      background: "#2563eb",
      text: "#fff",
      border: "#2563eb",
    },
    secondaryButton: {
      background: "#f3f4f6",
      text: "#64748b",
      border: "#edf2f7",
    },
    dangerButton: {
      background: "#f56565",
      text: "#fff",
      border: "#f56565",
    },
    nav: {
      background: "#fff",
      text: "#1e293b",
      border: "#edf2f7",
      navLink: {
        background: "#f8fafc",
        text: "#1e293b",
        border: "#f8fafc",
      },
    },
  };
  const colors = getColorShades(defaultColors);

  const [toggledShades, setToggledShades] = useState({});

  const handleShadeToggle = (colorKey, shadeKey) => {
    setToggledShades((prevToggledShades) => {
      const isShadeToggled = prevToggledShades[colorKey]?.[shadeKey];
      return {
        ...prevToggledShades,
        [colorKey]: {
          ...prevToggledShades[colorKey],
          [shadeKey]: !isShadeToggled,
        },
      };
    });
  };

  const renderShades = (colorObject, colorKey) => {
    return (
      <div key={colorKey}>
        <div>
          <input type="color" value={colorObject.value} readOnly />
        </div>
        <div>
          {Object.keys(colorObject.shades).map((shadeKey) => {
            const shadeValue = colorObject.shades[shadeKey];

            if (typeof shadeValue === "object") {
              return renderNestedColors(
                {
                  [shadeKey]: shadeValue,
                },
                `${colorKey}.${shadeKey}`
              );
            } else {
              const isShadeToggled = toggledShades[colorKey]?.[shadeKey];

              return (
                <button
                  key={shadeKey}
                  style={{
                    backgroundColor: shadeValue,
                    color:
                      getBrightness(shadeValue) === "dark" ? "#fff" : "#000",
                  }}
                  onClick={() => handleShadeToggle(colorKey, shadeKey)}
                >
                  <p>{shadeKey}</p>
                  <p>{shadeValue}</p>
                  {isShadeToggled && <p>Shade is toggled!</p>}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  };

  const renderColorShades = (colorObject, colorKey) => {
    const isColorToggled = toggledShades[colorKey];

    return (
      <div>
        <button
          style={{
            backgroundColor: colorObject.value,
            color:
              getBrightness(colorObject.value) === "dark" ? "#fff" : "#000",
          }}
          onClick={() => handleShadeToggle(colorKey, "main")}
        >
          <p>{colorKey}</p>
          <p>{colorObject.value}</p>
          {isColorToggled && <p>Color is toggled!</p>}
        </button>
      </div>
    );
  };

  const renderNestedColors = (nestedColors, colorKey) => {
    return Object.keys(nestedColors).map((key) => {
      const value = nestedColors[key];
      if (typeof value === "object") {
        return renderColorShades(
          {
            key,
            value: value["500"],
            shades: value,
          },
          `${colorKey}.${key}`
        );
      } else {
        return renderShades(
          {
            key,
            value,
            shades: {},
          },
          `${colorKey}.${key}`
        );
      }
    });
  };

  return <div>{renderNestedColors(colors, "colors")}</div>;
};

export default Shades;
