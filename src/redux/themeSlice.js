import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  themeList: [
    {
      name: "light",
      colors: {
        header: "hsl(0, 0%, 93%)",
        background: "hsl(0, 0%, 100%)",
        footer: "hsl(0, 1%, 38%)",
        text: "hsl(0, 1%, 16%)",
        border: "hsl(0, 0%, 87%)",
      },
    },
    {
      name: "dark",
      colors: {
        header: "hsl(0, 0%, 20%)",
        background: "hsl(0, 1%, 16%)",
        footer: "hsl(0, 0%, 93%)",
        text: "hsl(0, 0%, 100%)",
        border: "hsl(0, 0%, 78%)",
      },
    },
    {
      name: "blue",
      colors: {
        header: "hsl(195, 53%, 79%)",
        background: "hsl(194, 100%, 97%)",
        footer: "hsl(195, 52%, 28%)",
        text: "hsl(0, 1%, 16%)",
        border: "hsl(0, 0%, 87%)",
      },
    },
    {
      name: "green",
      colors: {
        header: "hsl(150, 80%, 15%)",
        background: "hsl(150, 80%, 20%)",
        footer: "hsl(150, 80%, 80%)",
        text: "hsl(150, 80%, 80%)",
        border: "hsl(170, 100%, 60%)",
      },
    },
    {
      name: "brown",
      colors: {
        header: "hsl(39, 70%, 50%)",
        background: "hsl(37, 83%, 54%)",
        footer: "hsl(39, 50%, 20%)",
        text: "hsl(100, 0%, 20%)",
        border: "rgb(224, 189, 33)",
      },
    },
    {
      name: "pink",
      colors: {
        header: "hsl(350, 100%, 88%)",
        background: "hsl(300, 80%, 88%)",
        footer: "hsl(300, 10%, 28%)",
        text: "hsl(300, 100%, 28%)",
        border: "hsl(300, 50%, 58%)",
      },
    },
  ],
  selectedTheme: {
    name: "light",
    colors: {
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
  },
});

export const { setThemeMode, selectedThemeTemplate } = themeSlice.actions;
export default themeSlice.reducer;
