import { Router } from "express";
import {authVerify, verifyPermission} from "../middleware/auth.middleware.js";
import { applyJob, getApplicant, getAppliedJob, updateStatus } from "../controllers/applicant.controller.js";
import { userRoleEnums } from "../utils/constant.js";

const applicantionRouter=Router()

applicantionRouter.post("/job/apply/:id",authVerify,applyJob)
applicantionRouter.get("/job/applied/:id",authVerify,getAppliedJob)
applicantionRouter.get("/applicant/:id",authVerify,verifyPermission(userRoleEnums.ADMIN),getApplicant)
applicantionRouter.post("/status/:id/update",authVerify,updateStatus)

export default applicantionRouter;