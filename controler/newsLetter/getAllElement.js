const database = require("../../util/mocDatabase.js");

function getAll(req, res)
{
  res.status(200).json(database);
  console.log(`Get all Data from database`);
}
module.exports= getAll; 