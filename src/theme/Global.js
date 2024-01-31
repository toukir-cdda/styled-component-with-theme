import { createGlobalStyle } from "styled-components";
import * as themePresets from "./colors-presets";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color:${({ theme }) => theme.primary.background} ;
  color: ${({ theme }) => theme.primary.text};
  font-family: monospace;
  overflow-x: hidden;
}

// theme buttons color
.light {
  background-color: ${themePresets.light.primary.header};
}
.dark {
  background-color: ${themePresets.dark.primary.header};
}
.blue {
  background-color: ${themePresets.blue.primary.header};
}
.green {
  background-color: ${themePresets.green.primary.header};
}
.brown {
  background-color: ${themePresets.brown.primary.header};
}
.pink {
  background-color: ${themePresets.pink.primary.header};
}

// active theme
.active{
    border: 3px solid ${({ theme }) => theme.primary.border};
}
`;
