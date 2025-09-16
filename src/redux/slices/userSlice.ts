import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userAdminLocalStorage, userLocalStorage } from "@/lib/localStorage";

export interface DateRange {
  startDate: string | null;
  endDate: string | null;
}

export interface AuthUser {
  id?: number;
  name?: string;
  email?: string;
  token?: string;
  avatar?: string;
}

export interface UserState {
  user: AuthUser | null;
  diaDiem: string | null;
  dateRange: DateRange | null;
  soNguoi: number | null;
  userAdmin: AuthUser | null;
  allUsers: unknown;
  totalUsers: number | null;
}

const initialState: UserState = {
  user: userLocalStorage.get<AuthUser>(),
  diaDiem: null,
  dateRange: null,
  soNguoi: null,
  userAdmin: userAdminLocalStorage.get<AuthUser>(),
  allUsers: null,
  totalUsers: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
    },
    setDiaDiem: (state, action: PayloadAction<string | null>) => {
      state.diaDiem = action.payload;
    },
    setDateRange: (state, action: PayloadAction<DateRange | null>) => {
      state.dateRange = action.payload;
    },
    setSoNguoi: (state, action: PayloadAction<number | null>) => {
      state.soNguoi = action.payload;
    },
    setLoginAdmin: (state, action: PayloadAction<AuthUser | null>) => {
      state.userAdmin = action.payload;
    },
    getAllUsers: (state, action: PayloadAction<unknown>) => {
      state.allUsers = action.payload;
    },
    setTotalUsers: (state, action: PayloadAction<number | null>) => {
      state.totalUsers = action.payload;
    },
  },
});

export const {
  setLogin,
  setDiaDiem,
  setDateRange,
  setSoNguoi,
  setLoginAdmin,
  getAllUsers,
  setTotalUsers,
} = userSlice.actions;
export default userSlice.reducer;
