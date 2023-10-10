import express from "express";
import bodyParser from "body-parser";


const port= 6000;
const app = express();
import {logger} from "./middleware/logger.js";
app.use(logger);
app.use(bodyParser.json());
let router = express.Router();
import newsLettelRouter from "./routers/newsLetter.js"
app.use(newsLettelRouter);
const mongoose = require('mongoose');

const  DB_CONNECTION_PROD = "mongodb+srv://Bromen:<Bromen>@cluster0.q67vif7.mongodb.net/?retryWrites=true&w=majority";

const DB_CONNECTION_DEV = "mongodb://localhost:27017/Express-server";

mongoose.connect(DB_CONNECTION_DEV).then((res) => { 
  console.log("Database connected");
});
app.listen(port, () => {

  console.log(` app listening on port ${port}`);

});

