import {Router} from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import authVerify from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const companyRouter=Router()

companyRouter.post("/register",authVerify,registerCompany)
companyRouter.get("/",getCompany)
companyRouter.put("/:id",authVerify,updateCompany)
companyRouter.get("/:id",authVerify,upload.single("logo"),getCompanyById)


export default companyRouter