"use client";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStyles } from "./Global";
import { useEffect } from "react";
import { loadTheme } from "@/redux/themeSlice";

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const selectednTheme = useSelector((state) => state.themes.selectedTheme);
  const defaultTheme = useSelector((state) => state.themes.theme.baseTheme);

  useEffect(() => {
    const localStorageBaseTheme = JSON.parse(
      localStorage.getItem("base-theme")
    );
    const localStorageThemeVarient = JSON.parse(
      localStorage.getItem("theme-variants")
    );
    const localStorageCurrentTheme = JSON.parse(
      localStorage.getItem("current-theme")
    );
    //load all theme from local storage
    dispatch(
      loadTheme({
        currentTheme: localStorageCurrentTheme,
        baseTheme: localStorageBaseTheme,
        themeVarients: localStorageThemeVarient,
      })
    );
  }, []);
  return (
    <StyledThemeProvider
      theme={
        Object.keys(selectednTheme).length > 0 ? selectednTheme : defaultTheme
      }
    >
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
