import { User } from "../../Models";

export const getById = async(req, res)=>{
  let requestId = req.params.id;
  let data = await User.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
};