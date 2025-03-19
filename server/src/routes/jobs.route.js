import {Router} from "express";
import { getAdminJobs, getJobsbyId, getStudentJobs, postNewJobs } from "../controllers/jobs.controller";

const jobsRouter=Router()

jobsRouter.post("/",postNewJobs)
jobsRouter.get("/",getAdminJobs)
jobsRouter.get("/",getStudentJobs)
jobsRouter.get("/:id",getJobsbyId)

export default jobsRouter