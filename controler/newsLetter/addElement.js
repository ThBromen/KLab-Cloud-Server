const database = require("../../util/mocDatabase.js");

function addElement(req, res) {
  console.log(req.body);
  database.push(req.body);

  res.sendStatus(201).json({
    message: "data created",
  });
};
module.exports = addElement;