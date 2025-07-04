import { Router } from "express";
import {
  changePassword,
  loginUser,
  logoutUser,
  registerUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { authVerify } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", upload.single("file"), registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/password", authVerify, changePassword);
userRouter.put("/profle", authVerify, updateProfile);
userRouter.post("/logout", authVerify, logoutUser);

export default userRouter;
