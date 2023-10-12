import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const port= 6000;
const app = express();
import {logger} from "./middleware/logger.js";
app.use(logger);
app.use(bodyParser.json());
let router = express.Router();
import newsLettelRouter from "./routers/newsLetter.js";
import authRouter from "./routers/authenticaion";

app.use(newsLettelRouter);
import mongoose from "mongoose";

app.use("/api/v1", authRouter);

mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) => {
  console.log("Database connected");
});

app.listen(port, () => {

  console.log(` app listening on port ${port}`);

});

