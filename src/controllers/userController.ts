import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

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
    const user = await User.findOne({ _id: req.body.userId });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User do not exist", success: false });
    }
    res.status(200).send({
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error getting user info", success: false, error });
  }
};
export { register, login, userInfo };
