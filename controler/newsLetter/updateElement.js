import database from "../../util/mocDatabase";

export const updateElement=(req, res)=>{
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const itemToUpdate = database.find((item) => item.id === id);

  if (!itemToUpdate) {
    return res.status(404).json({ message: "Item not found" });
  }
  for (const key in updatedData) {
    if (Object.hasOwnProperty.call(updatedData, key)) {
      itemToUpdate[key] = updatedData[key];
    }
  }

  res.json({ message: "Item updated successfully", item: itemToUpdate });
};

