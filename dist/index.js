import express from "express";
import { PORT } from "./config.js";
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(PORT, (error) => {
    if (error)
        return console.log(error);
    console.log(`This application is running on port:${PORT}`);
});
