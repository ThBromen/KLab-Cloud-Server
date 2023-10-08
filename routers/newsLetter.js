const express= require("express");

const newsLettelRouter= express.Router();

const getOneElement= require("../controler/newsLetter/getElement.js");
const addElement = require("../controler/newsLetter/addElement.js");
const getAll = require("../controler/newsLetter/getAllElement.js");
const deleteElement  = require("../controler/newsLetter/deleteElement.js");
const updateElement = require("../controler/newsLetter/updateElement.js");
const updateOllElement = require("../controler/newsLetter/updateOllElement.js");

newsLettelRouter.get("/", getAll);
newsLettelRouter.post("/", addElement);
newsLettelRouter.get("/:id", getOneElement);
newsLettelRouter.patch("/:id", updateElement );
newsLettelRouter.delete("/:id", deleteElement);
 newsLettelRouter.put("/:id", updateOllElement);

newsLettelRouter.get("/",(_req, res) => {
  res.send("get request");
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Custom-Header', 'Custom-Value');
});

// newsLettelRouter.get("/:id", (req, res) => {
//   res.send(" get one element request");
// });
// newsLettelRouter.put("/:id", (req, res) => {
//   res.send(" put  request");
// });

// newsLettelRouter.post("/", (req, res) => {
//    res.send(" post request");
// });
// newsLettelRouter.delete("/", (req, res) => {
//   res.send("delete request");
// });

// newsLettelRouter.patch("/:id", (req, res) => {
//   res.send("update request");
// });
module.exports = newsLettelRouter;