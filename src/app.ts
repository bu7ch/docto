import express, { Express, Request, Response } from "express";
declare global {
  namespace Express {
      interface Request {
          user? : Record<string, any>
      }
  }
}
import dotenv from "dotenv";
import  "./config/dbConfig";
import { userRoute } from "./routes/userRoute";
import { adminRoute } from "./routes/adminRoute";
import { doctorRoute } from "./routes/doctorRoute";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctors", doctorRoute);
app.listen(port, () => {
  return console.log(
    `[server]: Express is listening at http://localhost:${port}`
  );
});
