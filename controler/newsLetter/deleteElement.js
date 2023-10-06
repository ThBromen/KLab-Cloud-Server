const database = require("../../util/mocDatabase.js");


function  deleteElement(req, res) {
  const itemId = parseInt(req.params.id);

  const itemIndex = database.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  database.splice(itemIndex, 1);

  res.status(204).send();
  
};

module.exports = deleteElement;
 