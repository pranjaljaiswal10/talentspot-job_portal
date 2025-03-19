import { createSlice } from "@reduxjs/toolkit"


const jobsSlice=createSlice({
    name:"job",
    initialState:{
      allJobs:[],
        allAdminJobs:[],
        singleJob:null, 
        searchJobByText:"",
        allAppliedJobs:[],
        searchedQuery:"",
    },reducers:{
      addAllJobs:(state,action)=>{

      }
    }
})

export const {addAllJobs}=jobsSlice.actions
export default jobsSlice.reducer;