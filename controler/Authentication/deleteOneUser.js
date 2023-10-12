import mongoose from "mongoose";

import { User } from "../../Models";

export const deleteUser= async(req, res)=> {
  const requestId = req.params.id;
  let data = await User.findById({ _id:requestId });
  console.log(data);
  const result = await User.deleteMany(data);
  res.send(result);
} 