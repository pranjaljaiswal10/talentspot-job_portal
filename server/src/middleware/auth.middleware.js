import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


//todo:add role restriction
const authVerify = async (req, res, next,role=[]) => {
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
    if(role.includes(req.user.role))
    next();
  } catch (error) {
    console.log(error);
    res
  }
};

export default authVerify;
