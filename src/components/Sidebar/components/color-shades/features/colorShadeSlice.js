import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedColor: "",
  themePresets: {
    background: "#f8fafc",
    text: "#1e293b",
    title: "#1e293b",
    subtitle: "#64748b",
    textMuted: "#64748b",
    card: {
      background: "#fff",
      text: "#1e293b",
      border: "#edf2f7",
    },
    primaryButton: {
      background: "#2563eb",
      text: "#fff",
      border: "#2563eb",
    },
    secondaryButton: {
      background: "#f3f4f6",
      text: "#64748b",
      border: "#edf2f7",
    },
    dangerButton: {
      background: "#f56565",
      text: "#fff",
      border: "#f56565",
    },
    nav: {
      background: "#fff",
      text: "#1e293b",
      border: "#edf2f7",
      navLink: {
        background: "#f8fafc",
        text: "#1e293b",
        border: "#f8fafc",
      },
    },
    menu: {
      background: "#f8fafc",
      text: "#1e293b",
      border: "#edf2f7",
    },
  },
};

const colorShadeSlice = createSlice({
  name: "shades",
  initialState,
  reducers: {
    selectShadeColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    updateThemePresets: (state, action) => {
      state.themePresets = action.payload;
    },
    changeThemeShadeColor: (state, action) => {
      const { parentName, color } = action.payload;
      // parentName:"root.background" color:"#62788d"
      //split the parentName into an array without root
      const propertyPath = parentName.split(".").slice(1); // Ignore the root

      let currentState = state.themePresets;

      // Traverse the nested structure and update the state
      propertyPath.forEach((property, index) => {
        if (index === propertyPath.length - 1) {
          // If it's the last property in the path, update the color
          currentState[property] = color;
        } else {
          // If it's not the last property, update the currentState to the nested object
          currentState = currentState[property];
        }
      });
    },
  },
});

export const { selectShadeColor, changeThemeShadeColor } =
  colorShadeSlice.actions;
export default colorShadeSlice.reducer;
