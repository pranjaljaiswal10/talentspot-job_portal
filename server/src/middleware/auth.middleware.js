import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const authVerify = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.get("Authorization")?.replace("Bearer", "");
    if (!token) {
      res.status(401).json({ success: false, message: "Unauthorized access" });
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findById(decode.userId);
    if (!user) {
      res.status(401).json({ success: false, message: "Invalid access token" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, error: error.message });
  }
};

const verifyPermission = (role) => async (req, res, next) => {
  try {
    if (!req?.user?._id) {
      res.status(401).json({ sucess: false, message: "Unathorized access" });
    }
    if (req.user.role !== role) {
      res.status(403).json({
        success: false,
        message: "You are not allowed to perform this action",
      });
    }
    next()
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export { authVerify, verifyPermission };
