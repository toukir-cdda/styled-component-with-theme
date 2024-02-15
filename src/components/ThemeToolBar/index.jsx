import useContextMenu from "@/hooks/useContextMenu";
import React, { useState } from "react";
import {
  ContextMenu,
  DefaultThemeContainer,
  DefaultThemeHeader,
  ThemeToolBarWrapper,
  ThemeVarients,
} from "./Styled-elements";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import GeneratePreset from "@/app/generate-presets/GeneratePreset";
import { selectedThemeTemplate } from "@/redux/themeSlice";

const ThemeToolBar = () => {
  const dispatch = useDispatch();
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [visible, setVisible] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState({});
  const [makeThemeVarient, setMakeThemeVarient] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState({});
  const [editTheme, setEditTheme] = useState(false);

  // Get the default theme from the redux store
  const defaultBaseTheme = useSelector(
    (state) => state.themes?.theme?.baseTheme
  );
  // Get the theme varients from the redux store
  const themeVarients = useSelector(
    (state) => state.themes?.theme?.themeVarients
  );

  // Handle the default theme
  const handleDefaultTheme = () => {
    if (
      defaultBaseTheme?.themeName === "default" &&
      Object.keys(defaultBaseTheme.themePresets).length === 0
    ) {
      setVisible(true);
      setDefaultTheme(defaultBaseTheme);
    } else {
      // alert("Default theme already exists please edit the existing theme.");
      dispatch(selectedThemeTemplate(defaultBaseTheme));
    }
  };

  // Handle the make varient theme
  const handleMakeVarient = () => {
    setDefaultTheme(defaultBaseTheme);
    setMakeThemeVarient(true);
    setVisible(true);
  };

  // Handle the edit theme
  const handleEdit = (themeName) => {
    setDefaultTheme(themeName);
    setVisible(true);

    if (themeName.themeName === "default") {
      setMakeThemeVarient(false);
      setEditTheme(false);
    } else {
      setMakeThemeVarient(true);
      setEditTheme(true);
    }
    console.log(themeName);
  };

  return (
    <ThemeToolBarWrapper>
      <h1>Themes</h1>

      {/* generate theme presets modal  */}
      <Modal setVisible={setVisible} visible={visible}>
        <GeneratePreset
          defaultPreset={defaultTheme}
          newVarient={makeThemeVarient}
          editTheme={editTheme}
          setVisible={setVisible}
        />
      </Modal>

      <DefaultThemeContainer>
        <DefaultThemeHeader>
          <p>Base</p>
          <span onClick={() => handleMakeVarient()}>Make Varient</span>
        </DefaultThemeHeader>
        <button
          onContextMenu={(e) => {
            e.preventDefault();
            setClicked(true);
            setPoints({
              x: e.pageX,
              y: e.pageY - 26,
            });
            setSelectedTheme(defaultBaseTheme);
          }}
          onClick={handleDefaultTheme}
        >
          Default
        </button>
      </DefaultThemeContainer>

      <ThemeVarients>
        <p>Varients</p>
        <div>
          {themeVarients?.map((theme, index) => {
            return (
              <button
                key={index}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setClicked(true);
                  setPoints({
                    x: e.pageX,
                    y: e.pageY - 26,
                  });
                  setSelectedTheme(theme);
                }}
                onClick={() => dispatch(selectedThemeTemplate(theme))}
                // onClick={() => {
                //   setDefaultTheme(theme);
                //   setVisible(true);
                //   setMakeThemeVarient(false);
                // }}
              >
                {theme.themeName}
              </button>
            );
          })}
          {/* <button
            onContextMenu={(e) => {
              e.preventDefault();
              setClicked(true);
              setPoints({
                x: e.pageX,
                y: e.pageY - 26,
              });
            }}
          >
            Dark
          </button>
          <button
            onContextMenu={(e) => {
              e.preventDefault();
              setClicked(true);
              setPoints({
                x: e.pageX,
                y: e.pageY - 26,
              });
            }}
          >
            Light
          </button> */}
        </div>
      </ThemeVarients>

      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li onClick={() => handleEdit(selectedTheme)}>Edit</li>
            <li>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </ThemeToolBarWrapper>
  );
};

export default ThemeToolBar;
