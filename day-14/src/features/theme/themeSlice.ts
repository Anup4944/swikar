import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTheme = "light" | "dark";

const initialState: { theme: TTheme } = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
