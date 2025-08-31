const PORT = process.env.PORT || 4000;
const DB_NAME = process.env.DB_NAME || ":memory:";
const SESSION_SECRET = process.env.SESSION_SECRET || "A quick brown fox";
const COOKIE_NAME = process.env.COOKIE_NAME || "Libray_App";
const SALTVAL = process.env.SALTVAL || 12;
const ENVIRONMENT = process.env.ENVIRONMENT;
export { PORT, DB_NAME, SESSION_SECRET, COOKIE_NAME, SALTVAL, ENVIRONMENT };
