const express  =require("express");
const app = express();
let bodyparcer=require("body-parser") 
let router = express.Router();
const port= 4000;
let bodyParser = require("body-parser");
app.use(bodyParser.json());
let database = [
  {
    id: 1,
    title: "Fuel price has been increased",
    body: "RURA has to take meausre!",
  },
  {
    id: 2,
    title: "APR as defeated by pylamids",
    body: "no caption",
  },
];

app.get("/", (req, res) => {
  res.json(database);
  res.send("received sucessifuly");
});

app.get("/:id", (req, res) => {
  let requestId = req.params.id;
  let data = database.find((item) => {
    return item.id == requestId;
  });

  console.log(data);

  res.json(data);
});




app.post("/", (req, res) => {
  console.log(req.body);
  database.push(req.body);

  res.sendStatus(201).json({
    message: "data created",
  });
});

app.put("/", (req, res) => {
  res.send("put request");
});

app.patch("/", (req, res) => {n
  res.send("patch request");
});

app.delete("/", (req, res) => {
  res.send("Delete request");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
});
