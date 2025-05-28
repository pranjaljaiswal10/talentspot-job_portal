import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.js";
import companyReducer from "./companySlice.js";
import jobReducer from "./jobsSlice.js"
import applicationReducer from "./appliantSlice.js"


const store=configureStore({
   reducer:{
   auth:authReducer,
   company:companyReducer,
   job:jobReducer,
   application:applicationReducer
   }
})

export default store