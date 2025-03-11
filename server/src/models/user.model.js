import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 15,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      default: "student",
      required:true
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profile: {
      bio: String,
      skill: String,
      resume: String,
      resumeOrigninalName: String,
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      }
    },
      profilePhoto: {
        type: String,
      },
    },
  { timestamps: true },
);

userSchema.methods.getJWT = function () {
  const user = this;
  const token = jwt.sign({ userid: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

userSchema.methods.validatePassword = async function (passwordByUser) {
  const user = this;
  const isValid = await bcrypt.compare(passwordByUser, user.password);
  return isValid;
};

export const User = mongoose.model("User", userSchema);
