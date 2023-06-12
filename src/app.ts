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
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/users", userRoute);
app.listen(port, () => {
  return console.log(
    `[server]: Express is listening at http://localhost:${port}`
  );
});
