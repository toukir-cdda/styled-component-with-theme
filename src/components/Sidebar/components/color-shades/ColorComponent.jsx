import { getBrightness } from "@/utils/getColors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  changeThemeShadeColor,
  selectShadeColor,
} from "./features/colorShadeSlice";

const ColorComponent = ({ colors, parentKey }) => {
  const dispatch = useDispatch();
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleColorClick = (key) => {
    dispatch(selectShadeColor(`${parentKey}.${key}`));
    console.log(`Parent: ${parentKey}.${key}`);
  };

  const toggleExpand = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };
  const isNested = (colorValue) => {
    if (typeof colorValue !== "object") return false;
    return Object.values(colorValue).some((v) => typeof v === "object");
  };

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;
    gap: 5px;
    overflow-y: auto;
    //scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const ShadeContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // gap: 5px;
  `;

  const ShadeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f8fafc;
    border-radius: 5px;
    // background: ${(props) => props.theme.colors.background};
    background: lightgray;
    input {
      border: none;
      cursor: pointer;
      background: none;
    }
  `;

  const ShadeHeaderButtons = styled.button`
    color: ${(props) => (props.isNested ? "blue" : "black")};
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: none;
    background: none;
    padding: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
  `;

  const Shades = styled.div`
    border: 1px solid #f8fafc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: bold;
  `;

  return (
    <Wrapper>
      {Object.keys(colors).map((key) => {
        const colorValue = colors[key];
        if (typeof colorValue === "object") {
          return (
            <ShadeContainer key={key}>
              {/* shades title  */}
              <ShadeHeader>
                {!isNested(colorValue) && (
                  <input
                    type="color"
                    value={!isNested(colors[key]) && colors[key][500]}
                    onChange={
                      !isNested(colors[key])
                        ? (e) => {
                            // console.log({
                            //   parentName: `${parentKey}.${key}`,
                            //   color: e.target.value,
                            // });
                            dispatch(
                              changeThemeShadeColor({
                                parentName: `${parentKey}.${key}`,
                                color: e.target.value,
                              })
                            );
                          }
                        : null
                    }
                  />
                )}

                <ShadeHeaderButtons
                  isNested={isNested(colorValue)}
                  onClick={() => toggleExpand(key)}
                >
                  {" "}
                  {expandedKeys.includes(key) ? (
                    <>
                      <span>{key}</span> <span>➖</span>
                    </>
                  ) : (
                    <>
                      <span>{key}</span> <span>➕</span>
                    </>
                  )}
                </ShadeHeaderButtons>
              </ShadeHeader>

              {expandedKeys.includes(key) && (
                <ColorComponent
                  colors={colorValue}
                  parentKey={`${parentKey}.${key}`}
                />
              )}
            </ShadeContainer>
          );
        }

        return (
          <Shades
            key={key}
            style={{
              backgroundColor: colorValue,
              color: getBrightness(colorValue) === "dark" ? "#fff" : "#000",
            }}
            onClick={() => handleColorClick(key)}
          >
            {`${parentKey}.${key} - ${colorValue}`}
          </Shades>
        );
      })}
    </Wrapper>
  );
};

export default ColorComponent;
