import { NewsLetter } from "../../models";

export const addElement = async (req, res) => {
  await NewsLetter.create(req.body);
  console.log(res.body);
  res.status(201).json({
    message: "Newsletter created",
  });
};