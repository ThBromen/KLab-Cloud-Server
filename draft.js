// app.put("/:id", (req, res) => {
// let requestId= parseInt(req.params.id);
// const updatedata=req.body;
// const index= database.find((item) => item.id==updatedata);

// database[index]={...database[index]==updatedata[index]};
// if(index!==-1){
// res.json({
//     message:"the index was found",
// });
// }
// else {
//     res.status(404).json({
//         error : "index not found",
//     })
// }
// });




// app.put("/:id", (req, res) => {

//      const itemId = parseInt(req.params.id);
//      const newTitle = req.body.title;

//      // Find the item with the given ID
//      const itemToUpdate = data.find((item) => item.id === itemId);

//      if (!itemToUpdate) {
//        return res.status(404).json({ message: "Item not found" });
//      }

//      // Update the item's name
//      itemToUpdate.title = newTitle;

//      res.json({ message: "Item updated successfully", item: itemToUpdate });

// });
