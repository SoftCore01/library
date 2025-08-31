import express, { json } from "express";
import { ENVIRONMENT, PORT, SESSION_SECRET } from "./config.js";
import { redisStore } from "./connect.js";
import session from "express-session";
import renewAccessCookie from "./middlewares/renewAccessCookie.js";

const app = express();

app.use(
  json(),
  session({
    store: redisStore,
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
      maxAge: 60 * 60 * 10,
      httpOnly: true,
      secure: ENVIRONMENT == "prod" ? true : false,
      sameSite: "lax" 
    },
  })
);


app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`This application is running on port:${PORT}`);
});
