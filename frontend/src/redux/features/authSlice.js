import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(user));
      state.userInfo = user;
    },
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.userInfo = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
