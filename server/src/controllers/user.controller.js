import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!req.file) {
      res.status(404).json({ success: false, message: "file not provided" });
    }
    if (
      [fullname, email, phoneNumber, password].some(
        (item) => item?.trim() === "",
      )
    ) {
      res
        .status(400)
        .json({ success: false, message: "all field is required" });
    }
    if (phoneNumber.length !== 10) {
      res
        .status(400)
        .json({
          succcess: false,
          message: "phone number must be 10 digit character",
        });
    }
    const result = await uploadOnCloudinary(req.file.path);
    console.log(result);
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(409).json({ success: false, error: "User is already exit" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashPassword,
      role,
      profilePic: result?.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email }).select("-password -profile");
    if (!user) {
      res.status(404).json({ success: false, error: "User is doesn't exist" });
    }
    const isPasswordCorrect = user.validatePassword(password);
    if (!isPasswordCorrect) {
      res.status(401).json({ success: false, error: "Inavlid credential" });
    }
    if (!(user.role === role)) {
      res
        .status(400)
        .json({ success: false, message: "user does'nt exist with this role" });
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
  }
};

const logoutUser = async (req, res) => {
  try {
    res
      .clearCookie("token", { maxAge: 0 })
      .status(200)
      .json({ success: true, messsage: "Logout succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.mesage });
  }
};

const changePassword = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, error: "User doesn't exist" });
    }
    const isValid = await User.validatePassword(currentPassword);
    if (!isValid) {
      res.status(401).json({ success: false, message: "Invalid credential" });
    }
    user.password = newPassword;
    const savedUser = await User.save();
    res.status(200).json({
      success: true,
      mesage: "Password updated successfully",
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, phoneNumber, bio, skills } = req.body;
    const userId = req.user._id;
    const file = req.file;
    if (req.file) {
      result = uploadOnCloudinary(req.file.path);
    }
    const user = await User.findById(userId);
    if (name || email || phoneNumber || bio || skills) {
      user.fullname = name;
      user.email = email;
      user.phoneNumber = phoneNumber;
      (user.profile.bio = bio), (user.profile.skills = skills.split(","));
    }
    if (result) {
      user.profile.resume = result.secure_url;
      user.profile.resumeTitle = file.originalName;
    }
    const updatedUser = await user.save();

    res.status(201).json({
      success: true,
      message: "profile update successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { registerUser, loginUser, logoutUser, changePassword, updateProfile };
