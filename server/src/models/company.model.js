import mongoose from "mongoose";

const companySchema = new mongoose.model({
  companyName: {
    type: String,
    required: true,
  },
  decription: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    default: "",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Company = mongoose.model("Company", companySchema);
