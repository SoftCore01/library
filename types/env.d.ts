declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_NAME: string;
    SESSION_SECRET: string;
    COOKIE_NAME: string;
    SALTVAL: string;
  }
}
