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
    },
    setLoading:(state,action)=>{
      state.loading=action.payload
    }
  },
});

export const { setUser,setToken,setLoading } = authSlice.actions;
export default authSlice.reducer;
