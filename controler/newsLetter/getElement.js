const database = require("../../util/mocDatabase.js");

function getOneElement(req, res)
 {
  let requestId = req.params.id;
  let data = database.find((item) => {
    return item.id == requestId;
  });

  console.log(data);

  res.status(200).json(data);
};

module.exports = getOneElement;