import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";
import * as Slice from "./types";

const initialShow: Slice.Show = {
  wallet: true,
};

export const initialState: Slice.State = {
  show: initialShow,
};

export const slice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
});

// Selectors
export const selectAppShow = (state: RootState) => state.app.show;

// default
export default slice.reducer;
