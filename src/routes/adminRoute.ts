import { Router } from "express";
import { auth } from "../middlewares/authMiddleware";

import {
  changeDoctorAccountStatus,
  getAllDoctors,
  getAllUsers,
} from "../controllers/adminController";

const router = Router();

router.get("/get-all-doctors", auth, getAllDoctors);
router.get("/get-all-users", auth, getAllUsers);
router.post("/change-doctor-account-status", auth, changeDoctorAccountStatus);
export { router as adminRoute };
