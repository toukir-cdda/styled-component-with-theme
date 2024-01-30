import { selectedThemeTemplate } from "@/redux/themeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Toolbar = () => {
  const dispatch = useDispatch();
  const themeList = useSelector((state) => state.themes.themeList);
  const selectednTheme = useSelector((state) => state.themes.selectedTheme);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    //check if current theme in local storage
    if (currentTheme) {
      dispatch(selectedThemeTemplate(currentTheme));
    } else {
      //if not, set default theme
      dispatch(selectedThemeTemplate(light));
    }
  }, []);

  const ThemeButton = styled.button`
    margin: 0 5px;
    padding: 10px;
    font-size: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  
    &:hover {
      box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
  `;
  const Container = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  `;

  return (
    <Container>
      <span>Themes: </span>
      {themeList.map((theme, idx) => (
        <ThemeButton
          key={idx}
          className={`${theme.name} ${
            selectednTheme === theme ? "active" : ""
          }`}
          onClick={() => dispatch(selectedThemeTemplate(theme))}
        ></ThemeButton>
      ))}
    </Container>
  );
};

export default Toolbar;
