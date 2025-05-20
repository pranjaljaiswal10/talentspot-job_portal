import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetail: null,
    loading: false,
    token:""
  },
  reducers: {
    setUser: (state, action) => {
    state.userDetail=action.payload
    },
    setToken:(state,action)=>{
      state.token=action.payload;
    }
  },
});

export const { setUser,setToken } = authSlice.actions;
export default authSlice.reducer;
