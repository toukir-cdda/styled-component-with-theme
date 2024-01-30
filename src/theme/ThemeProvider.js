"use client";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./Global";

const ThemeProvider = ({ children }) => {
  const selectednTheme = useSelector((state) => state.themes.selectedTheme);

  return (
    <StyledThemeProvider theme={selectednTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
