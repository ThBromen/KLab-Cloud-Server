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


validateData = (data) => {
  let message = "";
  
  if (!data.id) {
    message = " id not found";
  }
  if (!data.title) {
    message = "title  not found";
  }
  if (!data.body) {
    message = "body not found";
  }
};

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



app.put("/:id", (req, res) => {

let id=parseInt(res.params.id);
let data=req.body;
let currentData=database.filter((x)=> x.id==id)[0];
if(currentData){
let isValid= validateDate(data);
if(isValid=""){
    currentData.id=data.id;
    currentData.title=dat.title;
    currentData.body=data.body;
    res.status(200).send(database);
}
else{
     res.statusMessage = isValid;
     res.sendStatus(404);
}

}
else{
    res.statusMessage="data does not exist";
    res.sendStatus(404);
}
  res.send(database);
});




app.patch("/", (req, res) => {n
  res.send("patch request");
});

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  let currentData = database.filter((x) => x.id == id)[0];
  if (currentData) {
    database = database.filter((x) => x.id != id)[0];
    res.statusMessage = "data deleted sucessifully";
    res.sendStatus(200);
  } else {
    res.statusMessage = "data does not exist";
    res.sendStatus(400);
  }

  res.send("Delete request");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
});
