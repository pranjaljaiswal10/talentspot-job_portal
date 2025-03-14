import mongoose from "mongoose";

const jobSchema = new mongoose.model(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["FullTime", "Internship"],
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    expierenceLevel: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { tiemstamp: true },
);

export const Job = mongoose.model("Job", jobSchema);
