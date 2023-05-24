import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    req.user = await jwt.verify(token, process.env.JWT_SECRET)
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};

export { auth };
