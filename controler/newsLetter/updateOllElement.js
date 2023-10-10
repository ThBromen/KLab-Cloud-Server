
import { NewsLetter } from "../../models";


 export const updateOllElement= async(req, res) =>{
const requestId= req.params.id;
let data = await NewsLetter.findById({ _id:requestId });
 const result = await NewsLetter.updateOne({_id})
 console.log(result); 

 }

