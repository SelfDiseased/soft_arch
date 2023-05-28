import express, { Request, Response } from "express";
import { Client } from "../client";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello there!");
});

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const client = new Client();

client.connectToServer().then();

export { app, server };
