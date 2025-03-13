import {Router} from "express"
import { changePassword, loginUser, registerUser, updateProfile } from "../controllers/user.controller"
import { upload } from "../middleware/multer.middleware"

const userRouter=Router()

userRouter.post("/register",upload.single()  ,registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/user/password",changePassword)
userRouter.post("/profle/update",updateProfile)


export default userRouter;