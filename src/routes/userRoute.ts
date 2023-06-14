import { Router } from "express";
import {
  accountDoctor,
  login,
  register,
  userInfo,
} from "../controllers/userController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);

router.post("/login", login);
router.post("/get-user-info-by-id", auth, userInfo);
router.post("/apply-doctor-account", auth, accountDoctor);

export { router as userRoute };
