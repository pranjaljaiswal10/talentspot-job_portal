import {Router} from "express";
import { getAdminJobs, getJobsbyId, getStudentJobs, postNewJobs } from "../controllers/jobs.controller.js";
import authVerify from "../middleware/auth.middleware.js";

const jobsRouter=Router()

jobsRouter.post("/company",authVerify,postNewJobs)
jobsRouter.get("/admin",authVerify,getAdminJobs)
jobsRouter.get("/company",authVerify,getStudentJobs)
jobsRouter.get("/:id",getJobsbyId)

export default jobsRouter