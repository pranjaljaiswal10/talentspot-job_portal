import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      enum: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Remote"],
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    expierence: {
      type: String,
      enums: ["Junior", "Mid", "Senior", "Intern"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
    created_By: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Job = mongoose.model("Job", jobSchema);
