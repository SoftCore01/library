import express from "express";
import { PORT } from "./config.js";
import "./connect.js"
const app = express();

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`This application is running on port:${PORT}`);
});
