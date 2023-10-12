import { NewsLetter } from "../../Models";

export const getOneElement= async(req, res)=>{
  let requestId = req.params.id;
  let data = await NewsLetter.findById({ _id:requestId });
  console.log(data);
  res.status(200).json(data);
};