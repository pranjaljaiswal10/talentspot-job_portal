import { createSlice } from "@reduxjs/toolkit";

const applicantSlice = createSlice({
  name: "applicant",
  initialState: {
    allAplicant: [],
  },
  reducers: {
    setApplicant: (state, action) => {
      state.allAplicant = action.payload;
    },
  },
});

export const { setApplicant } = applicantSlice.actions;
export default applicantSlice.reducer;
