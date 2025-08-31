import sqlite3 from "sqlite3";
import models from "./models/index.js";
import {
  dbConnectionCallback,
  dbOperationCallback,
} from "./utils/dbCallbacks.js";
import { createClient } from "redis";
import { RedisStore } from "connect-redis";

const db = new sqlite3.Database("db.db", dbConnectionCallback);
models.forEach((model) => {
  db.run(model, dbOperationCallback);
});

const redisClient = createClient();
redisClient.on("error", (err) => console.error("Redis Client Error", err));
await redisClient.connect();

const redisStore = new RedisStore({
  client: redisClient,
});


export {db, redisClient, redisStore}
