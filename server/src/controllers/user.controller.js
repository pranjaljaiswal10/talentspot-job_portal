import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";

const registerUser = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if(!req.file){
      res.status(404).json({success:false,message:"file not provided"})
    }
    if (
      [fullName, email, phoneNumber, password].forEach(
        (item) => item.trim() == "",
      )
    ) {
      res
        .status(400)
        .json({ success: false, message: "all field is required" });
    }
    const res=await uploadOnCloudinary(req.file.path)
    const findUser = await User.find({ email });
    if (findUser) {
      res.status(409).json({ success: false, message: "User is already exit" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname: fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!findUser) {
      res
        .status(404)
        .json({ success: false, message: "User is doesn't exist" });
    }
    const isPasswordCorrect = User.validatePassword(password);
    if (!isPasswordCorrect) {
      res.status(401).json({ success: false, message: "Inavlid credential" });
    }
    if (!user.role === role) {
      res
        .status(400)
        .json({ success: false, message: "user does't exist for this role" });
    }
    const token = await user.getJWT();
    const option = {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, option).status(200).json({
      success: true,
      message: "User login successfully",
      data: { user, token },
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const logoutUser = async (req, res) => {
  res
    .clearCookie("token", { maxAge: 0 })
    .json({ success: true, messsage: "Logout succesfully" });
};

const changePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "User doesn't exist" });
    }
    const isValid = await User.validatePassword(currentPassword);
    if (!isValid) {
      res.status(401).json({ success: false, message: "Invalid credential" });
    }
    user.password = newPassword;
    const savedUser = await User.save();
    res.status(200).json({
      success: true,
      mesage: "Passwor updated successfully",
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, number, bio, skill } = req.body;
    if (!req.file) {
      res.status(404).json({ success: false, message: "no image is provided" });
    }
    const res = uploadOnCloudinary(req.file.path);
    const user = await User.create({
      fullname: name,
      email,
      phoneNumber: number,
      profile: {
        bio,
        skill,
        resume: res?.secure_url,
      },
    });
    res
      .status(201)
      .json({
        success: true,
        message: "profile update successfully",
        data: user,
      });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export { registerUser, loginUser, logoutUser, changePassword, updateProfile };
