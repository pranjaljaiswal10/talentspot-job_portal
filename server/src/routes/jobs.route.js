import {Router} from "express";
import { getAdminJobs, getJobsbyId, getStudentJobs, postNewJobs } from "../controllers/jobs.controller.js";
import {authVerify,  verifyPermission } from "../middleware/auth.middleware.js";
import { userRoleEnums } from "../utils/constant.js";

const jobsRouter=Router()

jobsRouter.post("/",authVerify,verifyPermission(userRoleEnums.ADMIN),postNewJobs)
jobsRouter.get("/admin",authVerify,verifyPermission(userRoleEnums.ADMIN),getAdminJobs)
jobsRouter.get("/",authVerify,getStudentJobs)
jobsRouter.get("/:id",authVerify,getJobsbyId)

//jobs/company

export default jobsRouter