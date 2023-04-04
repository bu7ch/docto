import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import  "./config/dbConfig";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(
    `[server]: Express is listening at http://localhost:${port}`
  );
});
