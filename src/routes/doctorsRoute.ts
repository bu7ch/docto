import { Router } from "express";
import { getDoctorInfoByUserId, updateDoctorProfile } from "../controllers/doctorController";
import { auth } from "../middlewares/authMiddleware";
import Doctor from "../models/doctorModel";
const router = Router();

router.post("/get-doctor-info-by-user-id", auth, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "Doctor info fetched successfully",
      data: doctor,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting doctor info", success: false, error });
  }
});
// router.post("/get-doctor-info-by-user-id", auth, getDoctorInfoByUserId);
router.post("/update-doctor-profile", auth, updateDoctorProfile);

export { router as doctorRoute }; 