import {Router} from "express"
import { changePassword, loginUser, registerUser, updateProfile } from "../controllers/user.controller"
import { upload } from "../middleware/multer.middleware"
import authVerify from "../middleware/auth.middleware"

const userRouter=Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/user/password",changePassword)
userRouter.post("/profle/update",authVerify,updateProfile)


export default userRouter;