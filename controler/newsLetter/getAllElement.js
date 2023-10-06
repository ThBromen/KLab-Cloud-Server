const database = require("../../util/mocDatabase.js");

function getAll(req, res)
{
  res.status(200).json(database);
}
module.exports= getAll; 