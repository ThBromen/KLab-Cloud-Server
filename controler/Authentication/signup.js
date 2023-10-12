import {generateToken,hashpassword} from "../../util";
import {User} from "../../Models";

export const signup = async (req,res) =>{
    try {
    const user = await User.findOne({ email: req.body.email });
    if(user){
       return res.status(409).json({
            message:"user of this email already exisite",
        });
    };
    const hashedPassword =await  hashpassword(req.body.password);
    req.body.password = hashedPassword;
    console.log("after hasshing password", req.body);

    const newUser = await User.create(req.body);
    console.log("new user", newUser);

       let token = generateToken({
        id :"newUser.id",
        email: "newUser.email",
    });

 res.status(200).json({
    message:" user registered successfully",
    access_token : token,
    user:{
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
    }
 });

} catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}