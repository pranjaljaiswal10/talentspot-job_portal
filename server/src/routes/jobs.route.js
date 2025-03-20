import {Router} from "express";
import { getAdminJobs, getJobsbyId, getStudentJobs, postNewJobs } from "../controllers/jobs.controller";
import authVerify from "../middleware/auth.middleware";

const jobsRouter=Router()

jobsRouter.post("/",authVerify,postNewJobs)
jobsRouter.get("/",getAdminJobs)
jobsRouter.get("/",getStudentJobs)
jobsRouter.get("/:id",getJobsbyId)

export default jobsRouter