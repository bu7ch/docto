import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";


const register = async (req: Request, res: Response) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = await new User(req.body);
    await newUser.save();
    res.status(200).send({message:"User create successfully!", success: true});
  } catch (error) {
    console.error(error);
  }
};

 const login = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
console.error(error);  }
}
export { register, login };
