import { Router } from "express";
import { login, register, userInfo } from "../controllers/userController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);

router.post("/login", login);
router.post("/get-user-info-by-id",auth , userInfo)

export { router as userRoute };
