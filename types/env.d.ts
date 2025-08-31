declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_NAME: string;
    SESSION_SECRET: string;
    COOKIE_NAME: string;
    SALTVAL: string;
    ENVIRONMENT: string;
  }
}

import "express-session";
import { User } from "./userType.ts";

declare module "express-session" {
  interface SessionData {
    user?: User
  }
}