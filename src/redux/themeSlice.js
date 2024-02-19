import {
  colors,
  light,
  dark,
  blue,
  brown,
  green,
  pink,
  red,
} from "@/theme/colors-presets";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  themeList: [light, dark, blue, brown, green, pink, red],
  selectedTheme: {},
  theme: {
    baseTheme: {
      themeName: "default",
      themePresets: {},
    },
    themeVarients: [],
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
    loadTheme: (state, action) => {
      const { currentTheme, baseTheme, themeVarients } = action.payload;
      state.selectedTheme = currentTheme;
      state.theme.baseTheme = baseTheme;
      state.theme.themeVarients = themeVarients;
    },
    selectedThemeTemplate: (state, action) => {
      state.selectedTheme = action.payload;
      localStorage.setItem("current-theme", JSON.stringify(action.payload));
    },
    generateThemePresets: (state, action) => {
      const theme = action.payload;

      if (theme.themeName === "default") {
        state.theme.baseTheme = theme;
        localStorage.setItem("base-theme", JSON.stringify(theme));
      } else {
        //if theme.themeName is already exists then update the theme else add new theme also update on local storage
        const themeIndex = state.theme.themeVarients.findIndex(
          (item) => item.themeName === theme.themeName
        );

        if (themeIndex > -1) {
          state.theme.themeVarients[themeIndex] = theme;
        } else {
          state.theme.themeVarients.push(theme);
        }

        localStorage.setItem(
          "theme-variants",
          JSON.stringify(state.theme.themeVarients)
        );
      }
    },
  },
});

export const {
  setThemeMode,
  selectedThemeTemplate,
  generateThemePresets,
  loadTheme,
} = themeSlice.actions;
export default themeSlice.reducer;
