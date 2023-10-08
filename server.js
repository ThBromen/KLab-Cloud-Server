const express  =require("express");
const app = express();
let bodyparcer=require("body-parser") 
let router = express.Router();
const port= 6000;
let bodyParser = require("body-parser");
app.use(bodyParser.json());
const logger =require("./middleware/logger.js");
const newsLettelRouter = require("./routers/newsLetter.js");

app.use(logger);
app.use(newsLettelRouter);




app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});





