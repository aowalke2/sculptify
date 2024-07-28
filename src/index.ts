import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (_request: Request, response: Response) => {
  response.send("Its Lit!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
