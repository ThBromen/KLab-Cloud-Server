import express from "express";
import { signup,getAll,getById,deleteUser,login,updateUser} from "../controler/Authentication";
import{logger} from "../middleware"
const authRouter = express.Router();

authRouter.get("/getUser/", getAll);
authRouter.post("/signup/", signup);
authRouter.post("/login/", login);
authRouter.get("/userbyid/:id",getById);
authRouter.delete("/deleteuser/:id",deleteUser);
authRouter.put("/updateuser/:id",updateUser)

export default authRouter;