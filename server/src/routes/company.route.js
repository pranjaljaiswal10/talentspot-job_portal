import {Router} from "express";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller";

const companyRouter=Router()

companyRouter.post("/",registerCompany)
companyRouter.get("/",getCompany)
companyRouter.put("/:id",updateCompany)
companyRouter.get("/:id",getCompanyById)


export default companyRouter