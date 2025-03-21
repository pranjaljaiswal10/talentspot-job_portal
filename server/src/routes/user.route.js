import {Router} from "express"
import { changePassword, loginUser, registerUser, updateProfile } from "../controllers/user.controller.js"
import { upload } from "../middleware/multer.middleware.js"
import authVerify from "../middleware/auth.middleware.js"

const userRouter=Router()

userRouter.post("/register",upload.single('profilePic'),registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/user/password",authVerify,changePassword)
userRouter.post("/profle/update",authVerify,updateProfile)


export default userRouter;