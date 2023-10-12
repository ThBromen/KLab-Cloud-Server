import mongoose from "mongoose";

import { NewsLetter } from "../../Models";

export const deleteElement= async(req, res)=> {
  const requestId = req.params.id;
  let data = await NewsLetter.findById({ _id:requestId });
  console.log(data);
  const result = await NewsLetter.deleteMany(data);
  res.send(result);
} 