import express from "express";
const newsLettelRouter = express.Router();


import { addElement, getAll,getOneElement,deleteElement,updateElement,updateOllElement } from "../controler/newsLetter";

newsLettelRouter.get("/", getAll);
newsLettelRouter.post("/", addElement);
newsLettelRouter.get("/:id", getOneElement);
newsLettelRouter.patch("/:id", updateElement );
newsLettelRouter.delete("/:id", deleteElement);
 newsLettelRouter.put("/:id", updateOllElement);

newsLettelRouter.get("/",(req, res) => {
  res.send("get request");
});
export default newsLettelRouter;