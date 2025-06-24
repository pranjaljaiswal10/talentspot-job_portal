import { Router } from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { authVerify, verifyPermission } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { userRoleEnums } from "../utils/constant.js";

const companyRouter = Router();

companyRouter.post(
  "/register",
  authVerify,
  verifyPermission(userRoleEnums.ADMIN),
  registerCompany,
);
companyRouter.get("/", authVerify, getCompany);
companyRouter.put(
  "/:id",
  authVerify,
  upload.single("logo"),
  verifyPermission(userRoleEnums.ADMIN),
  updateCompany,
);
companyRouter.get("/:id", authVerify, getCompanyById);

export default companyRouter;
