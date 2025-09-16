import { createSlice } from "@reduxjs/toolkit";

export interface RoomState {
  reload: number;
}

const initialState: RoomState = {
  reload: 0,
};

const roomSlice = createSlice({
  name: "roomSlice",
  initialState,
  reducers: {
    reloadData: (state) => {
      state.reload += 1;
    },
  },
});

export const { reloadData } = roomSlice.actions;
export default roomSlice.reducer;
