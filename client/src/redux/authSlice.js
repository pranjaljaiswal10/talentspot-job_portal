import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetail: null,
    loading: false,
    token:""
  },
  reducers: {
    addUser: (state, action) => {
        
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
