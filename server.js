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






// validateData = (data) => {
//   let message = "";
  
//   if (!data.id) {
//   }
//   if (!data.title) {
//     message = "title  not found";
//   }
//   if (!data.body) {
//     message = "body not found";
//   }
// };





// app.put("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedData = req.body; 

//   const itemToUpdate = data.find((item) => item.id === id);

//   if (!itemToUpdate) {
//     data.push({ id: itemId, ...updatedData });
//     return res.json({
//       message: "Item created successfully",
//       item: { id: itemId, ...updatedData },
//     });
//   }
  
//   Object.assign(itemToUpdate, updatedData);

//   res.json({ message: "Item updated successfully", item: itemToUpdate });
// });






