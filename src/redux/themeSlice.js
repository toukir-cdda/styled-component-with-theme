import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
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
    //initialize theme from local storage
    loadTheme: (state, action) => {
      const { currentTheme, baseTheme, themeVarients } = action.payload;
      state.selectedTheme = currentTheme;
      state.theme.baseTheme = baseTheme;
      state.theme.themeVarients = themeVarients;
    },
    //set selected theme
    selectedThemeTemplate: (state, action) => {
      state.selectedTheme = action.payload;
      localStorage.setItem("current-theme", JSON.stringify(action.payload));
    },
    //generate theme presets
    generateThemePresets: (state, action) => {
      const theme = action.payload;
      //if theme.themeName is default then update the base theme else add new theme also update on local storage
      if (theme.themeName === "default") {
        //default theme
        state.theme.baseTheme = theme;
        localStorage.setItem("base-theme", JSON.stringify(theme));
      } else {
        //other theme varients
        const themeIndex = state.theme?.themeVarients?.findIndex(
          (item) => item.themeName === theme.themeName
        );

        if (themeIndex > -1) {
          state.theme.themeVarients[themeIndex] = theme;
        } else {
          state.theme.themeVarients.push(theme);
        }

        //varient update on local storage
        localStorage.setItem(
          "theme-variants",
          JSON.stringify(state.theme.themeVarients)
        );
      }
    },
    //delete theme varient
    deleteVarient: (state, action) => {
      const themeName = action.payload;
      const themeIndex = state.theme?.themeVarients?.findIndex(
        (item) => item.themeName === themeName
      );
      state.theme.themeVarients.splice(themeIndex, 1);
      localStorage.setItem(
        "theme-variants",
        JSON.stringify(state.theme.themeVarients)
      );
    },
  },
});

export const {
  setThemeMode,
  selectedThemeTemplate,
  generateThemePresets,
  loadTheme,
  deleteVarient,
} = themeSlice.actions;
export default themeSlice.reducer;
