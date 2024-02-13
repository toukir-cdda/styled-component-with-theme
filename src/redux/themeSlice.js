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
  selectedTheme: {
    name: "light",
    primary: {
      header: "hsl(0, 0%, 93%)",
      background: "hsl(0, 0%, 100%)",
      footer: "hsl(0, 1%, 38%)",
      text: "hsl(0, 1%, 16%)",
      border: "hsl(0, 0%, 87%)",
    },
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
    selectedThemeTemplate: (state, action) => {
      state.selectedTheme = action.payload;
      localStorage.setItem("current-theme", JSON.stringify(action.payload));
    },
    generateThemePresets: (state, action) => {
      const themePresets = action.payload;
      console.log(themePresets, "themePresets");
    },
  },
});

export const { setThemeMode, selectedThemeTemplate } = themeSlice.actions;
export default themeSlice.reducer;
