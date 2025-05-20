import {Router} from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import authVerify from "../middleware/auth.middleware.js";

const companyRouter=Router()

companyRouter.post("/new",authVerify,registerCompany)
companyRouter.get("/",getCompany)
companyRouter.put("/:id",authVerify,updateCompany)
companyRouter.get("/:id",authVerify,getCompanyById)


export default companyRouter