import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import Doctor from "../models/doctorModel";

const register = async (req: Request, res: Response) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = await new User(req.body);
    await newUser.save();
    res
      .status(200)
      .send({ message: "User create successfully!", success: true });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .send({ message: "Login successfull", success: true, data: token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error Logging", success: false, error });
  }
};
const userInfo = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    user.password = undefined
    if (!user) {
      return res
        .status(404)
        .send({ message: "User do not exist", success: false });
    }
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user info", success: false, error });
  }
};
const accountDoctor = async (req : Request, res : Response) => {
  try {
    const newdoctor = new Doctor({ ...req.body, status: "pending" });
    await newdoctor.save();
    const adminUser = await User.findOne({ isAdmin: true });

    const unseenNotifications = adminUser.unseenNotifications;
    unseenNotifications.push({
      type: "new-doctor-request",
      message: `${newdoctor.firstName} ${newdoctor.lastName} has applied for a doctor account`,
      data: {
        doctorId: newdoctor._id,
        name: newdoctor.firstName + " " + newdoctor.lastName,
      },
      onClickPath: "/admin/doctors",
    });
    await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
    res.status(200).send({
      success: true,
      message: "Doctor account applied successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
const markAllNotificationsSeen = async (req : Request, res : Response) => {
  try {
    const user = await User.findOne({_id: req.body.userId})
    const unseenNotifications = user.unseenNotifications
    const seenNotifications = user.seenNotifications
    seenNotifications.push(...unseenNotifications) 
    user.unseenNotifications = []
    user.seenNotifications = seenNotifications
    const updateUser = await user.save()
    res.status(200).send({success: true,
       message: "All notifications marked as seen",
      data: updateUser})
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
const deleteAllNotifications = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({_id: req.body.userId})
    user.unseenNotifications = []
    user.seenNotifications = []
    const updateUser = await user.save()
    updateUser.password = undefined 
    res.status(200).send({success: true,
       message: "All notifications are deleted",
      data: updateUser})
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
const getAllApprovedDoctors = async (req:Request, res: Response) => {
  try {
    const doctors = await Doctor.find({ status: "approved" });
    res.status(200).send({
      message: "Doctors fetched successfully",
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
}
export { register, login, userInfo, accountDoctor, markAllNotificationsSeen, deleteAllNotifications, getAllApprovedDoctors };
