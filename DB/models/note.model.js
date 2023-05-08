import mongoose from "mongoose";

// ## notes has (title ,content,createdBy=> ref to user model)
const noteSchema=new mongoose.Schema({
    title:String,
    content:String,
    createdBy: 
    { type:mongoose.Schema.ObjectId,
      ref: 'user'},
},{timestamps:true})

export const noteModel=mongoose.model('note',noteSchema)