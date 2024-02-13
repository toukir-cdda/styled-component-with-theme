import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import colorShadeSlice from "@/components/Sidebar/components/color-shades/features/colorShadeSlice";

export const store = configureStore({
  reducer: {
    themes: themeSlice,
    shades: colorShadeSlice,
  },
  devTools: true,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
  // .concat(apiSlice.middleware),
});
