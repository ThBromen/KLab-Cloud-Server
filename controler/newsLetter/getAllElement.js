import { NewsLetter } from "../../Models";

export const getAll = async (req, res) => {
  let data = await NewsLetter.find();
  console.log(data);

  res.status(200).json(data);
};