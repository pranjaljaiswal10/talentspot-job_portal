import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    allcompanies: [],
    searchTxt: "",
  },
  reducers: {
    setCompany: (state, action) => {
      state.allcompanies = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanySearchQuery: (state, action) => {
      state.searchTxt = action.payload;
    },
  },
});

export const { setCompany, setSingleCompany, setCompanySearchQuery } =
  companySlice.actions;
export default companySlice.reducer;
