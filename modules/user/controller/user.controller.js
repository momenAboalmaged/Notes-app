import { userModel } from "../../../DB/models/user.model.js";
import { noteModel } from "../../../DB/models/note.model.js";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// ## 5- change password (user must be logged in)
export const changePassword = async (req, res) => {
  let { currentPassword, newPassword, newCPassword } = req.body;
  if (newPassword == newCPassword) {
    let user = await userModel.findById(req.currentUserID);
    let matched = await bcryptjs.compare(currentPassword, user.password);
    if (matched) {
      let hashPass = await bcryptjs.hash(
        newPassword,
        parseInt(process.env.saltRound)
      );
      let updatedUser = await userModel.findByIdAndUpdate(
        user._id,
        { password: hashPass },
        { new: true }
      );
      res.json({ message: "Updated", updatedUser });
    } else {
      res.json({ message: "currentPassword Invalid" });
    }
  } else {
    res.json({ message: "newPassword must equal newCPassword" });
  }
};


// ## 6- DELETE USER (account owner only)(user must be logged in and confirmed)(Aplly Joi validation)
export const deleteUser = async (req, res) => {
  try {
    let { password } = req.body;
    let user = await userModel.findById(req.currentUserID);
    console.log(user);
    if (user) {
      let matched = await bcryptjs.compare(password, user.password);
      console.log(matched);
      if (matched) {
        const deletedNotes=await noteModel.deleteMany({createdBy:req.currentUserID})
        const deletedUser = await userModel.findByIdAndDelete({
          _id: req.currentUserID,
        });
        console.log(deletedUser);
        res.json({ message: "Deleted successfully", deletedUser });
      } else {
        res.json({ message: "In-correct Password" });
      }
    } else {
      res.json({ message: "you are not authorized to delete this account" });
    }
  } catch (error) {
    res.json({ message: "Error", error });
  }
};



// ## 7- Get all users (user must be logged in and confirmed)
export const getAllUsers=async(req,res)=>{
    const users=await userModel.find({})
    res.json({message:"All Users here",users})
}



// ## 8- get specific user by id with his notes (user must be logged in and confirmed)(Aplly Joi validation)
export const getSpecificUser=async(req,res)=>{
  const user=await userModel.findById(req.currentUserID)
  if(user){
    const notes=await noteModel.find({createdBy:req.currentUserID}).populate('createdBy','name -_id')
     res.json({ message: "Done", notes });

  }else{
    res.json({ message: "Failed" });

  }
}

