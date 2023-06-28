import { Router } from "express";
import {
  accountDoctor,
  deleteAllNotifications,
  getAllApprovedDoctors,
  login,
  markAllNotificationsSeen,
  register,
  userInfo,
} from "../controllers/userController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);

router.post("/login", login);
router.post("/get-user-info-by-id", auth, userInfo);
router.post("/apply-doctor-account", auth, accountDoctor);
router.post("/mark-all-notifications-seen", auth, markAllNotificationsSeen);
router.post("/delete-all-notifications", auth, deleteAllNotifications);
router.get("/get-all-approved-doctors", auth, getAllApprovedDoctors)

export { router as userRoute };
