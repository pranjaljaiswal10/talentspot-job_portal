import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    allAppliedJobs: [],
    singleJob: null,
    adminJobSearchTxt: "",
    searchTxt: "",
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSingleJobs: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllApliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchTxt = action.payload;
    },
    setAdminJobSearchQuery: (state, action) => {
      state.adminJobSearchTxt = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setAdminJobs,
  setSingleJobs,
  setAllApliedJobs,
  setSearchQuery,
  setAdminJobSearchQuery,
} = jobsSlice.actions;
export default jobsSlice.reducer;
