import {createSlice} from "@reduxjs/toolkit"

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompanyByText: "",
  },
  reducers: {
    addComany: (state, action) => {},
  },
});

export const {addComany}=companySlice.actions;
export default companySlice.reducer;