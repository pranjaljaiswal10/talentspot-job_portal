import { Router } from "express";
import { authVerify, verifyPermission } from "../middleware/auth.middleware.js";
import {
  applyJob,
  getApplicant,
  getAppliedJob,
  updateStatus,
} from "../controllers/applicant.controller.js";
import { userRoleEnums } from "../utils/constant.js";

const applicantionRouter = Router();

applicantionRouter.post(
  "/:id",
  authVerify,
  verifyPermission(userRoleEnums.CANDINDATE),
  applyJob,
);
applicantionRouter.get(
  "/",
  authVerify,
  verifyPermission(userRoleEnums.CANDINDATE),
  getAppliedJob,
);
applicantionRouter.get(
  "/job/:id",
  authVerify,
  verifyPermission(userRoleEnums.ADMIN),
  getApplicant,
);
applicantionRouter.put(
  "/:id",
  authVerify,
  verifyPermission(userRoleEnums.ADMIN),
  updateStatus,
);

export default applicantionRouter;
