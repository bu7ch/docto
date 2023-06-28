import { Router } from "express";
import { getDoctorInfoByUserId, updateDoctorProfile } from "../controllers/doctorController";
import { auth } from "../middlewares/authMiddleware";
const router = Router();


router.post("/get-doctor-info-by-user-id", auth, getDoctorInfoByUserId);
router.post("/update-doctor-profile", auth, updateDoctorProfile);

export { router as doctorRoute }; 