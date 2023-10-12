import express from "express";
import { signup,getAll,logIn} from "../controler/Authentication";
import{logger} from "../middleware"
const authRouter = express.Router();

authRouter.get("/getUser/", getAll);
authRouter.post("/signup/", signup);
authRouter.post("/login/", logIn);

export default authRouter;