import sqlite3 from "sqlite3";
import models from "./models/index.js";
import {
  dbConnectionCallback,
  dbOperationCallback,
} from "./utils/dbCallbacks.js";

const db = new sqlite3.Database("db.db", dbConnectionCallback);

models.forEach((model) => {
  db.run(model, dbOperationCallback);
});

export default db;
