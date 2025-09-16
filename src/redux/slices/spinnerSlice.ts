import { createSlice } from "@reduxjs/toolkit";

export interface SpinnerState {
  isLoading: boolean;
}

const initialState: SpinnerState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state) => {
      state.isLoading = true;
    },
    setLoadingOff: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions;
export default spinnerSlice.reducer;
