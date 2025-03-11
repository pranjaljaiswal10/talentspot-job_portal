import mongoose from "mongoose"

const jobSchema=new mongoose.model({

},{tiemstamp:true})

export const Job=mongoose.model("Job",jobSchema) 