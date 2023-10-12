import { generateToken,comparePassword } from "../../util";
import {User} from "../../Models";


export const logIn =  async (req, res) => {
  try{

  const user = await User.findOne({ email: req.body.email });
  if(!user){
    res.status(404).json({
      message:"user not found",
    });
  }
 let isPasswordCorrect = await  comparePassword(
  req.body.password,
   user.password,
   );

if (!isPasswordCorrect){
  res.status(401).json({
    message: "wrong password",
  });
}
console.log("password is true");

let token = generateToken({
  _id : user._id,
  email : user.email, 
});

    res.status(200).json({
      message: "User loged in successfully",
      access_token: token,
      user:{
        email: user.email,
        location: user.location,
        fullNames: user.fullnames,
      },
    });
  }catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
  } 