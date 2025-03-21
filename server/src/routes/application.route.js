import { Router } from "express";
import authVerify from "../middleware/auth.middleware.js";
import { applyJob, getApplicant, getAppliedJob, updateStatus } from "../controllers/applicant.controller.js";

const applicantionRouter=Router()

applicantionRouter.get("/job/applied/:id",authVerify,getAppliedJob)
applicantionRouter.get("/applicant/:id",authVerify,getApplicant)
applicantionRouter.post("/job/apply/:id",authVerify,applyJob)
applicantionRouter.post("/status/:id/update",authVerify,updateStatus)

export default applicantionRouter;