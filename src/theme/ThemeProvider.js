"use client";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./Global";

const ThemeProvider = ({ children }) => {
  const selectednTheme = useSelector((state) => state.themes.selectedTheme);
  const defaultTheme = useSelector((state) => state.themes.theme.baseTheme);
  // console.log(selectednTheme, "selectednTheme");
  // console.log(defaultTheme, "defaultTheme");
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
