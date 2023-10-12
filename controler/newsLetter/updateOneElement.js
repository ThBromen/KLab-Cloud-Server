// import database from "../../util/mocDatabase";
import { NewsLetter} from "../../Models";

export const updateElement= async(req, res)=>{

  try {
    const requestId = req.params.id;
    const updatedDoc = await NewsLetter.findByIdAndUpdate(requestId, req.body, { new: true, useFindAndModify: false });

    if (!updatedDoc) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.json(updatedDoc);
  } catch (err) {
    console.error('Error updating document:', err);
    res.status(500).json({ error: 'Error updating document' });
  }
};

