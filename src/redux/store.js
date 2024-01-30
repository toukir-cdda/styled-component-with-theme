import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    themes: themeSlice,
  },
  devTools: true,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
  // .concat(apiSlice.middleware),
});
