import express from "express";
const newsLettelRouter = express.Router();


import { addElement, getAll,getOneElement,deleteElement,updateElement,updateOllElement } from "../controler/newsLetter";
// import { signup } from "../controler/Authentication/signup";

newsLettelRouter.get("/", getAll);
newsLettelRouter.post("/", addElement);
newsLettelRouter.get("/:id", getOneElement);
newsLettelRouter.patch("/:id", updateElement );
newsLettelRouter.delete("/:id", deleteElement);
newsLettelRouter.put("/:id", updateOllElement);



export default newsLettelRouter;