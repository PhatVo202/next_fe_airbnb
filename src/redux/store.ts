import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import roomReducer from "./slices/roomSlice";
import spinnerReducer from "./slices/spinnerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    room: roomReducer,
    spinner: spinnerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
