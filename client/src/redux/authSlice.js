import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
  },
  reducers: {
    addUser: (state, action) => {
        
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
