import { userModel } from "../../../DB/models/user.model.js";
import { noteModel } from "../../../DB/models/note.model.js";

// ## 1- CREATE note  (user must be logged in and confirmed)(Aplly Joi validation)
export const addNote = async (req, res) => {
  try {
    let { title, content } = req.body;
    const user = await userModel.findById({ _id: req.currentUserID });
    if (user) {
      const addedNote = await noteModel.insertMany({
        title,
        content,
        createdBy: req.currentUserID,
      });
      res.json({ message: "Added Successfully", addedNote });
    } else {
      res.json({ message: "User Not Found" });
    }
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

// ## 2- UPDATE note  (user must be logged in and confirmed)(Aplly Joi validation)
export const updateNote = async (req, res) => {
  let { id } = req.params;
  let { title, content } = req.body;
  const note = await noteModel.findById(id);
  console.log(note);
  if (note) {
    if (note.createdBy.toString() == req.currentUserID.toString()) {
      const updatedNote = await noteModel.findByIdAndUpdate(id, {
        title,
        content,
      });
      console.log(title);
      res.json({ message: "Note is Updated Successfully", updatedNote });
    } else {
      res.json({ message: "you are not allowed to update this note" });
    }
  }
};

// ## 3- DELETE note  (user must be logged in and confirmed)(Aplly Joi validation)
export const deleteNote = async (req, res) => {
  let { id } = req.params;
  const note = await noteModel.findById(id);
  console.log(note);
  if (note) {
    if (note.createdBy.toString() == req.currentUserID.toString()) {
      const deletedNote = await noteModel.deleteOne({ id });
      res.json({ message: "Note is deleted Successfully", deletedNote });
    } else {
      res.json({ message: "you are not allowed to delete this note" });
    }
  }
};

// ## 4- get all notes(user must be logged in)(user must be logged in and confirmed)
export const getAllNotes = async (req, res) => {
  const notes = await noteModel.find({ createdBy: req.currentUserID });
  res.json({ message: "Done", notes });
};



// ## 5- get specific note by id (user must be logged in and confirmed)(Aplly Joi validation)
export const getNoteById = async (req, res) => {
  let { id } = req.params;
  const note = await noteModel.findById(id);
  if (note) {
    res.json({ message: "note found",note });
  } else {
    res.json({ message: "note not found" });
  }
};


// ## 6- search about note by (title or content) (user must be logged in and confirmed)(Aplly Joi validation)
export const SearchNote=async(req,res)=>{
    let{SearchKey}=req.query;
    const search=await noteModel.find({
        title:SearchKey
    })
    res.json({message:"Note Founded",search})
}






// ## 7- get notes that created by specific user (Aplly Joi validation)
export const getNotes = async (req, res) => {
  const notes = await noteModel.find({createdBy:req.currentUserID});
    if (notes) {
      res.json({ message: "Done",notes });
    }
  };
  